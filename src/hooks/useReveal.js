import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches IntersectionObserver to add 'visible' class
 * on scroll. Works with the .reveal CSS class in globals.css.
 */
export function useReveal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const targets = el.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return containerRef
}

/**
 * useRevealRef — for a single element ref
 */
export function useRevealRef() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
