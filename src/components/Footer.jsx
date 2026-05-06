import { Link } from 'react-router-dom'

const COLS = [
  {
    title: 'Piattaforma',
    links: ['Come funziona','Per i laboratori','Per i brand','Distretti','Prezzi'],
  },
  {
    title: 'Risorse',
    links: ['Guida ai laboratori','Certificazioni','Guida ai preventivi','Blog distretto','API Docs'],
  },
  {
    title: 'Azienda',
    links: ['Chi siamo','Manifesto','Lavora con noi','Press','Contatti'],
  },
]

export default function Footer() {
  return (
    <footer style={{ background:'var(--inchiostro)', borderTop:'1px solid rgba(255,255,255,0.05)', padding:'4rem clamp(1.5rem,3vw,3rem) 3rem' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'3rem' }}>

        {/* Brand col */}
        <div>
          <Link to="/" style={{ fontFamily:'var(--font-display)', fontSize:'1.8rem', fontWeight:300, color:'var(--carta)', letterSpacing:'-0.03em', textDecoration:'none', marginBottom:'1rem', display:'block' }}>
            Com<em style={{ fontStyle:'italic', color:'var(--terracotta)' }}>mis</em>sa
          </Link>
          <p style={{ fontSize:'0.82rem', color:'var(--cenere)', lineHeight:1.8, fontWeight:300, marginBottom:'1.5rem' }}>
            Marketplace B2B per la manifattura italiana. Connette brand e designer con i migliori laboratori conto terzi d'Italia.
          </p>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.62rem', color:'var(--grafite)' }}>
            commissa.io · Treviso, Italia
          </div>
        </div>

        {/* Link cols */}
        {COLS.map(col => (
          <div key={col.title}>
            <div style={{ fontFamily:'var(--font-label)', fontSize:'0.48rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--cenere)', marginBottom:'1.2rem' }}>
              {col.title}
            </div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {col.links.map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize:'0.82rem', color:'var(--grafite)', textDecoration:'none', fontWeight:300, transition:'color var(--transition)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--nebbia)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--grafite)'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth:1200, margin:'3rem auto 0', paddingTop:'2rem', borderTop:'1px solid rgba(255,255,255,0.05)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.62rem', color:'var(--grafite)', letterSpacing:'0.06em' }}>
          © 2025 Commissa Srl · P.IVA IT00000000000 · Treviso
        </div>
        <div style={{ display:'flex', gap:'2rem' }}>
          {['Privacy','Cookie','Termini'].map(l => (
            <a key={l} href="#" style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', color:'var(--grafite)', textDecoration:'none', transition:'color var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--nebbia)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--grafite)'}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
