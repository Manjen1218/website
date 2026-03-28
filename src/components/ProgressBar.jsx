import { useEffect, useState } from 'react'
import './ProgressBar.css'

export default function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handler = () => {
      const max = document.body.scrollHeight - window.innerHeight
      setWidth(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return <div id="progress" style={{ width: `${width}%` }} />
}
