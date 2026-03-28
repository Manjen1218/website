import { useState, useCallback, useEffect } from 'react'

const ROUTES = ['home', 'about', 'education', 'skills', 'goal', 'contact']

function parseHash() {
  const h = location.hash.replace('#', '')
  return ROUTES.includes(h) ? h : 'home'
}

export function useRouter() {
  const [route, setRoute]       = useState(parseHash)
  const [leaving, setLeaving]   = useState(false)
  const [entering, setEntering] = useState(false)

  const navigate = useCallback(async (to) => {
    if (to === route) return

    // Outgoing animation
    setLeaving(true)
    await new Promise(r => setTimeout(r, 230))
    setLeaving(false)

    history.pushState({ route: to }, '', `#${to}`)
    setRoute(to)

    // Incoming flash
    setEntering(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntering(false))
    })

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  // Browser back / forward
  useEffect(() => {
    const handler = () => setRoute(parseHash())
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  return { route, navigate, leaving, entering }
}
