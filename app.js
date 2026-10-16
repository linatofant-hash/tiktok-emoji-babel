import {
  supportedEmojiCount,
  supportedLabelCount,
  translateTikTokText
} from "./translator.js";

const input = document.querySelector("#source-text");
const output = document.querySelector("#translated-text");
const translateButton = document.querySelector("#translate-button");
const copyButton = document.querySelector("#copy-button");
const clearButton = document.querySelector("#clear-button");
const sampleButton = document.querySelector("#sample-button");
const status = document.querySelector("#status");
const unknownPanel = document.querySelector("#unknown-panel");
const unknownList = document.querySelector("#unknown-list");
const labelCount = document.querySelector("#label-count");
const emojiCount = document.querySelector("#emoji-count");

const sample = `[Freudentränen][Freudentränen][Freudentränen]\nlautes Lachen\n[Kichern]\nhahahaha`;

labelCount.textContent = supportedLabelCount;
emojiCount.textContent = supportedEmojiCount;

function setStatus(message, tone = "neutral") {
  status.textContent = message;
  status.dataset.tone = tone;
}

function renderUnknown(unknown) {
  unknownList.replaceChildren();
  unknownPanel.hidden = unknown.length === 0;

  for (const label of unknown) {
    const item = document.createElement("li");
    item.textContent = `[${label}]`;
    unknownList.append(item);
  }
}

function translate() {
  const result = translateTikTokText(input.value);
  output.value = result.text;
  renderUnknown(result.unknown);
  copyButton.disabled = !result.text;

  if (!input.value.trim()) {
    setStatus("Paste TikTok’s theatrical nonsense above.");
  } else if (result.recovered === 0) {
    setStatus("No known stage directions found. TikTok may have invented a new crime.", "warning");
  } else {
    const noun = result.recovered === 1 ? "emoji" : "emojis";
    setStatus(`${result.recovered} ${noun} recovered. TikTok has been informed of nothing.`, "success");
  }
}

translateButton.addEventListener("click", translate);

input.addEventListener("input", () => {
  window.clearTimeout(input.translateTimer);
  input.translateTimer = window.setTimeout(translate, 180);
});

sampleButton.addEventListener("click", () => {
  input.value = sample;
  translate();
  input.focus();
});

clearButton.addEventListener("click", () => {
  input.value = "";
  output.value = "";
  renderUnknown([]);
  copyButton.disabled = true;
  setStatus("The stage has been cleared.");
  input.focus();
});

copyButton.addEventListener("click", async () => {
  if (!output.value) return;

  try {
    await navigator.clipboard.writeText(output.value);
    setStatus("Translation copied. Go restore emotional literacy.", "success");
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy translation";
    }, 1400);
  } catch {
    output.select();
    document.execCommand("copy");
    setStatus("Translation copied by ancient browser magic.", "success");
  }
});

translate();
