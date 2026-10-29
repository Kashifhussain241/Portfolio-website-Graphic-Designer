import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Process from '../components/home/Process.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { services } from '../data/services.js'
import { useMeta } from '../hooks/useMeta.js'

const accents = {
  lime: 'bg-lime',
  violet: 'bg-violet',
  coral: 'bg-coral',
}

export default function Services() {
  useMeta(
    'Services — Wasir Ahmad',
    'Amazon listing images, A+ Content, social media design, Canva templates and commercial infographics.'
  )

  return (
    <div className="min-h-screen bg-paper text-midnight">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-8">
        <SectionHeading
          title="My Services"
          text="Five service categories designed for Amazon sellers, e-commerce brands and social media marketers. Each one is tailored to drive engagement and conversions."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex flex-col rounded-3xl border border-midnight/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl hover:shadow-midnight/5"
            >
              <span
                className={`mb-6 h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-125 ${accents[s.accent] || 'bg-lime'}`}
              />
              <h3 className="font-display text-xl font-bold transition-colors group-hover:text-coral">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-midnight/60">{s.short}</p>
              <ul className="mt-5 space-y-1 text-sm text-midnight/55">
                {s.deliverables.slice(0, 3).map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-coral">+</span>
                    {d}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                Explore service
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <Process />
      <ContactCTA />
    </div>
  )
}
