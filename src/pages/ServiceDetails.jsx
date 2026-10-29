import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'
import ProjectGrid from '../components/portfolio/ProjectGrid.jsx'
import Button from '../components/common/Button.jsx'
import NotFound from './NotFound.jsx'
import { useMeta } from '../hooks/useMeta.js'

export default function ServiceDetails() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  useMeta(
    s ? `${s.title} — Wasir Ahmad` : 'Service not found — Wasir Ahmad',
    s?.short
  )
  if (!s) return <NotFound />

  const related = projects.filter((p) => p.category === s.slug)

  return (
    <div className="min-h-screen bg-paper text-midnight">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-20">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-midnight/55 transition-colors hover:text-coral"
        >
          <ArrowLeft size={15} /> All services
        </Link>

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold sm:text-6xl">{s.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-midnight/70">{s.intro}</p>

        <h2 className="mb-4 mt-14 font-display text-2xl font-bold">What's included</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {s.deliverables.map((d) => (
            <li
              key={d}
              className="flex gap-2 rounded-xl border border-midnight/10 bg-white px-4 py-3 text-midnight/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/25 hover:shadow-sm"
            >
              <span className="text-coral">+</span>
              {d}
            </li>
          ))}
        </ul>

        <h2 className="mb-6 mt-14 font-display text-2xl font-bold">Related work</h2>
        <ProjectGrid projects={related} />

        <h2 className="mb-4 mt-14 font-display text-2xl font-bold">Questions</h2>
        <div className="max-w-3xl">
          {s.faqs.map(([q, a]) => (
            <details
              key={q}
              className="mb-3 rounded-2xl border border-midnight/10 bg-white p-5 transition-colors hover:border-midnight/25"
            >
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-3 text-midnight/65">{a}</p>
            </details>
          ))}
        </div>

        <Button to="/contact" className="mt-10">Request a quote</Button>
      </div>
    </div>
  )
}
