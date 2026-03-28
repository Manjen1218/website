import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const cur   = document.getElementById('cursor-dot')
    const trail = document.getElementById('cursor-trail')
    if (!cur || !trail) return

    const onMove = (e) => {
      cur.style.left   = e.clientX + 'px'
      cur.style.top    = e.clientY + 'px'
      trail.style.left = e.clientX + 'px'
      trail.style.top  = e.clientY + 'px'
    }

    const onOver = (e) => {
      const hoverable = e.target.closest('a, button, .chip, .tl-item, .clink, .skill-block')
      if (hoverable) {
        trail.style.transform = 'translate(-50%,-50%) scale(2.2)'
        trail.style.opacity   = '0.7'
      } else {
        trail.style.transform = 'translate(-50%,-50%) scale(1)'
        trail.style.opacity   = '0.4'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])
}
