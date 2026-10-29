import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import AnimatedSection from '../common/AnimatedSection.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { services } from '../../data/services.js'

const accents = {
  lime: 'bg-lime',
  violet: 'bg-violet',
  coral: 'bg-coral',
}

export default function ServicesOverview() {
  return (
    <AnimatedSection>
      <SectionHeading title="What I design" text="Five services for sellers, brands and marketers." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="group rounded-3xl border border-midnight/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl hover:shadow-midnight/5"
          >
            <span
              className={`mb-10 block h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-125 ${accents[s.accent] || 'bg-lime'}`}
            />
            <h3 className="font-display text-xl font-bold transition-colors group-hover:text-coral">
              {s.title}
            </h3>
            <p className="mt-2 text-midnight/60">{s.short}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
              Explore service
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  )
}
