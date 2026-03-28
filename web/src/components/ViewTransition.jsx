import { useEffect, useRef } from 'react'
import './ViewTransition.css'

/**
 * Wraps a view in a fade+slide transition.
 * `active`  — currently displayed
 * `leaving` — currently fading out
 */
export default function ViewTransition({ active, leaving, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (active) {
      // Force a reflow so the entering animation fires fresh
      el.classList.remove('vt-enter')
      void el.offsetWidth
      el.classList.add('vt-enter')
    }
  }, [active])

  if (!active && !leaving) return null

  return (
    <div
      ref={ref}
      className={`vt-wrap ${leaving ? 'vt-leave' : ''}`}
    >
      {children}
    </div>
  )
}
