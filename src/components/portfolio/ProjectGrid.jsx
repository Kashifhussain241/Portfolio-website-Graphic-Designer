import { AnimatePresence } from 'motion/react'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectGrid({ projects }) {
  if (!projects.length) {
    return <p className="py-16 text-midnight/60">No projects in this category yet.</p>
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </AnimatePresence>
    </div>
  )
}
