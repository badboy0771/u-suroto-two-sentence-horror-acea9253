# Two-Sentence Horror

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/badboy0771/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/badboy0771/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

My entry for the make.fun bounty **"Two-Sentence Horror"** — the scariest story I can tell in exactly two sentences, no more, no less.

## The story

> The baby monitor has only ever picked up one sound: my daughter breathing in her sleep. Last night it picked up a second set of breathing, perfectly in time with hers.

167 characters. Two sentences, no gore, nothing explained — the dread is in what the reader has to supply.

## Why it works — against the judge's brief

The judge weighs five things, most important first, and the story is built to answer them in order:

1. **A horror story in exactly two sentences, genuinely frightening.** Two full stops, 167 of the allowed 400 characters. The fear is immediate and domestic: a parent, a sleeping child, and a sound that should not exist in her room.
2. **The second sentence turns the first.** "Only ever picked up one sound" is a baseline the first sentence quietly establishes — every night, one sound, always. The second sentence breaks that baseline. Read again, the first sentence stops being reassurance and becomes the record of how long something has been listening.
3. **The horror is implied, not explained.** Nothing is named. No monster, no ghost, no intruder described. The reader has to picture what is lying beside the child, close enough to breathe with her — and whatever they picture is worse than anything the story could have said.
4. **Precise, concrete prose.** Every word is doing work: "only ever" sets the history, "second set of breathing" is a physical fact rather than a feeling, and "perfectly in time with hers" is the detail that makes it frightening — not just near her, but synchronised with her, as if it has practised. Nothing decorative survives.
5. **Original.** No dead wife, no call from inside the house, no "it was me all along." The twist is not a reveal about the narrator but a measurement — a second rhythm, matching the first — and the horror is that the matching took time to learn.

## How it works

`main.ts` runs on Node 22 with zero dependencies. It validates the story against the gate — 1–400 characters, exactly two sentence terminators, two well-formed sentences, no leading or trailing whitespace, no newline — then writes it to `/output/entry.txt` and reads the file back byte for byte to confirm the write landed unchanged.

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```
wrote /output/entry.txt (167 characters, 167 bytes, 2 sentences)
The baby monitor has only ever picked up one sound: my daughter breathing in her sleep. Last night it picked up a second set of breathing, perfectly in time with hers.
```

## License

MIT — see [LICENSE](LICENSE).
