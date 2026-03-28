import { useEffect, useRef, useState } from 'react'
import Footer from '../Footer.jsx'
import './Home.css'

const TICKER_ITEMS = [
  'Man-Chen Chao', 'NTU EE Cyber', 'NYCU CS Alumni',
  'Web Security', 'Cinephile', 'Hsinchu Taiwan', 'Software RD @ ACCTON',
]

function useTypewriter(text, delay = 400, speed = 42) {
  const [displayed, setDisplayed] = useState('')
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    done.current = true
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        setDisplayed(text.slice(0, ++i))
        if (i >= text.length) clearInterval(iv)
      }, speed)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(t)
  }, [text, delay, speed])

  return displayed
}

export default function Home({ navigate }) {
  const tagline = useTypewriter('Hsinchu, Taiwan · EE Cyber · NTU')
  const tickerRef = useRef(null)

  const pauseTicker  = () => { if (tickerRef.current) tickerRef.current.style.animationPlayState = 'paused' }
  const resumeTicker = () => { if (tickerRef.current) tickerRef.current.style.animationPlayState = 'running' }

  return (
    <div className="home-view">
      <div className="hero-wrap">
        <div className="hero-reel" />

        <div className="hero-content">
          <p className="hero-pre">{tagline}<span className="cursor-blink">|</span></p>

          <h1 className="hero-name">
            Man-Chen<br />
            <em>Chao</em>
          </h1>

          <p className="hero-sub">
            <strong>CS graduate from NYCU.</strong> Now diving into web security at{' '}
            <strong>NTU EE</strong>.<br />
            Cinephile by night, engineer by day — chasing the edge between{' '}
            <strong>systems and security</strong>.
          </p>

          <div className="hero-actions">
            <button className="btn btn-gold" onClick={() => navigate('contact')}>
              Say Hello
            </button>
            <a
              href="https://github.com/Manjen1218"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div
          className="ticker-wrap"
          onMouseEnter={pauseTicker}
          onMouseLeave={resumeTicker}
        >
          <div className="ticker" ref={tickerRef}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className={i % 2 === 1 ? 'dot' : ''}>
                {i % 2 === 1 ? '✦' : item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
