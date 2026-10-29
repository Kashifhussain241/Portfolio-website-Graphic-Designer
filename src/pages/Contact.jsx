import { useState } from 'react'
import { Mail, Clock, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading.jsx'
import { services } from '../data/services.js'
import { profile } from '../data/profile.js'
import { useMeta } from '../hooks/useMeta.js'

const field =
  'w-full rounded-xl border border-midnight/15 bg-white px-4 py-3 text-midnight outline-none transition-colors placeholder:text-midnight/35 focus:border-midnight'

export default function Contact() {
  const [sent, setSent] = useState(false)
  useMeta(
    'Contact — Wasir Ahmad',
    'Tell me about your project. Send a message and I will reply with next steps and a quote.'
  )

  function submit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const body = `Name: ${d.name}\nEmail: ${d.email}\nService: ${d.service}\n\n${d.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      'Project inquiry'
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-paper text-midnight">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-20">
        <SectionHeading
          title="Start your project"
          text="Tell me what you need. Your email app will open with the message ready to send."
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Your name
              </label>
              <input id="name" name="name" required placeholder="Jane Smith" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@brand.com"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                What do you need?
              </label>
              <select id="service" name="service" className={field} defaultValue={services[0].title}>
                {services.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Product, goals, deliverables, timeline..."
                className={field}
              />
            </div>

            <button className="w-full rounded-full bg-midnight px-6 py-3 font-medium text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral hover:text-midnight active:scale-[0.98]">
              Send inquiry
            </button>

            {sent && (
              <p className="flex items-center gap-2 rounded-xl bg-lime/40 px-4 py-3 text-sm text-midnight">
                <CheckCircle2 size={18} />
                Your email app should open. If it didn't, email me directly at {profile.email}.
              </p>
            )}
          </form>

          <aside className="h-fit rounded-3xl border border-midnight/10 bg-white p-7 shadow-sm">
            <h2 className="font-display text-lg font-bold">Other ways to reach me</h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 flex items-center gap-3 text-sm text-midnight/70 transition-colors hover:text-coral"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <p className="mt-3 flex items-center gap-3 text-sm text-midnight/70">
              <Clock size={18} /> Replies within 1–2 business days
            </p>
            <p className="mt-6 border-t border-midnight/10 pt-5 text-sm leading-relaxed text-midnight/55">
              Include your product category, the deliverables you need and any deadline. If you have
              brand assets or references, mention them and I will ask for the files.
            </p>
          </aside>
        </div>
      </div>
    </div>
  )
}
