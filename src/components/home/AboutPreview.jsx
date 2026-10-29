import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { profile } from '../../data/profile.js'
import Process from './Process.jsx'

export default function AboutPreview() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-4 pb-16">
      <div className="max-w-2xl">
        <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-midnight">
          About Wasir
        </h2>

        <p className="mb-6 text-lg leading-relaxed text-midnight/70">
          {profile.bio.slice(0, 2).join(' ')}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {profile.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-midnight/10 bg-white px-3 py-1.5 text-sm text-midnight/70"
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-coral"
        >
          More about me <ArrowRight size={16} />
        </Link>
      </div>

      <Process />
    </div>
  )
}
