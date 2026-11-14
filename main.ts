// food-picture-01 entry, v3 (Node 22, standard library only).
// The picture is the entry.png beside this file: a photorealistic tonkotsu
// ramen shot — back to v1's winning 3:4 frame (v2's narrow 1:2 frame scored
// worse), tallest straight glossy noodle pull, molten ajitama yolk cascading
// in a smooth glassy stream down the bowl's exterior and pooling on the
// table, bold chili-oil spiral with glistening droplets, charred chashu,
// dark moody background with a rich warm golden bokeh cluster and elegant
// curling steam that never hides the food.
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
