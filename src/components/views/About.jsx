import { useReveal } from '../../hooks/useReveal.js'
import Footer from '../Footer.jsx'
import './About.css'

const FACTS = [
  { label: 'Origin', value: 'Hsinchu, Taiwan' },
  { label: 'Current', value: 'NTU, Taipei' },
  { label: 'Status', value: 'Grad Student' },
  { label: 'Hobby', value: 'Watch Movies, Listening Musics' },
  { label: 'Prev Role', value: 'Software RD @ ACCTON' },
  { label: 'Focus', value: 'Web Security, SemCom, LLM' },
]

function FilmStrip() {
  const holes = Array.from({ length: 10 })
  return (
    <div className="film-strip">
      <div className="film-holes">
        {holes.map((_, i) => <div key={i} className="film-hole" />)}
      </div>

      {FACTS.map(({ label, value }) => (
        <div key={label} className="film-item">
          <span className="film-label">{label}</span>
          <span className="film-val">{value}</span>
        </div>
      ))}

      <div className="film-holes film-holes-bot">
        {holes.map((_, i) => <div key={i} className="film-hole" />)}
      </div>
    </div>
  )
}

export default function About() {
  const ref = useReveal([])

  return (
    <div ref={ref}>
      <div className="page">
        <p className="sec-eyebrow rev">01 — About</p>
        <h2 className="sec-title rev">
          A Few Frames<br />
          <em>About Me</em>
        </h2>

        <div className="about-grid">
          <div className="about-text rev">
            <p>
              I'm <strong>Man-Chen Chao</strong>, originally from{' '}
              <strong>Hsinchu, Taiwan</strong>. I studied Computer Science at{' '}
              <strong>NYCU</strong> from 2020 to 2024, and I'm now pursuing a
              graduate degree in <strong>EE Cybersecurity at NTU</strong>.
            </p>
            <p>
              Before grad school I worked as a{' '}
              <strong>Software R&amp;D engineer at ACCTON</strong>, building
              real production networking systems.
            </p>
            <p>
              Outside of code, I'm a dedicated <strong>movie watcher</strong> —
              every film is a different world to explore. I think great cinema
              and great engineering share the same obsession:{' '}
              <em>attention to detail</em>.
            </p>
            <p>
              Reach me at{' '}
              <a href="mailto:r14921a44@ntu.edu.tw">r14921a44@ntu.edu.tw</a>.
            </p>
          </div>

          <div className="rev">
            <FilmStrip />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
