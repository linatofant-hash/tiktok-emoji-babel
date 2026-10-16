const emojiGroups = [
  {
    emoji: "😂",
    labels: [
      "Freudentränen", "Tränen der Freude", "Gesicht mit Freudentränen",
      "face with tears of joy", "tears of joy", "joy",
      "solze sreče", "obraz s solzami sreče", "solze radosti"
    ]
  },
  {
    emoji: "🤣",
    labels: [
      "lautes Lachen", "sich vor Lachen auf dem Boden wälzen", "vor Lachen rollen",
      "rolling on the floor laughing", "rofl", "loud laughter",
      "valjanje po tleh od smeha", "glasen smeh"
    ]
  },
  {
    emoji: "🤭",
    labels: [
      "Kichern", "kichernd", "Hand vor dem Mund", "Gesicht mit Hand vor dem Mund",
      "giggling", "giggle", "face with hand over mouth",
      "hihitanje", "obraz z roko čez usta"
    ]
  },
  {
    emoji: "😭",
    labels: [
      "laut weinendes Gesicht", "heftig weinend", "Weinen", "Schluchzen",
      "loudly crying face", "sob", "sobbing", "crying loudly",
      "glasno jokajoči obraz", "jokanje"
    ]
  },
  {
    emoji: "🥹",
    labels: [
      "Tränen zurückhalten", "Gesicht hält Tränen zurück", "gerührt",
      "face holding back tears", "holding back tears", "touched",
      "obraz zadržuje solze", "ganjen"
    ]
  },
  {
    emoji: "🥰",
    labels: [
      "lächelndes Gesicht mit Herzen", "verliebtes Gesicht", "verliebt",
      "smiling face with hearts", "in love", "loved",
      "nasmejan obraz s srčki", "zaljubljen"
    ]
  },
  {
    emoji: "😍",
    labels: [
      "lächelndes Gesicht mit Herzaugen", "Herzaugen", "verknallt",
      "smiling face with heart-eyes", "heart eyes", "heart-eyes",
      "nasmejan obraz s srčkastimi očmi", "srčkaste oči"
    ]
  },
  {
    emoji: "😘",
    labels: [
      "Kuss zuwerfendes Gesicht", "Kussgesicht", "Kuss",
      "face blowing a kiss", "blowing a kiss", "kiss",
      "obraz pošilja poljub", "poljub"
    ]
  },
  {
    emoji: "😊",
    labels: [
      "lächelndes Gesicht mit lächelnden Augen", "schüchternes Lächeln",
      "smiling face with smiling eyes", "bashful smile",
      "nasmejan obraz z nasmejanimi očmi"
    ]
  },
  {
    emoji: "😅",
    labels: [
      "grinsendes Gesicht mit Schweißtropfen", "erleichtert schwitzend", "nervöses Lachen",
      "grinning face with sweat", "nervous laugh", "sweat smile",
      "nasmejan obraz s kapljico znoja", "živčen smeh"
    ]
  },
  {
    emoji: "😁",
    labels: [
      "strahlendes Gesicht mit lachenden Augen", "breites Grinsen",
      "beaming face with smiling eyes", "big grin", "grinning",
      "žareč obraz z nasmejanimi očmi", "širok nasmeh"
    ]
  },
  {
    emoji: "🙃",
    labels: [
      "umgedrehtes Gesicht", "auf dem Kopf stehendes Gesicht",
      "upside-down face", "upside down face",
      "narobe obrnjen obraz"
    ]
  },
  {
    emoji: "😉",
    labels: [
      "zwinkerndes Gesicht", "Zwinkern", "zwinkernd",
      "winking face", "wink", "winking",
      "mežikajoči obraz", "pomežik"
    ]
  },
  {
    emoji: "😏",
    labels: [
      "süffisant lächelndes Gesicht", "selbstgefälliges Gesicht", "verschmitzt",
      "smirking face", "smirk", "suggestive",
      "samozadovoljen obraz", "navihan nasmešek"
    ]
  },
  {
    emoji: "😌",
    labels: [
      "erleichtertes Gesicht", "erleichtert", "zufrieden",
      "relieved face", "relieved", "content",
      "olajšan obraz", "zadovoljen"
    ]
  },
  {
    emoji: "🥺",
    labels: [
      "flehendes Gesicht", "bettelnder Blick", "große Augen",
      "pleading face", "puppy eyes", "pleading",
      "proseč obraz", "proseče oči"
    ]
  },
  {
    emoji: "😳",
    labels: [
      "errötetes Gesicht", "fassungslos", "verlegen",
      "flushed face", "embarrassed", "stunned",
      "zardel obraz", "osupel"
    ]
  },
  {
    emoji: "💀",
    labels: [
      "Totenkopf", "Schädel", "tot",
      "skull", "dead", "i am dead",
      "lobanja", "mrtev"
    ]
  },
  {
    emoji: "❤️",
    labels: [
      "rotes Herz", "Herz", "Liebe",
      "red heart", "heart", "love",
      "rdeče srce", "srce", "ljubezen"
    ]
  },
  {
    emoji: "🖤",
    labels: [
      "schwarzes Herz", "black heart", "črno srce"
    ]
  },
  {
    emoji: "💜",
    labels: [
      "lila Herz", "violettes Herz", "purple heart", "vijolično srce"
    ]
  },
  {
    emoji: "🔥",
    labels: [
      "Feuer", "Flamme", "fire", "flame", "ogenj", "plamen"
    ]
  },
  {
    emoji: "✨",
    labels: [
      "Funkeln", "Glitzern", "Glitzer", "sparkles", "sparkle", "iskrice", "bleščice"
    ]
  },
  {
    emoji: "👀",
    labels: [
      "Augen", "große Augen", "eyes", "looking", "oči", "gledam"
    ]
  },
  {
    emoji: "🤔",
    labels: [
      "nachdenkendes Gesicht", "Nachdenken", "thinking face", "thinking",
      "razmišljujoči obraz", "razmišljanje"
    ]
  }
];

