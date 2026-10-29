import { motion } from 'motion/react'
import { services } from '../../data/services.js'

export default function CategoryFilter({ value, onChange }) {
  const items = [{ slug: 'all', title: 'All work' }, ...services]
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {items.map((s) => (
        <button
          key={s.slug}
          type="button"
          onClick={() => onChange(s.slug)}
          aria-pressed={value === s.slug}
          className={`relative rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
            value === s.slug
              ? 'border-midnight text-paper'
              : 'border-midnight/15 text-midnight/70 hover:border-midnight/40 hover:text-midnight'
          }`}
        >
          {value === s.slug && (
            <motion.span
              layoutId="active-category"
              className="absolute inset-0 rounded-full bg-midnight"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
          <span className="relative z-10">{s.title}</span>
        </button>
      ))}
    </div>
  )
}
