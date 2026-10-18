// Copies the Astro build (dist/) to the repo root, which GitHub Pages serves.
import { cpSync, rmSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dist = resolve(here, '../dist');
const root = resolve(here, '../..');

// Remove previous build output (and the v2 bundle) from the repo root.
for (const p of ['index.html', '_astro', 'assets', 'uploads', 'og.png', 'favicon.svg', 'Giuseppe_Damasin_Resume.pdf', '404.html']) {
  const target = resolve(root, p);
  if (existsSync(target)) rmSync(target, { recursive: true, force: true });
}
cpSync(dist, root, { recursive: true });
writeFileSync(resolve(root, '.nojekyll'), '');
console.log('Published dist/ to repo root.');
