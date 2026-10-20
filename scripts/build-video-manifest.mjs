import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../public/', import.meta.url));
const sizes = {};
async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await scan(file);
    else if (/\.(mp4|webm)$/.test(entry.name)) sizes['/' + path.relative(root, file).split(path.sep).join('/')] = (await stat(file)).size;
  }
}
await scan(path.join(root, 'videos'));
await writeFile(new URL('../worker/video-sizes.json', import.meta.url), JSON.stringify(Object.fromEntries(Object.entries(sizes).sort()), null, 2) + '\n');
