import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Home',      route: 'home' },
  { label: 'About',     route: 'about' },
  { label: 'Education', route: 'education' },
  { label: 'Skills',    route: 'skills' },
  { label: 'Goal',      route: 'goal' },
  { label: 'Contact',   route: 'contact' },
]

export default function Navbar({ route, navigate, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button
        className="nav-sig"
        onClick={() => navigate('home')}
      >
        Man-Chen Chao
      </button>

      <ul className="nav-links">
        {LINKS.map(({ label, route: r }) => (
          <li key={r}>
            <button
              className={`nav-link ${route === r ? 'active' : ''}`}
              onClick={() => navigate(r)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
        <span className="theme-icon">{theme === 'dark' ? '☽' : '☀'}</span>
        <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
      </button>
    </nav>
  )
}
