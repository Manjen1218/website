import { useReveal } from '../../hooks/useReveal.js'
import Footer from '../Footer.jsx'
import './Contact.css'
import { FaDiscord } from "react-icons/fa";

const LINKS = [
  {
    icon: '⌥',
    label: 'github.com/Manjen1218',
    href: 'https://github.com/Manjen1218',
    external: true,
  },
  {
    icon: '✉',
    label: 'r14921a44@ntu.edu.tw',
    href: 'mailto:r14921a44@ntu.edu.tw',
    external: false,
  },
  {
    icon: <FaDiscord />,
    label: 'discord/zmz1218',
    href: 'https://discord.com/users/zmz1218',
    external: true,
  },
]

export default function Contact() {
  const ref = useReveal([])

  return (
    <div ref={ref}>
      <div className="page">
        <p className="sec-eyebrow rev">05 — Contact</p>
        <h2 className="sec-title rev">Get In Touch</h2>

        <div className="contact-grid">
          <p className="contact-desc rev">
            Whether it's about a project, a research opportunity, or just talking
            about a film you've seen recently — I'd love to hear from you.
          </p>

          <div className="contact-links rev">
            {LINKS.map(({ icon, label, href, external }) => (
              <a
                key={href}
                href={href}
                className="clink"
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <em className="clink-icon">{icon}</em>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
