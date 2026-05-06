import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const S = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 3rem',
    height: 64,
    background: scrolled ? 'rgba(15,14,12,0.92)' : 'rgba(15,14,12,0)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'background 0.4s, backdrop-filter 0.4s',
  }),
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: '1.5rem',
    fontWeight: 300,
    color: 'var(--carta)',
    letterSpacing: '-0.03em',
    textDecoration: 'none',
  },
  em: { fontStyle: 'italic', color: 'var(--terracotta)' },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    listStyle: 'none',
  },
  link: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.78rem',
    fontWeight: 400,
    color: 'var(--nebbia)',
    textDecoration: 'none',
    letterSpacing: '0.04em',
    transition: 'color var(--transition)',
  },
  cta: {
    padding: '8px 20px',
    background: 'var(--terracotta)',
    color: 'var(--bianco)',
    borderRadius: 2,
    fontWeight: 500,
    textDecoration: 'none',
    fontSize: '0.78rem',
    transition: 'background var(--transition)',
    fontFamily: 'var(--font-body)',
  },
}

const NAV_LINKS = [
  { label: 'Come funziona', href: '#come-funziona' },
  { label: 'Laboratori',    href: '#laboratori' },
  { label: 'Distretti',     href: '#distretti' },
  { label: 'Prezzi',        href: '#prezzi' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav style={S.nav(scrolled)}>
      <Link to="/" style={S.logo}>
        Com<em style={S.em}>mis</em>sa
      </Link>

      <ul style={S.links}>
        {NAV_LINKS.map(l => (
          <li key={l.label}>
            <a
              href={l.href}
              style={S.link}
              onClick={e => { e.preventDefault(); scrollTo(l.href) }}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#registrati" style={S.cta}
            onClick={e => { e.preventDefault(); scrollTo('#registrati') }}>
            Accedi gratis
          </a>
        </li>
      </ul>
    </nav>
  )
}
