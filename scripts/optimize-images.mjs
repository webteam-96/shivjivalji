import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const targets = [
  { dir: 'public',              maxWidth: 1920 },
  { dir: 'public/products',     maxWidth: 1200 },
  { dir: 'public/applications', maxWidth: 1200 },
]
const skip = new Set(['logo.png'])

let totalBefore = 0
let totalAfter = 0

for (const { dir, maxWidth } of targets) {
  const entries = await readdir(dir)
  for (const name of entries) {
    if (!/\.png$/i.test(name)) continue
    if (skip.has(name)) continue
    const src = path.join(dir, name)
    const dst = src.replace(/\.png$/i, '.webp')
    const before = (await stat(src)).size
    await sharp(src)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dst)
    const after = (await stat(dst)).size
    totalBefore += before
    totalAfter += after
    const pct = ((1 - after / before) * 100).toFixed(0)
    console.log(`${name.padEnd(38)} ${(before / 1024).toFixed(0).padStart(6)} KB -> ${(after / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)`)
  }
}

console.log('-'.repeat(70))
console.log(`TOTAL  ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (-${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`)
