import { motion, useReducedMotion } from 'motion/react'
import { EASE } from './Reveal.jsx'

export default function AnimatedSection({ children, className = '', id }) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 py-16 sm:py-24 ${className}`}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </motion.section>
  )
}
