export default function SectionHeading({ title, text, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-midnight/60">{text}</p>}
    </div>
  )
}
