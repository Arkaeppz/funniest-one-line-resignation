// Entry for the make.fun bounty "The Funniest One-Line Resignation Letter"
// (u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947).
// The program writes one line — a retry loop's resignation letter — to
// entry.txt in the output directory.
// The line is 131 characters, inside the gate's 1–140 limit, and was chosen
// for the judge's brief: the flat, tired, faintly passive-aggressive voice
// of a worker who has had enough, with a complaint only a retry loop could
// make — it ran out of faith, patience, and exponential backoff.
// No network, no randomness: two runs produce identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "After attempt 4,096, I resign. You never succeeded once, and I have officially run out of faith, patience, and exponential backoff.";

writeFileSync(
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt"),
  LINE,
);
