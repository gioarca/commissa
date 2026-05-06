import { useReveal } from '../hooks/useReveal.js'
import SectionLabel from '../components/SectionLabel.jsx'

const PROBLEMS = [
  {
    icon: '📞',
    title: 'Ricerca opaca e frammentata',
    desc: 'I laboratori non hanno visibilità digitale. I brand cercano tramite LinkedIn, fiere, conoscenti — senza dati certi su capacità e certificazioni.',
  },
  {
    icon: '📄',
    title: 'Preventivi non strutturati',
    desc: 'Ogni laboratorio usa formati diversi. Confrontare tre offerte richiede ore di normalizzazione manuale.',
  },
  {
    icon: '🔍',
    title: 'Zero tracciabilità della commessa',
    desc: 'Una volta affidata la produzione, il brand perde visibilità. Gli aggiornamenti arrivano via WhatsApp, se arrivano.',
  },
  {
    icon: '🌍',
    title: 'I laboratori restano invisibili',
    desc: 'L\'eccellenza produttiva italiana non si vede online. I nuovi committenti non la trovano, e la base clienti resta statica.',
  },
]

function ProblemItem({ icon, title, desc }) {
  return (
    <div style={{
      display: 'flex',
      gap: '1.2rem',
      alignItems: 'flex-start',
      padding: '1.5rem',
      background: 'var(--bianco)',
      border: '1px solid var(--nebbia)',
      borderLeft: '3px solid var(--terracotta)',
      transition: 'transform var(--transition)',
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
    >
      <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 2, opacity: 0.7 }}>{icon}</span>
      <div>
        <strong style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, color: 'var(--nero)', marginBottom: 4 }}>
          {title}
        </strong>
        <span style={{ fontSize: '0.82rem', color: 'var(--cenere)', lineHeight: 1.6 }}>
          {desc}
        </span>
      </div>
    </div>
  )
}

export default function ProblemSection() {
  const ref = useReveal()

  return (
    <div ref={ref} style={{ background: 'var(--carta)' }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,3vw,3rem)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>
        <div className="reveal">
          <SectionLabel>Il problema</SectionLabel>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.4,
            color: 'var(--nero)',
            position: 'relative',
            paddingLeft: '2rem',
          }}>
            <span style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 3,
              background: 'var(--terracotta)',
            }} />
            "Trovare un laboratorio affidabile in Italia è ancora una questione di telefonate, fiere e passaparola."
          </blockquote>
          <p style={{
            marginTop: '2rem',
            fontSize: '0.88rem',
            color: 'var(--cenere)',
            lineHeight: 1.8,
            maxWidth: 400,
          }}>
            108.000 imprese italiane lavorano in conto terzi per un fatturato da 56 miliardi di euro.
            Nessuna piattaforma le connette in modo strutturato con chi cerca.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="reveal reveal-delay-2">
          {PROBLEMS.map(p => <ProblemItem key={p.title} {...p} />)}
        </div>
      </div>
    </div>
  )
}
