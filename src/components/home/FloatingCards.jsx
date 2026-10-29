import { motion, useReducedMotion } from 'motion/react'
import { projects } from '../../data/projects.js'

const ratios = ['4 / 5', '1 / 1', '16 / 10']
const widths = [150, 120, 170, 130, 160, 120, 150]

export default function FloatingCards() {
  const reduce = useReducedMotion()
  const cards = projects
    .filter((p) => p.category !== 'amazon-a-plus-content')
    .slice(0, 7)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {cards.map((p, i) => {
        const t = i / (cards.length - 1)
        const left = 8 + t * 84
        const top = 28 + 42 * (1 - Math.pow(2 * t - 1, 2))
        const rot = (t - 0.5) * 36
        const tilt = (t - 0.5) * -30

        return (
          <div
            key={p.slug}
            style={{
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              width: widths[i],
              transform: `translate(-50%, -50%) rotate(${rot}deg)`,
            }}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.8 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { delay: i * 0.12, duration: 0.5 },
                scale: { delay: i * 0.12, duration: 0.6 },
                y: { duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 },
              }}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-paper p-1.5 shadow-2xl"
              style={{
                aspectRatio: ratios[i % 3],
                rotateY: tilt,
              }}
            >
              <div
                className="h-full w-full rounded-2xl bg-white/60"
                style={{
                  background: p.cover
                    ? `center / contain no-repeat url(${p.cover})`
                    : 'linear-gradient(135deg, #d0f878, #a895ff)',
                }}
              />
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
