import AnimatedSection from '../common/AnimatedSection.jsx'
import Button from '../common/Button.jsx'
export default function ContactCTA() {
  return (
    <AnimatedSection>
      <div className="rounded-[2rem] bg-lime p-8 text-midnight sm:p-16">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">Have a product to launch or a brand to grow?</h2>
        <Button to="/contact" variant="coral" className="mt-8">Start your project</Button>
      </div>
    </AnimatedSection>
  )
}