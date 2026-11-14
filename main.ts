// food-picture-01 entry, v1 (Node 22, standard library only).
// The picture is the entry.png beside this file: a photorealistic tonkotsu
// ramen shot — tall glossy noodle pull, dripping ajitama yolk, bold chili-oil
// spiral on cream broth, dark moody background with warm golden bokeh.
// The program copies it to /output/entry.png (or MAKEFUN_OUTPUT_DIR when set,
// for local runs). The judge sees exactly the bytes copied.

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
// Fail fast if the picture is missing or empty: a silent bad copy would
// hand the judge a broken file, so refuse to run instead of copying one.
const size = statSync(src).size;
if (size === 0) throw new Error('entry.png is empty, refusing to copy');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(src, join(outDir, 'entry.png'));
