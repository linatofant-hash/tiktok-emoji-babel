import test from "node:test";
import assert from "node:assert/strict";

import { lookupEmoji, translateTikTokText } from "../translator.js";

test("translates adjacent German bracket labels", () => {
  const result = translateTikTokText("[Freudentränen][Freudentränen][Kichern]");

  assert.equal(result.text, "😂😂🤭");
  assert.equal(result.recovered, 3);
  assert.deepEqual(result.unknown, []);
});

test("translates exact unbracketed label lines without changing prose", () => {
  const result = translateTikTokText("lautes Lachen\nhahahaha\nKichern");

  assert.equal(result.text, "🤣\nhahahaha\n🤭");
  assert.equal(result.recovered, 2);
});

test("supports English and Slovenian aliases", () => {
  assert.equal(lookupEmoji("face with tears of joy"), "😂");
  assert.equal(lookupEmoji("solze sreče"), "😂");
  assert.equal(lookupEmoji("glasen smeh"), "🤣");
});

test("translates the Danish fire label found in TikTok comments", () => {
  const result = translateTikTokText("[Ild][Ild][Ild]");

  assert.equal(result.text, "🔥🔥🔥");
  assert.equal(result.recovered, 3);
  assert.deepEqual(result.unknown, []);
});

test("normalizes case, punctuation, and repeated spaces", () => {
  assert.equal(lookupEmoji("  FACE---WITH   TEARS OF JOY  "), "😂");
  assert.equal(lookupEmoji("KICHERN"), "🤭");
});

test("preserves unknown labels and reports them once", () => {
  const result = translateTikTokText("[TikTok Sonderdelikt] [TikTok Sonderdelikt]");

  assert.equal(result.text, "[TikTok Sonderdelikt] [TikTok Sonderdelikt]");
  assert.equal(result.recovered, 0);
  assert.deepEqual(result.unknown, ["TikTok Sonderdelikt"]);
});

test("handles null input", () => {
  const result = translateTikTokText(null);

  assert.equal(result.text, "");
  assert.equal(result.recovered, 0);
});
