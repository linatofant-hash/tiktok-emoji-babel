# Emoji Babel

**For all iPhone users staring at TikTok in bewilderment.**

TikTok occasionally renders Android users' emojis as localized accessibility
labels, leaving everyone else to interpret German stage directions instead of
human emotion.

Emoji Babel turns this:

```text
[Freudentränen][Freudentränen][Kichern]
lautes Lachen
```

back into this:

```text
😂😂🤭
🤣
```

Because `[Freudentränen]` is not an acceptable user interface.

## Features

- Restores bracketed labels even when they appear directly beside one another.
- Restores exact standalone labels such as `lautes Lachen`.
- Includes German, English, and Slovenian aliases.
- Preserves unknown labels and lists them for easy reporting.
- Runs entirely in the browser: no upload, tracking, account, or backend.
- Works as a zero-build static site suitable for GitHub Pages.

## Run locally

```bash
npm run serve
```

Then open <http://localhost:4173>.

## Test

```bash
npm test
```

## Add a translation

Add the localized accessibility label to the relevant group in
[`translator.js`](./translator.js), then add a test in
[`tests/translator.test.js`](./tests/translator.test.js).

## Roadmap

- More languages and labels, contributed from real examples.
- Optional screenshot OCR for comments that TikTok refuses to let anyone copy.
- Shareable translation links without sending comment text to a server.

## Privacy

All translation happens locally in the browser. Nothing is transmitted or
stored.

## Disclaimer

Emoji Babel is an unofficial community utility and is not affiliated with,
endorsed by, or sponsored by TikTok.

## License

[MIT](./LICENSE)
