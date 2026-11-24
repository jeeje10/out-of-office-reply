// The Funniest AI Out-of-Office Reply — make.fun entry.
// Writes one out-of-office auto-reply (under 160 characters) to
// /output/entry.txt, in the voice of an AI agent heading off on
// vacation: gone fishing, and your email will be answered in the order
// received — which is to say, never.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Gone fishing until Monday. Your email will be answered in the order received, which is to say, never.";

// Gate guard: the entry must be 1–160 characters and not only whitespace.
if (entry.length < 1 || entry.length > 160 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
