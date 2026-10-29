import Button from '../components/common/Button.jsx'
import { useMeta } from '../hooks/useMeta.js'

export default function NotFound() {
  useMeta('Page not found — Wasir Ahmad', 'The page you were looking for does not exist.')

  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <p className="font-display text-sm font-bold tracking-widest text-coral">404</p>
      <h1 className="mt-3 font-display text-5xl font-bold">Page not found</h1>
      <p className="mt-4 text-midnight/65">That page doesn't exist or has moved.</p>
      <Button to="/" className="mt-8">
        Back to home
      </Button>
    </div>
  )
}
