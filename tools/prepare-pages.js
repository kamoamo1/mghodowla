const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, '_site');
const base = (process.env.PAGES_BASE_PATH || '').replace(/\/$/, '');
fs.mkdirSync(out, { recursive: true });
for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  const publicDir = entry.isDirectory() && ['blog', 'en', 'fonts'].includes(entry.name);
  const publicFile = entry.isFile() && /\.(html|css|js|svg|png|xml|txt|webmanifest)$/.test(entry.name) && entry.name !== 'README.txt';
  if (publicDir || publicFile) fs.cpSync(path.join(root, entry.name), path.join(out, entry.name), { recursive: true });
}
const errorPath = path.join(out, '404.html');
fs.writeFileSync(errorPath, fs.readFileSync(errorPath, 'utf8').replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`));
const manifestPath = path.join(out, 'site.webmanifest');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.start_url = './';
for (const icon of manifest.icons) icon.src = icon.src.replace(/^\//, './');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
fs.writeFileSync(path.join(out, '.nojekyll'), '');
console.log('Public files prepared in _site');
