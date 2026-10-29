import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = 'src/assets/images/WASIR'
const outDir = 'public/images/work'

const groups = [
  {
    dir: 'LISTING IMAGES',
    prefix: 'listing',
    width: 1400,
    quality: 82,
    files: Array.from({ length: 12 }, (_, i) => `${i + 1}.png`),
  },
  {
    dir: 'A PLUS CONTENT',
    prefix: 'aplus',
    width: 1400,
    quality: 80,
    files: ['1.png', '2.png', '3.png', '4.png', 'EBC.png', 'multi.png', 'Nutra.png'],
  },
  {
    dir: 'SOCIAL MEDIA POSTS',
    prefix: 'social',
    width: 1200,
    quality: 82,
    files: ['1 (3).png', '1.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
  },
  {
    dir: 'COVER IMAGES',
    prefix: 'cover',
    width: 1400,
    quality: 82,
    files: [
      '1.png',
      'cover 1.png',
      'cover 2.png',
      'cover image for cookies.png',
      'cover image.png',
      'CRUMBLE COVER IMAGE.png',
    ],
  },
]

await mkdir(outDir, { recursive: true })

for (const group of groups) {
  for (let i = 0; i < group.files.length; i++) {
    const input = path.join(root, group.dir, group.files[i])
    const base = `${group.prefix}-${String(i + 1).padStart(2, '0')}`
    const full = path.join(outDir, `${base}.webp`)
    const thumb = path.join(outDir, `${base}-thumb.webp`)

    const image = sharp(input).rotate()
    const meta = await image.metadata()

    await image
      .clone()
      .resize({ width: Math.min(group.width, meta.width), withoutEnlargement: true })
      .webp({ quality: group.quality, effort: 5, smartSubsample: true })
      .toFile(full)

    await image
      .clone()
      .resize({ width: Math.min(800, meta.width), withoutEnlargement: true })
      .webp({ quality: 76, effort: 5, smartSubsample: true })
      .toFile(thumb)

    console.log(`${base}: ${meta.width}x${meta.height} -> webp (${group.dir})`)
  }
}
