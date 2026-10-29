import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Process from '../components/home/Process.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { useMeta } from '../hooks/useMeta.js'

export default function About() {
  useMeta(
    'About — Wasir Ahmad',
    'Graphic designer with 3+ years of experience in Amazon listing images, A+ Content, social media graphics and Canva templates.'
  )

  return (
    <div className="min-h-screen bg-paper text-midnight">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-8">
        <SectionHeading
          title="About"
          text="A graphic designer focused on commercial visuals that help products get noticed, understood and bought."
        />

        <div className="mt-10 grid items-start gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <h2 className="mb-4 font-display text-4xl font-bold sm:text-5xl">About Wasir</h2>
            <p className="text-lg leading-relaxed text-midnight">{profile.bio[0]}</p>
            {profile.bio.slice(1).map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-midnight/65">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-3xl border border-midnight/10 bg-white p-7 shadow-sm">
            <h3 className="font-display text-lg font-bold">Tools I use</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-lime/50 px-3 py-1.5 text-xs font-medium text-midnight"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-midnight px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-coral hover:text-midnight"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-midnight/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-midnight"
              >
                View my work <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl border border-midnight/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl hover:shadow-midnight/5">
            <p className="font-display text-3xl font-bold text-coral">{profile.experienceYears}+ years</p>
            <p className="mt-1 text-sm text-midnight/60">Professional design experience</p>
          </div>
          <div className="rounded-3xl border border-midnight/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl hover:shadow-midnight/5">
            <p className="font-display text-xl font-bold">Amazon</p>
            <p className="mt-1 text-sm text-midnight/60">Listing images and A+ Content</p>
          </div>
          <div className="rounded-3xl border border-midnight/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl hover:shadow-midnight/5">
            <p className="font-display text-xl font-bold">Social & templates</p>
            <p className="mt-1 text-sm text-midnight/60">Campaigns and reusable Canva kits</p>
          </div>
        </div>
      </div>

      <Process />
      <ContactCTA />
    </div>
  )
}
