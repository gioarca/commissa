import Button from '../components/Button.jsx'

const STATS = [
  { value: '640+', label: 'Laboratori verificati' },
  { value: '18',   label: 'Distretti coperti' },
  { value: '48h',  label: 'Prima offerta garantita' },
  { value: '4.8',  label: 'Rating medio laboratori' },
]

const scrollTo = id => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--nero)',
      display: 'grid',
      gridTemplateRows: '1fr auto',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        animation: 'gridMove 20s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '-20%', left: '-10%',
        width: '70vw', height: '70vw',
        background: 'radial-gradient(circle, rgba(184,92,58,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'glowPulse 6s ease-in-out infinite alternate',
      }} />

      {/* Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(6rem,10vw,10rem) clamp(1.5rem,4vw,3rem) 4rem',
        position: 'relative',
        zIndex: 2,
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
      }}>
        <div style={{
          fontFamily: 'var(--font-label)',
          fontSize: '0.52rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--terracotta)',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          opacity: 0,
          animation: 'fadeUp 0.8s ease 0.3s forwards',
        }}>
          <span style={{ display:'inline-block', width:32, height:1, background:'var(--terracotta)' }} />
          Marketplace B2B · Manifattura italiana
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
          fontWeight: 300,
          color: 'var(--carta)',
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          marginBottom: '2rem',
          maxWidth: 820,
          opacity: 0,
          animation: 'fadeUp 1s ease 0.5s forwards',
        }}>
          Trova il laboratorio giusto.<br />
          <em style={{ fontStyle: 'italic', color: 'var(--terracotta)', display: 'block' }}>
            Produci in Italia.
          </em>
        </h1>

        <p style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
          fontWeight: 300,
          color: 'var(--cenere)',
          lineHeight: 1.8,
          maxWidth: 480,
          marginBottom: '3rem',
          opacity: 0,
          animation: 'fadeUp 1s ease 0.7s forwards',
        }}>
          Commissa connette brand e designer con i migliori laboratori
          conto terzi italiani. Preventivi trasparenti, certificazioni
          verificate, commesse tracciate dall'inizio alla consegna.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeUp 1s ease 0.9s forwards',
        }}>
          <Button
            variant="primary"
            arrow
            onClick={() => scrollTo('#registrati')}
          >
            Registra il tuo laboratorio
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollTo('#come-funziona')}
          >
            Come funziona
          </Button>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        opacity: 0,
        animation: 'fadeIn 1s ease 1.2s forwards',
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            padding: 'clamp(1.2rem,2vw,2rem) clamp(1rem,3vw,3rem)',
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem,3vw,2.4rem)',
              fontWeight: 300,
              color: 'var(--carta)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
              {s.value.replace(/(\d+)(\D*)/, (_, n, suf) => (
                <>{n}<span style={{ color: 'var(--terracotta)' }}>{suf}</span></>
              ))}
              {s.value}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--cenere)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginTop: 6,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
