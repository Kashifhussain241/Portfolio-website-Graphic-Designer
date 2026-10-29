import { Link } from 'react-router-dom'
import { profile } from "../../data/profile.js";

export const CONTACT_EMAIL = profile.email

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">{profile.name}<span className="text-coral">.</span></p>
          <p className="mt-3 max-w-xs text-paper/70">
            Graphic designer creating product listing images, A+ Content, social media graphics and Canva templates.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-paper/80">
          <Link to="/services" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-lime">Services</Link>
          <Link to="/portfolio" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-lime">Portfolio</Link>
          <Link to="/about" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-lime">About</Link>
          <Link to="/pricing" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-lime">Pricing</Link>
          <Link to="/contact" className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-lime">Contact</Link>
        </nav>
        <div className="text-paper/80">
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-block transition-all duration-200 hover:translate-x-0.5 hover:text-lime">{CONTACT_EMAIL}</a>
          <p className="mt-6 text-sm text-paper/50">© {new Date().getFullYear()} Wasir Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}