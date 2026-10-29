import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Maximize2 } from 'lucide-react'
import { featuredProjects } from '../../data/projects.js'
import { services } from '../../data/services.js'
import Lightbox from '../common/Lightbox.jsx'
import Reveal from '../common/Reveal.jsx'

export default function FeaturedProjects() {
  const [preview, setPreview] = useState(null)
  const list = featuredProjects.slice(0, 6)

  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 sm:pt-24">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm font-medium text-midnight/60">
            <span className="h-2 w-2 rounded-full bg-coral" />
            Selected work
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/portfolio"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-coral"
        >
          View all <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => {
          const cat = services.find((s) => s.slug === p.category)?.title || 'Design'
          return (
            <Reveal
              key={p.slug}
              as="article"
              delay={Math.min(i, 5) * 0.06}
              className="group flex h-full flex-col"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-midnight/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-midnight/10 hover:ring-coral/30">
                <button
                  type="button"
                  onClick={() => setPreview(p)}
                  aria-label={`Preview ${p.title} images`}
                  className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-[#eceae4] p-3 text-left"
                >
                  <img
                    src={p.cover}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-midnight shadow-sm backdrop-blur transition-colors group-hover:bg-white">
                    {cat}
                  </span>
                  <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-midnight shadow-sm backdrop-blur transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 group-hover:scale-110 group-hover:bg-midnight group-hover:text-paper">
                    <Maximize2 size={16} />
                  </span>
                </button>
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="flex flex-1 items-end justify-between gap-3 p-5"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-midnight transition-colors group-hover:text-coral">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-midnight/55">{p.deliverables?.[0]}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-midnight text-paper transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-coral group-hover:text-midnight">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              </div>
            </Reveal>
          )
        })}
      </div>

      {preview && <Lightbox images={preview.images} onClose={() => setPreview(null)} />}
    </section>
  )
}
