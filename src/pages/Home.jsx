import Hero from '../components/home/Hero.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import ServicesOverview from '../components/home/ServicesOverview.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'
import { profile } from '../data/profile.js'
import { useMeta } from '../hooks/useMeta.js'

export default function Home() {
  useMeta(
    'Wasir Ahmad — Graphic Designer for Amazon Sellers & Brands',
    'Graphic designer creating product listing images, A+ Content, social media graphics and Canva templates for Amazon sellers and brands.'
  )

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 border-y border-midnight/10 py-5 text-sm font-medium text-midnight/70 sm:flex-row sm:gap-8">
          <span>{profile.experienceYears}+ years experience</span>
          <span>Amazon listings</span>
          <span>A+ Content</span>
          <span>Social media</span>
          <span>Canva templates</span>
        </div>
      </div>
      <ServicesOverview />
      <AboutPreview />
      <ContactCTA />
    </>
  )
}
