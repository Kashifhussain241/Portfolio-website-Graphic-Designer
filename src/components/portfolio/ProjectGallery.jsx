import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import Lightbox from '../common/Lightbox.jsx'
import Reveal from '../common/Reveal.jsx'

export default function ProjectGallery({ project, images }) {
  const [active, setActive] = useState(null)
  const items = images?.length ? images : project.images || []

  if (!items.length) {
    return (
      <div
        role="img"
        aria-label={`${project.title} preview`}
        className="aspect-[16/9] w-full rounded-3xl bg-gradient-to-br from-violet to-coral"
      />
    )
  }

  const lightbox =
    active !== null ? (
      <Lightbox images={items} startIndex={active} onClose={() => setActive(null)} />
    ) : null

  if (items.length === 1) {
    return (
      <>
        <Reveal className="mx-auto w-full max-w-4xl">
          <button
            type="button"
            onClick={() => setActive(0)}
            aria-label={`View full image of ${project.title}`}
            className="group relative block w-full overflow-hidden rounded-3xl bg-[#eceae4] p-3 ring-1 ring-midnight/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-coral/30"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={items[0]}
                alt={project.title}
                decoding="async"
                className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-midnight shadow-sm backdrop-blur transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 group-hover:scale-110 group-hover:bg-midnight group-hover:text-paper">
              <Maximize2 size={16} />
            </span>
          </button>
        </Reveal>
        {lightbox}
      </>
    )
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((src, i) => (
          <Reveal key={src} delay={i * 0.06} className={i === 0 ? 'sm:col-span-2' : ''}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View full image ${i + 1} of ${project.title}`}
              className="group relative block w-full overflow-hidden rounded-3xl bg-[#eceae4] p-3 ring-1 ring-midnight/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-coral/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`${project.title}, image ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-midnight shadow-sm backdrop-blur transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 group-hover:scale-110 group-hover:bg-midnight group-hover:text-paper">
                <Maximize2 size={16} />
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      {lightbox}
    </>
  )
}

