import { useReveal } from '../../hooks/useReveal.js'
import Footer from '../Footer.jsx'
import './Goal.css'

export default function Goal() {
  const ref = useReveal([])

  return (
    <div ref={ref}>
      <div className="page">
        <p className="sec-eyebrow rev">04 — Vision</p>
        <h2 className="sec-title rev">My Goal</h2>

        <div className="goal-card rev">
          <p className="goal-text">
            "I want to deeply understand how the web breaks — and how to defend it.
            Through this course and my time at NTU, I aim to build real-world web
            security skills: from vulnerability research to secure system design.
            The goal isn't just to find bugs, but to{' '}
            <em>think like an attacker</em> and{' '}
            <em>build like a defender</em>."
          </p>
          <p className="goal-sig">— Man-Chen Chao, NTU EE Cyber · 2026</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