function normalizeLabel(value) {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[“”„‟'’`´]/g, "")
    .replace(/[._–—-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const emojiIndex = new Map();

for (const group of emojiGroups) {
  for (const label of group.labels) {
    const key = normalizeLabel(label);
    if (!emojiIndex.has(key)) emojiIndex.set(key, group.emoji);
  }
}

export function lookupEmoji(label) {
  return emojiIndex.get(normalizeLabel(label)) ?? null;
}

function translateBracketedLabels(text, result) {
  return text.replace(/\[([^\]\n]{1,80})\]/gu, (whole, label) => {
    const emoji = lookupEmoji(label);
    if (!emoji) {
      result.unknown.add(label.trim());
      return whole;
    }

    result.recovered += 1;
    return emoji;
  });
}

function translateExactLabelLines(text, result) {
  return text
    .split("\n")
    .map((line) => {
      const leading = line.match(/^\s*/u)?.[0] ?? "";
      const trailing = line.match(/\s*$/u)?.[0] ?? "";
      const core = line.trim();
      if (!core) return line;

      const emoji = lookupEmoji(core);
      if (!emoji) return line;

      result.recovered += 1;
      return `${leading}${emoji}${trailing}`;
    })
    .join("\n");
}

export function translateTikTokText(input) {
  const result = {
    recovered: 0,
    unknown: new Set()
  };

  const source = String(input ?? "");
  const bracketed = translateBracketedLabels(source, result);
  const text = translateExactLabelLines(bracketed, result);

  return {
    text,
    recovered: result.recovered,
    unknown: [...result.unknown]
  };
}

export const supportedLabelCount = emojiIndex.size;
export const supportedEmojiCount = emojiGroups.length;
