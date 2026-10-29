import AnimatedSection from '../common/AnimatedSection.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
const steps = [
  ['Discovery', 'You share your product, audience and goals. I ask what I need to get the brief right.'],
  ['Design direction', 'I propose a visual direction so we agree on the look before full production.'],
  ['Design and revisions', 'I build the designs and refine them with your feedback.'],
  ['Final delivery', 'You receive organized, export-ready files in the formats you need.'],
]
export default function Process() {
  return (
    <AnimatedSection>
      <SectionHeading title="How a project works" />
      <ol className="mt-10 grid gap-5 md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <li
            key={t}
            className="group rounded-3xl bg-ink p-6 ring-1 ring-paper/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-midnight/20"
          >
            <span className="inline-block origin-left font-display text-3xl font-bold text-violet transition-transform duration-300 group-hover:scale-110">
              {i + 1}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
            <p className="mt-2 text-sm text-paper/65">{d}</p>
          </li>
        ))}
      </ol>
    </AnimatedSection>
  )
}
