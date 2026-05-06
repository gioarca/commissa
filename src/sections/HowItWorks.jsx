import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import SectionLabel from '../components/SectionLabel.jsx'

const STEPS = {
  brand: [
    { n:'01', icon:'✏️', title:'Descrivi la commessa',   desc:'Categoria, materiale, quantità, budget, data di consegna. Il wizard guidato raccoglie tutto in 5 minuti.' },
    { n:'02', icon:'⚡', title:'Matching automatico',    desc:'Il nostro algoritmo filtra i laboratori compatibili per categoria, certificazioni, capacità e distanza geografica.' },
    { n:'03', icon:'📊', title:'Confronta le offerte',   desc:'Ricevi preventivi strutturati e comparabili entro 48 ore. Rating verificato, storico di consegne, certificazioni attive.' },
    { n:'04', icon:'📦', title:'Segui la produzione',    desc:'Milestone di avanzamento, pagamenti a tranches, notifiche real-time. Sai sempre dov\'è la tua commessa.' },
  ],
  lab: [
    { n:'01', icon:'🏭', title:'Crea il tuo profilo',    desc:'Categorie, capacità, certificazioni, attrezzature. Onboarding guidato, completabile in meno di un\'ora.' },
    { n:'02', icon:'🎯', title:'Ricevi richieste mirate', desc:'Solo commesse compatibili con la tua capacità. Niente spam, niente richieste fuori target.' },
    { n:'03', icon:'💬', title:'Invia il preventivo',    desc:'Template strutturato, tutto dentro la piattaforma. Niente email sparpagliate, niente Excel condivisi.' },
    { n:'04', icon:'⭐', title:'Costruisci la reputazione', desc:'Ogni commessa completata aggiorna il tuo rating. La qualità diventa visibile, e attira nuovi committenti.' },
  ],
}

function Step({ n, icon, title, desc, last }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        padding: '2.5rem 2rem',
        background: hovered ? 'var(--inchiostro)' : 'var(--nero)',
        position: 'relative',
        transition: 'background var(--transition)',
        cursor: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '4rem',
        fontWeight: 300,
        color: 'rgba(255,255,255,0.04)',
        lineHeight: 1,
        marginBottom: '1rem',
        fontStyle: 'italic',
      }}>{n}</div>
      <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
      <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--carta)', marginBottom: '0.6rem' }}>{title}</div>
      <p style={{ fontSize: '0.8rem', fontWeight: 300, color: 'var(--cenere)', lineHeight: 1.7 }}>{desc}</p>
      {!last && (
        <div style={{
          position: 'absolute',
          top: '2.5rem', right: -1,
          width: 20, height: 1,
          background: 'var(--terracotta)',
          zIndex: 1,
        }} />
      )}
    </div>
  )
}

export default function HowItWorks() {
  const [tab, setTab] = useState('brand')
  const ref = useReveal()

  return (
    <div id="come-funziona" ref={ref} style={{ background: 'var(--nero)' }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,3vw,3rem)',
      }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          marginBottom: '3rem',
          alignItems: 'end',
        }} className="reveal">
          <div>
            <SectionLabel light>Come funziona</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--carta)',
              marginBottom: '1rem',
            }}>
              Dalla richiesta<br />
              <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>alla consegna</em>
            </h2>
          </div>
          <p style={{ fontSize: '1rem', fontWeight: 300, color: 'var(--cenere)', lineHeight: 1.85, maxWidth: 400 }}>
            Due flussi distinti, un'unica piattaforma. I brand trovano il laboratorio
            giusto in 48 ore. I laboratori ricevono commesse qualificate senza spendere in marketing.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: 4,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '3rem',
        }}>
          {[['brand','Per i brand'],['lab','Per i laboratori']].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              style={{
                padding: '10px 24px',
                fontFamily: 'var(--font-label)',
                fontSize: '0.48rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: tab === id ? 'var(--terracotta)' : 'var(--cenere)',
                cursor: 'none',
                border: 'none',
                background: 'transparent',
                borderBottom: tab === id ? '2px solid var(--terracotta)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all var(--transition)',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {STEPS[tab].map((s, i) => (
            <Step key={s.title} {...s} last={i === STEPS[tab].length - 1} />
          ))}
        </div>
      </div>
    </div>
  )
}
