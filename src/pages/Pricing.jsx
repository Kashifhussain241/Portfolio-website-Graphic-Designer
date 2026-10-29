import { Link } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { services } from '../data/services.js'
import { useMeta } from '../hooks/useMeta.js'

export default function Pricing() {
  useMeta(
    'Pricing — Wasir Ahmad',
    'Every design project is quoted to its scope. Choose a service and request a quote.'
  )

  return (
    <div className="min-h-screen bg-paper text-midnight">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-16">
        <SectionHeading
          title="Pricing"
          text="Every project is quoted to its scope. Pick a service and I will send a quote with deliverables, timeline and revision rounds."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group flex flex-col rounded-3xl border border-midnight/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl hover:shadow-midnight/5"
            >
              <h2 className="font-display text-xl font-bold transition-colors group-hover:text-coral">
                {s.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-coral">Custom quote</p>
              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-midnight/60">
                {s.deliverables.slice(0, 4).map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-coral">+</span>
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-midnight px-5 py-2.5 text-sm font-medium text-paper transition-all duration-200 hover:bg-coral hover:text-midnight active:scale-[0.98]"
              >
                Request a quote
              </Link>
            </div>
          ))}
        </div>

        <ContactCTA />
      </div>
    </div>
  )
}
