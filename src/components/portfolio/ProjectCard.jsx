import { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { services } from '../../data/services.js'
import { ArrowUpRight, Maximize2 } from 'lucide-react'
import Lightbox from '../common/Lightbox.jsx'
import { EASE } from '../common/Reveal.jsx'

export default forwardRef(function ProjectCard({ project, index = 0 }, ref) {
  const [preview, setPreview] = useState(false)
  const reduce = useReducedMotion()
  const cat = services.find((s) => s.slug === project.category)?.title || 'Design'

  return (
    <motion.article
      layout
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index, 5) * 0.05,
        ease: EASE,
        layout: { duration: 0.35, ease: EASE },
      }}
      className="break-inside-avoid"
      ref={ref}
    >
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-midnight/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-midnight/10 hover:ring-coral/30">
        <button
          type="button"
          onClick={() => setPreview(true)}
          aria-label={`Preview ${project.title} images`}
          className="relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-[#eceae4] p-3 text-left"
        >
          {project.cover ? (
            <img
              src={project.cover}
              alt={`${project.title} preview`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
            />
          ) : (
            <div className="h-full w-full rounded-xl bg-gradient-to-br from-violet to-coral" />
          )}
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-midnight shadow-sm backdrop-blur transition-colors group-hover:bg-white">
            {cat}
          </span>
          <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-midnight shadow-sm backdrop-blur transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 group-hover:scale-110 group-hover:bg-midnight group-hover:text-paper">
            <Maximize2 size={16} />
          </span>
        </button>
        <Link
          to={`/portfolio/${project.slug}`}
          className="flex flex-1 items-end justify-between gap-3 p-5"
        >
          <div>
            <h3 className="font-display text-lg font-bold text-midnight transition-colors group-hover:text-coral">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-midnight/55">{project.deliverables?.[0] || cat}</p>
          </div>
          <ArrowUpRight
            size={17}
            className="shrink-0 text-midnight/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral"
          />
        </Link>
      </div>

      {preview && (
        <Lightbox
          images={project.images?.length ? project.images : [project.cover]}
          onClose={() => setPreview(false)}
        />
      )}
    </motion.article>
  )
})
