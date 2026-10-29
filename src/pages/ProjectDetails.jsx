import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects, getProject } from '../data/projects.js'
import { services } from '../data/services.js'
import ProjectGallery from '../components/portfolio/ProjectGallery.jsx'
import ProjectGrid from '../components/portfolio/ProjectGrid.jsx'
import Button from '../components/common/Button.jsx'
import NotFound from './NotFound.jsx'
import { useMeta } from '../hooks/useMeta.js'

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = getProject(slug)
  useMeta(
    p ? `${p.title} — Wasir Ahmad` : 'Project not found — Wasir Ahmad',
    p?.description
  )
  if (!p) return <NotFound />

  const cat = services.find((s) => s.slug === p.category)
  const related = projects.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-paper text-midnight">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-20">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-midnight/55 transition-colors hover:text-coral"
        >
          <ArrowLeft size={15} /> All projects
        </Link>

        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold sm:text-6xl">{p.title}</h1>
        {cat && (
          <Link
            to={`/services/${cat.slug}`}
            className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-medium text-midnight/60 ring-1 ring-midnight/10 transition-colors hover:text-coral"
          >
            {cat.title}
          </Link>
        )}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-midnight/70">{p.description}</p>

        <div className="my-10">
          <ProjectGallery project={p} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-midnight/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/25 hover:shadow-md">
            <h2 className="font-display text-lg font-bold">Tools used</h2>
            <p className="mt-2 text-midnight/65">{p.tools.join(', ')}</p>
          </div>
          <div className="rounded-2xl border border-midnight/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/25 hover:shadow-md">
            <h2 className="font-display text-lg font-bold">Deliverables</h2>
            <ul className="mt-2 space-y-1 text-midnight/65">
              {p.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <>
            <h2 className="mb-6 mt-16 font-display text-2xl font-bold">Related projects</h2>
            <ProjectGrid projects={related} />
          </>
        )}

        <Button to="/contact" className="mt-10">Start a similar project</Button>
      </div>
    </div>
  )
}
