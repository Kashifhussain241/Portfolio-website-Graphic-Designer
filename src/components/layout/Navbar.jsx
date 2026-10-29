import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { profile } from "../../data/profile.js";

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-[1.75rem] bg-paper/90 text-midnight backdrop-blur transition-shadow duration-300 ${
          scrolled || open ? 'shadow-xl shadow-black/20' : 'shadow-md shadow-black/5'
        }`}
      >
        <nav
          className="flex items-center justify-between px-5 py-3"
          aria-label="Main"
        >
          <Link to="/" className="font-display text-xl font-bold">
            {profile.name}<span className="text-coral">.</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map(([label, to]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `group relative py-1 text-sm font-medium ${
                      isActive ? 'text-midnight' : 'text-midnight/60 hover:text-midnight'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-midnight transition-transform ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-midnight px-5 py-2.5 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-coral hover:text-midnight md:inline-flex"
          >
            Let’s talk <ArrowRight size={16} />
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 pb-5">
                {links.map(([label, to]) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className="block rounded-xl px-3 py-3 text-lg font-medium hover:bg-midnight/5"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-midnight px-6 py-3 font-medium text-paper"
                  >
                    Let’s talk <ArrowRight size={16} />
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}