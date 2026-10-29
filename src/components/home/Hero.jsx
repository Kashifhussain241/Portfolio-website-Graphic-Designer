import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Star, MousePointer2 } from 'lucide-react'
import Button from '../common/Button.jsx'
import FloatingCards from './FloatingCards.jsx'
import ToolIcons from './ToolIcons.jsx'
import { EASE } from '../common/Reveal.jsx'
import { profile } from '../../data/profile.js'

const lines = ['Design That Makes', 'Your Brand Stand Out.']

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] overflow-x-hidden overflow-y-clip bg-paper">
      <motion.div
        animate={reduce ? undefined : { x: [0, 16, 0], y: [0, -14, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-violet/20 blur-[80px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -18, 0], y: [0, 12, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="pointer-events-none absolute -top-40 right-10 h-[360px] w-[360px] rounded-full bg-lime/20 blur-[80px]"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="pointer-events-none absolute -bottom-40 left-1/3 h-[320px] w-[320px] rounded-full bg-coral/15 blur-[80px]"
      />

      <div className="pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[55%_45%]">
            <div>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-midnight/10 bg-white/60 px-3 py-1.5 text-sm text-midnight/70 backdrop-blur"
              >
                <Star size={14} className="text-coral" />
                <span>Hi, I'm {profile.name}</span>
              </motion.p>

              <h1 className="font-display text-[clamp(2.75rem,7vw,5.75rem)] font-bold leading-[1.02] tracking-tight text-midnight">
                {lines.map((line, i) => (
                  <motion.span
                    key={line}
                    initial={reduce ? false : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: EASE }}
                    className="block"
                  >
                    {line}
                    {i === lines.length - 1 && <span className="text-coral">.</span>}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
                className="mt-6 max-w-xl text-lg leading-[1.7] text-midnight/75"
              >
                High-impact Amazon listing images, A+ Content, social media creatives, and commercial
                infographics designed for your business.
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45, ease: EASE }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Button
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full bg-midnight px-6 py-3 font-medium text-paper transition-colors hover:bg-coral hover:text-midnight"
                >
                  Explore my work <ArrowRight size={18} />
                </Button>
                <Button
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-midnight px-6 py-3 font-medium text-midnight transition-colors hover:bg-midnight hover:text-paper"
                >
                  Let's work together
                </Button>
              </motion.div>
            </div>

            <div className="relative hidden h-[520px] lg:block">
              <FloatingCards />
              <ToolIcons />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 hidden items-center gap-2 text-xs text-midnight/60 md:flex">
        <MousePointer2 size={16} />
        <p>Scroll down</p>
      </div>

      <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-sm text-midnight/60 md:flex">
        <span>Available for freelance work</span>
        <span className="h-1 w-1 rounded-full bg-midnight/30" />
        <a
          href={`mailto:${profile.email}`}
          className="underline underline-offset-2 transition-colors hover:text-coral"
        >
          {profile.email}
        </a>
      </div>
    </section>
  )
}
