// news-image-20261126 entry (Node 22, standard library only).
// The poster is the entry.png beside this file; the program copies it
// to /output/entry.png. No network, deterministic: the same bytes out
// on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'entry.png'),
  join(outDir, 'entry.png'),
);
