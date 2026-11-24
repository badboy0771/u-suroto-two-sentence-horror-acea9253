// Two-Sentence Horror — a baby monitor, a second set of breathing.
//
// The entry is a single story of exactly two sentences. The program below
// exists only to prove the story passes the bounty gate before it is
// submitted: length, sentence count, and a byte-exact round trip through
// /output/entry.txt. Nothing here is clever on purpose — the story does
// the frightening, the code just refuses to ship a broken file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The story. Sentence one sets the baseline — one sound, ever, in all the
// nights this monitor has run. Sentence two breaks that baseline with a
// second set of breathing, in perfect time with hers: something is in the
// room with her, close enough to share her rhythm, and it has been
// listening long enough to learn it.
const ENTRY =
  "The baby monitor has only ever picked up one sound: my daughter breathing in her sleep. Last night it picked up a second set of breathing, perfectly in time with hers.";

const MAX_CHARS = 400;
const SENTENCES_REQUIRED = 2;

// Sentence terminators the gate counts. A colon or a comma is not a
// sentence end; only a full stop, an exclamation, or a question mark
// closes one. The entry uses exactly two full stops, one per sentence.
const TERMINATOR = /[.!?]/g;

function sentenceCount(text: string): number {
  return (text.match(TERMINATOR) ?? []).length;
}

function fail(message: string): never {
  throw new Error(`entry rejected: ${message}`);
}

function validateStory(raw: string): string {
  // The gate counts characters, so the check runs on the raw string as
  // written — no trimming first, no silent fixes. A story with stray
  // whitespace at either end fails loudly instead of being repaired.
  if (raw.length < 1 || raw.length > MAX_CHARS) {
    fail(`length is ${raw.length} characters, gate allows 1-${MAX_CHARS}`);
  }
  if (raw !== raw.trim()) {
    fail("leading or trailing whitespace is not allowed");
  }
  if (raw.includes("\n")) {
    fail("entry must not contain a newline");
  }
  const sentences = sentenceCount(raw);
  if (sentences !== SENTENCES_REQUIRED) {
    fail(`found ${sentences} sentence terminators, need exactly ${SENTENCES_REQUIRED}`);
  }
  // Two terminators could still hide in one run-on sentence if they were
  // adjacent ("sleep.."), so confirm each terminator is followed by a
  // space and a capital letter, or ends the text — the shape of two real
  // sentences, not punctuation noise.
  const shape = /^[^.!?]+[.!?] [A-Z][^.!?]+[.!?]$/;
  if (!shape.test(raw)) {
    fail("entry does not read as exactly two well-formed sentences");
  }
  return raw;
}

function publish(validated: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", validated, "utf8");
  // Read the file back and compare byte for byte: a write that silently
  // changed the story (encoding, newline, truncation) must fail here,
  // before anyone submits it.
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== validated) {
    fail("read-back mismatch: /output/entry.txt does not match the story");
  }
}

function main(): void {
  const validated = validateStory(ENTRY);
  publish(validated);
  const bytes = new TextEncoder().encode(validated).length;
  console.log(
    `wrote /output/entry.txt (${validated.length} characters, ${bytes} bytes, ` +
      `${sentenceCount(validated)} sentences)`,
  );
  console.log(validated);
}

main();
