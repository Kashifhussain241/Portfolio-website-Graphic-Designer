import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { EASE } from './Reveal.jsx'

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const [tall, setTall] = useState(false)
  const [open, setOpen] = useState(true)
  const [direction, setDirection] = useState(0)
  const closeRef = useRef(null)
  const count = images.length

  const requestClose = useCallback(() => setOpen(false), [])

  const go = useCallback(
    (dir) => {
      if (count < 2) return
      setDirection(dir)
      setIndex((i) => (i + dir + count) % count)
    },
    [count]
  )

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') requestClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [go, requestClose])

  useEffect(() => {
    setTall(false)
  }, [index])

  return createPortal(
    <AnimatePresence onExitComplete={onClose}>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-midnight/95 backdrop-blur-sm"
          onClick={requestClose}
        >
          <div className="flex min-h-full items-center justify-center p-4 py-16 sm:p-8 sm:py-16">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`Preview ${index + 1} of ${count}`}
                onClick={(e) => e.stopPropagation()}
                onLoad={(e) =>
                  setTall(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth * 1.6)
                }
                initial={{ opacity: 0, x: direction * 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -40, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                className={
                  tall
                    ? 'h-auto w-[92vw] max-w-none rounded-lg shadow-2xl'
                    : 'h-auto w-auto max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl'
                }
              />
            </AnimatePresence>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              requestClose()
            }}
            aria-label="Close image preview"
            className="fixed top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-paper backdrop-blur transition-all duration-200 hover:scale-110 hover:rotate-90 hover:bg-white/20 active:scale-95"
          >
            <X size={22} />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  go(-1)
                }}
                aria-label="Previous image"
                className="fixed top-1/2 left-3 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-paper backdrop-blur transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95 sm:left-6"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  go(1)
                }}
                aria-label="Next image"
                className="fixed top-1/2 right-3 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-paper backdrop-blur transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95 sm:right-6"
              >
                <ChevronRight size={24} />
              </button>
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-paper backdrop-blur"
              >
                {index + 1} / {count}
              </motion.p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
