import { useState } from 'react'
import { motion } from 'motion/react'
import SectionHeading from '../components/common/SectionHeading.jsx'
import CategoryFilter from '../components/portfolio/CategoryFilter.jsx'
import ProjectGrid from '../components/portfolio/ProjectGrid.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { projects } from '../data/projects.js'
import { useMeta } from '../hooks/useMeta.js'

export default function Portfolio() {
  const [cat, setCat] = useState('all')
  useMeta(
    'Portfolio — Wasir Ahmad',
    'Selected Amazon listing images, A+ Content, social media design and Canva templates by Wasir Ahmad.'
  )
  const filteredProjects = projects.filter((p) => cat === 'all' || p.category === cat)

  return (
    <div className="min-h-screen bg-paper text-midnight">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-16">
        <SectionHeading
          title="Portfolio"
          text="A selection of product listing images, A+ Content, social campaigns and templates built for e-commerce brands."
        />

        <div className="mt-8 mb-8 flex flex-col gap-4">
          <CategoryFilter value={cat} onChange={setCat} />
          <motion.p
            key={filteredProjects.length}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-midnight/50"
          >
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </motion.p>
        </div>

        <ProjectGrid projects={filteredProjects} />

        <ContactCTA />
      </div>
    </div>
  )
}
