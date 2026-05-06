import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import SectionLabel from '../components/SectionLabel.jsx'
import Button from '../components/Button.jsx'

const LABS = [
  {
    name: 'Tessiture Rosato', location: 'Schio, VI · Veneto',
    initial: 'T', avatarBg: '#d4853a', avatarColor: 'var(--nero)',
    spec: 'Maglieria tecnica e sportiva. Cotone bio, nylon riciclato, sublimazione. Fornitore consolidato di brand sportivi e outdoor.',
    category: 'Tessile', certs: ['OEKO-TEX', 'GOTS'],
    minQty: '200 pz', leadTime: '4–6 sett.', rating: '★ 4.8', reviews: '(23 rec.)',
  },
  {
    name: 'Conciaria Meneghetti', location: 'Arzignano, VI · Veneto',
    initial: 'C', avatarBg: '#2a6b5a', avatarColor: 'var(--bianco)',
    spec: 'Pelli vegetali e chrome-free. Specializzazione in pelletteria di lusso e accessori moda. Tracciabilità completa.',
    category: 'Pelletteria', certs: ['LWG Gold', 'C2C'],
    minQty: '50 pz', leadTime: '6–8 sett.', rating: '★ 4.9', reviews: '(41 rec.)',
  },
  {
    name: 'Falegnameria Bortolotto', location: 'Treviso, TV · Veneto',
    initial: 'F', avatarBg: '#b84a2e', avatarColor: 'var(--bianco)',
    spec: 'Componenti arredo su misura. CNC 5 assi, rovere massello e MDF riciclato. Esperienza con brand contract e design d\'interni.',
    category: 'Legno', certs: ['FSC', 'CE'],
    minQty: '30 pz', leadTime: '3–5 sett.', rating: '★ 4.6', reviews: '(17 rec.)',
  },
]

function Tag({ children, type = 'cat' }) {
  const styles = {
    cat:  { background: '#e8e2d8', color: 'var(--grafite)' },
    cert: { background: 'var(--verde-light)', color: 'var(--verde)' },
  }
  return (
    <span style={{
      padding: '3px 10px',
      borderRadius: 2,
      fontFamily: 'var(--font-mono)',
      fontSize: '0.62rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      ...styles[type],
    }}>
      {children}
    </span>
  )
}

function LabCard({ lab, delay = 0 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{
        background: hovered ? 'var(--carta)' : 'var(--bianco)',
        overflow: 'hidden',
        transition: 'background var(--transition)',
        cursor: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div style={{
        background: 'var(--nero)',
        padding: '1.8rem 2rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 300, color: 'var(--carta)', lineHeight: 1.2 }}>
            {lab.name}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--cenere)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>
            📍 {lab.location}
          </div>
        </div>
        <div style={{
          width: 44, height: 44, borderRadius: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: lab.avatarBg, color: lab.avatarColor,
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.2rem',
          flexShrink: 0,
        }}>
          {lab.initial}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem 2rem', flex: 1 }}>
        <p style={{ fontSize: '0.82rem', color: 'var(--grafite)', lineHeight: 1.7, marginBottom: '1rem' }}>
          {lab.spec}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.2rem' }}>
          <Tag type="cat">{lab.category}</Tag>
          {lab.certs.map(c => <Tag key={c} type="cert">{c}</Tag>)}
        </div>
        <div style={{
          display: 'flex', gap: '1.5rem',
          paddingTop: '1rem', borderTop: '1px solid var(--nebbia)',
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--cenere)',
          textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>
          <div>
            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--nero)', fontFamily: 'var(--font-body)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>
              {lab.minQty}
            </strong>ordine min.
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--nero)', fontFamily: 'var(--font-body)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>
              {lab.leadTime}
            </strong>lead time
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--nero)', fontFamily: 'var(--font-body)', fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>
              {lab.rating}
            </strong>{lab.reviews}
          </div>
        </div>
      </div>

      {/* CTA */}
      <a href="#registrati" style={{
        display: 'block',
        padding: '1rem 2rem',
        background: 'var(--terracotta)',
        color: 'var(--bianco)',
        fontFamily: 'var(--font-label)',
        fontSize: '0.48rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        textAlign: 'center',
        textDecoration: 'none',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        transition: 'all var(--transition)',
      }}>
        Richiedi preventivo →
      </a>
    </div>
  )
}

export default function LabsSection() {
  const ref = useReveal()

  return (
    <div id="laboratori" ref={ref} style={{ background: 'var(--panna)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,3vw,3rem)' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '2rem', flexWrap: 'wrap' }} className="reveal">
          <div>
            <SectionLabel>Laboratori in evidenza</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              L'eccellenza<br />
              <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>del distretto</em>
            </h2>
          </div>
          <Button variant="dark" arrow href="#registrati">
            Esplora tutti i laboratori
          </Button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1px',
          background: 'var(--nebbia)',
          border: '1px solid var(--nebbia)',
        }}>
          {LABS.map((lab, i) => <LabCard key={lab.name} lab={lab} delay={i} />)}
        </div>
      </div>
    </div>
  )
}
