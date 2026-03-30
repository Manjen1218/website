import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal.js'
import Footer from '../Footer.jsx'
import './Skills.css'

const SKILL_GROUPS = [
  {
    title: '// Languages',
    chips: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    title: '// Frontend',
    chips: ['React', 'Vite', 'HTML / CSS', 'PHP'],
  },
  {
    title: '// Backend & DB',
    chips: ['MySQL', 'Node.js', 'REST APIs'],
  },
  {
    title: '// Systems & Tools',
    chips: ['Linux', 'Git', 'Docker', 'Bash'],
  },
  {
    title: '// Security (Learning)',
    chips: ['Web Security', 'Cryptography', 'Network Security'],
  },
]

function Chip({ label }) {
  const [flashing, setFlashing] = useState(false)

  const handleClick = () => {
    setFlashing(true)
    setTimeout(() => setFlashing(false), 650)
  }

  return (
    <span
      className={`chip ${flashing ? 'flash' : ''}`}
      onClick={handleClick}
    >
      {label}
    </span>
  )
}

function SkillBlock({ title, chips }) {
  return (
    <div className="skill-block rev">
      <p className="skill-block-title">{title}</p>
      <div className="chips">
        {chips.map(chip => <Chip key={chip} label={chip} />)}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal([])

  return (
    <div ref={ref}>
      <div className="page">
        <p className="sec-eyebrow rev">03 — Toolkit</p>
        <h2 className="sec-title rev">
          Skills &amp;<br />
          <em>Tech Stack</em>
        </h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map(group => (
            <SkillBlock key={group.title} {...group} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
