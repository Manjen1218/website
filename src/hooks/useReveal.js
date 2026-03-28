import { useEffect, useRef } from 'react'

export function useReveal(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const items = el.querySelectorAll('.rev')
    items.forEach(item => item.classList.remove('in'))

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in'), i * 80)
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    // Small delay so items start hidden before observer fires
    const t = setTimeout(() => items.forEach(item => io.observe(item)), 60)

    return () => {
      clearTimeout(t)
      io.disconnect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
