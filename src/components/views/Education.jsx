import { useReveal } from '../../hooks/useReveal.js'
import Footer from '../Footer.jsx'
import './Education.css'

const TIMELINE = [
  {
    years: '2026 — now',
    name: 'National Taiwan University',
    sub: 'Graduate School · EE Department\nSpecialization: Cybersecurity',
    badge: 'current',
    label: '● Current',
  },
  {
    years: 'Industry Exp.',
    name: 'ACCTON Technology',
    sub: 'Software R&D Engineer\nNetworking Software · Frontend & Backend Developer · Software / Firmware Engineer\n- Full-stack pipeline to parse and store over 7TB logs in MariaDB, enabling monitoring via Grafana.\n- Developed SQL stored procedures to support dynamic, user-driven queries and interactive visualizations from the Grafana Dashboard',
    badge: 'exp',
    label: '● Experience',
  },
  {
    years: 'Exchange Program',
    name: 'Fudan University',
    sub: 'B.S. · Computer Science and Technology\nExchange Student',
    badge: 'done',
    label: 'Graduated',
  },
  {
    years: '2020 — 2024',
    name: 'National Yang Ming Chiao Tung University',
    sub: 'B.S. · Computer Science\nAlgorithms · Systems · Software Engineering',
    badge: 'done',
    label: 'Graduated',
  },
]

function TimelineItem({ years, name, sub, badge, label }) {
  return (
    <div className="tl-item rev">
      <div className="tl-year">{years}</div>
      <div>
        <div className="tl-name">{name}</div>
        <div className="tl-sub">
          {sub.split('\n').map((line, i) => (
            <span key={i}>{line}{i < sub.split('\n').length - 1 && <br />}</span>
          ))}
        </div>
        <span className={`tl-badge badge-${badge}`}>{label}</span>
      </div>
    </div>
  )
}

export default function Education() {
  const ref = useReveal([])

  return (
    <div ref={ref}>
      <div className="page">
        <p className="sec-eyebrow rev">02 — Journey</p>
        <h2 className="sec-title rev">
          Education &amp;<br />
          <em>Experience</em>
        </h2>

        <div className="timeline">
          {TIMELINE.map(item => (
            <TimelineItem key={item.name} {...item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
