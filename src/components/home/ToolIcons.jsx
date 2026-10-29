import { motion, useReducedMotion } from 'motion/react'
import { Sparkles } from 'lucide-react'

const tools = [
  { key: 'ps', label: 'Ps', color: 'text-violet' },
  { key: 'ai', label: 'Ai', color: 'text-coral' },
  { key: 'cv', label: 'Cv', color: 'text-lime' },
  { key: 'spark', label: '', color: 'text-lime', icon: true },
]

export default function ToolIcons() {
  const reduce = useReducedMotion()

  return (
    <div
      className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-3"
      role="group"
      aria-label="Tools: Adobe Photoshop, Adobe Illustrator, Canva, AI-assisted creative tools"
    >
      {tools.map((tool, i) => (
        <motion.div
          key={tool.key}
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          whileHover={reduce ? undefined : { scale: 1.08 }}
          whileTap={reduce ? undefined : { scale: 0.95 }}
          transition={
            reduce
              ? undefined
              : {
                  y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
                  scale: { duration: 0.2 },
                }
          }
          className="pointer-events-auto flex h-14 w-14 cursor-default items-center justify-center rounded-2xl border border-white/70 bg-white/70 shadow-lg shadow-midnight/5 backdrop-blur"
        >
          {tool.icon ? (
            <Sparkles size={22} className={tool.color} aria-hidden />
          ) : (
            <span className={`font-display text-xl font-bold ${tool.color}`} aria-hidden>
              {tool.label}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
