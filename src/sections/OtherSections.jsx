import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
import SectionLabel from '../components/SectionLabel.jsx'
import Button from '../components/Button.jsx'

/* ─── SPLIT CTA ─────────────────────────────────────────────── */
export function SplitCTA() {
  const panels = [
    {
      key: 'lab',
      eyebrow: 'Per i laboratori',
      title: ['Nuovi committenti.', <em key="e" style={{ fontStyle:'italic', color:'var(--terra-mid)' }}>Zero marketing.</em>],
      items: [
        'Profilo verificato con certificazioni e attrezzature',
        'Richieste compatibili con la tua capacità produttiva',
        'Gestione commesse integrata: preventivi, stati, fatturazione',
        'Rating basato su metriche reali, non recensioni soggettive',
        'Gratis per i primi 6 mesi · Poi da 39€/mese',
      ],
      bg: 'var(--nero)',
      eyebrowColor: 'var(--terracotta)',
      titleColor: 'var(--carta)',
      listColor: 'var(--cenere)',
      arrow: 'var(--terracotta)',
      btnVariant: 'splitLab',
      btnText: 'Registra il laboratorio',
    },
    {
      key: 'brand',
      eyebrow: 'Per i brand',
      title: ['Il laboratorio giusto.', <em key="e" style={{ fontStyle:'italic', color:'rgba(255,255,255,0.7)' }}>In 48 ore.</em>],
      items: [
        'Matching automatico su categoria, certificazioni, quantità',
        'Preventivi strutturati e comparabili in formato standard',
        'Tracking della produzione con milestone e notifiche',
        'Pagamenti sicuri con rilascio a tranches verificate',
        'Gratuito per i brand · Commissione solo sul confermato',
      ],
      bg: 'var(--terracotta)',
      eyebrowColor: 'rgba(255,255,255,0.6)',
      titleColor: 'var(--bianco)',
      listColor: 'rgba(255,255,255,0.75)',
      arrow: 'rgba(255,255,255,0.5)',
      btnVariant: 'splitBrand',
      btnText: 'Trova un laboratorio',
    },
  ]

  return (
    <div id="registrati" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {panels.map(p => (
        <div key={p.key} style={{
          background: p.bg,
          padding: 'clamp(3rem,6vw,6rem) clamp(2rem,4vw,4rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ fontFamily:'var(--font-label)', fontSize:'0.48rem', letterSpacing:'0.24em', textTransform:'uppercase', color:p.eyebrowColor, marginBottom:'1.5rem' }}>
            {p.eyebrow}
          </div>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,3vw,2.8rem)', fontWeight:300, lineHeight:1.15, marginBottom:'1.5rem', color:p.titleColor }}>
            {p.title[0]}<br />{p.title[1]}
          </h2>
          <ul style={{ listStyle:'none', marginBottom:'2.5rem', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
            {p.items.map((item, i) => (
              <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'0.75rem', fontSize:'0.88rem', fontWeight:300, color:p.listColor }}>
                <span style={{ color:p.arrow, flexShrink:0, marginTop:1 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
          <Button variant={p.btnVariant} arrow href="#">{p.btnText}</Button>
        </div>
      ))}
    </div>
  )
}

/* ─── TESTIMONIALS ───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    text: '"Prima passavamo settimane a cercare un laboratorio per ogni nuova collezione. Con Commissa abbiamo trovato Tessiture Rosato in due giorni. Il preventivo era già strutturato, le certificazioni verificate."',
    name: 'Martina Conti', role: 'Founder · Atelier Selva, Milano', initial: 'M',
  },
  {
    text: '"Siamo sempre stati bravi a produrre, ma pessimi a farci trovare. Da quando siamo su Commissa riceviamo 3–4 richieste qualificate al mese. Qualificate, non spam."',
    name: 'Roberto Meneghetti', role: 'Titolare · Conciaria Meneghetti, Arzignano', initial: 'R',
  },
  {
    text: '"Il tracking della commessa è quello che ci mancava. Ora so esattamente a che punto è la produzione senza dover chiamare ogni giorno. E i clienti apprezzano la trasparenza."',
    name: 'Luca Ferretti', role: 'Brand Director · SportLab Italia, Torino', initial: 'L',
  },
]

const LOGOS = ['Tessiture Rosato','Atelier Selva','Meneghetti Conciaria','SportLab Italia','Ceramiche Positano','Monta Studio']

export function Testimonials() {
  const ref = useReveal()
  return (
    <div ref={ref} style={{ background:'var(--panna)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,3vw,3rem)' }}>
        <div className="reveal">
          <SectionLabel>Cosa dicono</SectionLabel>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3.5rem)', fontWeight:300, letterSpacing:'-0.03em', lineHeight:1.1 }}>
            Le prime voci<br /><em style={{ fontStyle:'italic', color:'var(--terracotta)' }}>del distretto</em>
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem', marginTop:'3rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i}`}
              style={{ padding:'2rem', background:'var(--bianco)', border:'1px solid var(--nebbia)', position:'relative', transition:'transform var(--transition)' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontFamily:'var(--font-display)', fontSize:'5rem', color:'var(--terra-light)', position:'absolute', top:'1rem', right:'1.5rem', lineHeight:1, fontStyle:'italic' }}>"</div>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontStyle:'italic', fontWeight:300, lineHeight:1.6, color:'var(--nero)', marginBottom:'1.5rem', paddingBottom:'1.5rem', borderBottom:'1px solid var(--nebbia)', position:'relative', zIndex:1 }}>
                {t.text}
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                <div style={{ width:36, height:36, borderRadius:2, display:'flex', alignItems:'center', justifyContent:'center', background:'var(--terra-light)', color:'var(--terracotta)', fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'0.95rem', flexShrink:0 }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize:'0.85rem', fontWeight:500 }}>{t.name}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', color:'var(--cenere)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop:'4rem', paddingTop:'3rem', borderTop:'1px solid var(--nebbia)' }}>
          <div style={{ fontFamily:'var(--font-label)', fontSize:'0.48rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--cenere)', textAlign:'center', marginBottom:'2rem' }}>
            Laboratori e brand già sulla piattaforma
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'3rem', flexWrap:'wrap' }}>
            {LOGOS.map(l => (
              <div key={l} style={{ fontFamily:'var(--font-display)', fontSize:'1.1rem', fontStyle:'italic', color:'var(--nebbia)', letterSpacing:'-0.02em', transition:'color var(--transition)', cursor:'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cenere)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--nebbia)'}
              >{l}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── DISTRETTI ──────────────────────────────────────────────── */
const DISTRETTI = [
  { region:'Veneto',    name:'Arzignano',    spec:'Concia · Pelletteria chrome-free',       count:'48 laboratori attivi',    coming:false },
  { region:'Veneto',    name:'Montebelluna', spec:'Calzatura sportiva · Scarponi',           count:'34 laboratori attivi',    coming:false },
  { region:'Toscana',   name:'Prato',        spec:'Tessile · Stampa digitale su tessuto',   count:'72 laboratori attivi',    coming:false },
  { region:'Emilia',    name:'Carpi',        spec:'Maglieria · Abbigliamento femminile',    count:'29 laboratori attivi',    coming:false },
  { region:'Lombardia', name:'Brianza',      spec:'Arredo · Componenti legno e metallo',    count:'51 laboratori attivi',    coming:false },
  { region:'Marche',    name:'Fermo',        spec:'Calzatura · Pelletteria Made in Italy',  count:'43 laboratori attivi',    coming:false },
  { region:'Veneto',    name:'Belluno',      spec:'Occhialeria · Ottica di precisione',     count:'22 laboratori attivi',    coming:false },
  { region:'In arrivo', name:'Sassuolo',     spec:'Ceramica · Piastrelle e rivestimenti',  count:'In onboarding · Q3 2025', coming:true  },
]

export function Distretti() {
  const ref = useReveal()
  return (
    <div id="distretti" ref={ref} style={{ background:'var(--inchiostro)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,3vw,3rem)' }}>
        <div className="reveal">
          <SectionLabel light>Copertura geografica</SectionLabel>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3.5rem)', fontWeight:300, letterSpacing:'-0.03em', lineHeight:1.1, color:'var(--carta)', marginBottom:'1rem' }}>
            I distretti<br /><em style={{ fontStyle:'italic', color:'var(--terracotta)' }}>italiani</em>
          </h2>
          <p style={{ fontSize:'1rem', fontWeight:300, color:'var(--cenere)', lineHeight:1.85, maxWidth:520, marginBottom:0 }}>
            La manifattura italiana vive nei distretti. Commissa parte dal Nordest e si espande
            distretto per distretto — costruendo densità locale prima di copertura nazionale.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.05)', marginTop:'3rem' }}>
          {DISTRETTI.map((d, i) => (
            <div
              key={d.name}
              className={`reveal reveal-delay-${Math.min(i%4, 3)}`}
              style={{ padding:'2rem 1.8rem', background:'var(--inchiostro)', transition:'background var(--transition)', cursor:'none' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--grafite)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--inchiostro)'}
            >
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.58rem', color:'var(--terracotta)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:'0.5rem' }}>{d.region}</div>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:300, color:'var(--carta)', marginBottom:'0.4rem' }}>{d.name}</div>
              <div style={{ fontSize:'0.75rem', color:'var(--cenere)', fontWeight:300, lineHeight:1.5 }}>{d.spec}</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.62rem', color: d.coming ? 'var(--terracotta)' : 'var(--grafite)', marginTop:'1rem', paddingTop:'0.75rem', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
                {d.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── PRICING ────────────────────────────────────────────────── */
const PLANS = [
  {
    label: 'Laboratorio · Free',
    price: '€0', period: '/ mese',
    desc: 'Primi 6 mesi gratuiti per tutti i laboratori verificati.',
    features: ['Profilo verificato con certificazioni','Ricezione richieste nella tua categoria','Invio preventivi strutturati','Gestione di 2 commesse attive','Rating e recensioni verificate'],
    featured: false, btnText: 'Registrati gratis', btnVariant: 'outline',
  },
  {
    label: 'Laboratorio · Pro',
    price: '€39', period: '/ mese',
    desc: 'Per laboratori che vogliono crescere sistematicamente.',
    features: ['Tutto il piano Free','Commesse attive illimitate','Analytics sulle richieste ricevute','Posizionamento prioritario nei risultati','Strumenti di gestione produzione avanzati','Supporto dedicato all\'onboarding'],
    featured: true, btnText: 'Inizia con Pro', btnVariant: 'primary',
  },
  {
    label: 'Brand · Marketplace',
    price: '3–5', period: '%',
    desc: 'Commissione solo sulle commesse confermate. Zero costi fissi.',
    features: ['Ricerca e matching illimitati','Preventivi comparabili in formato standard','Tracking produzione con milestone','Pagamenti sicuri con rilascio a tranches','3% su ordini sopra €10.000','5% su ordini sotto €10.000'],
    featured: false, btnText: 'Trova laboratori', btnVariant: 'outline',
  },
]

export function Pricing() {
  const ref = useReveal()
  return (
    <div id="prezzi" ref={ref} style={{ background:'var(--carta)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'clamp(4rem,8vw,8rem) clamp(1.5rem,3vw,3rem)' }}>
        <div className="reveal">
          <SectionLabel>Prezzi</SectionLabel>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3.5rem)', fontWeight:300, letterSpacing:'-0.03em', lineHeight:1.1, marginBottom:'1rem' }}>
            Semplice.<br /><em style={{ fontStyle:'italic', color:'var(--terracotta)' }}>Trasparente.</em>
          </h2>
          <p style={{ fontSize:'1rem', fontWeight:300, color:'var(--grafite)', lineHeight:1.85, maxWidth:520 }}>
            I brand non pagano nulla fino alla conferma di una commessa. I laboratori partono gratis e crescono con la piattaforma.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1px', background:'var(--nebbia)', border:'1px solid var(--nebbia)', marginTop:'3rem' }}>
          {PLANS.map((p, i) => (
            <div
              key={p.label}
              className={`reveal reveal-delay-${i}`}
              style={{ background: p.featured ? 'var(--nero)' : 'var(--bianco)', padding:'2.5rem 2rem', position:'relative', transition:'background var(--transition)' }}
              onMouseEnter={e => { if (!p.featured) e.currentTarget.style.background = 'var(--panna)' }}
              onMouseLeave={e => { if (!p.featured) e.currentTarget.style.background = 'var(--bianco)' }}
            >
              {p.featured && (
                <div style={{ position:'absolute', top:'1.5rem', right:'1.5rem', padding:'4px 10px', background:'var(--terracotta)', color:'var(--bianco)', fontFamily:'var(--font-mono)', fontSize:'0.55rem', letterSpacing:'0.1em', textTransform:'uppercase', borderRadius:2 }}>
                  Più scelto
                </div>
              )}
              <div style={{ fontFamily:'var(--font-label)', fontSize:'0.48rem', letterSpacing:'0.2em', textTransform:'uppercase', color: p.featured ? 'var(--terracotta)' : 'var(--cenere)', marginBottom:'1.5rem' }}>
                {p.label}
              </div>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'2.8rem', fontWeight:300, letterSpacing:'-0.04em', color: p.featured ? 'var(--carta)' : 'var(--nero)', lineHeight:1, marginBottom:'0.5rem' }}>
                {p.price} <span style={{ fontSize:'1rem', color:'var(--cenere)' }}>{p.period}</span>
              </div>
              <p style={{ fontSize:'0.82rem', color:'var(--cenere)', marginBottom:'2rem', fontWeight:300 }}>{p.desc}</p>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem' }}>
                {p.features.map(f => (
                  <li key={f} style={{ display:'flex', alignItems:'flex-start', gap:'0.6rem', fontSize:'0.83rem', color: p.featured ? 'var(--cenere)' : 'var(--grafite)', fontWeight:300 }}>
                    <span style={{ color:'var(--terracotta)', flexShrink:0, fontSize:'0.8rem', marginTop:1 }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={p.featured ? 'primary' : 'outline'} fullWidth href="#">{p.btnText}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── FINAL CTA ──────────────────────────────────────────────── */
export function FinalCTA() {
  return (
    <div style={{ background:'var(--nero)', padding:'clamp(5rem,10vw,10rem) clamp(1.5rem,3vw,3rem)', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize:'48px 48px', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'60vw', height:'60vw', background:'radial-gradient(circle, rgba(184,92,58,0.1), transparent 60%)', pointerEvents:'none' }} />
      <div style={{ position:'relative', zIndex:1, maxWidth:680, margin:'0 auto' }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2.2rem,5vw,4.5rem)', fontWeight:300, color:'var(--carta)', letterSpacing:'-0.04em', lineHeight:1.1, marginBottom:'1.5rem' }}>
          La manifattura italiana<br />merita una<br />
          <em style={{ fontStyle:'italic', color:'var(--terracotta)' }}>piattaforma degna.</em>
        </h2>
        <p style={{ fontSize:'1rem', color:'var(--cenere)', lineHeight:1.8, fontWeight:300, marginBottom:'3rem' }}>
          108.000 laboratori, 56 miliardi di euro, 18 distretti.
          Tutto ancora connesso da telefonate e passaparola.
          Commissa cambia questo.
        </p>
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <Button variant="primary" arrow href="#">Registra il laboratorio</Button>
          <Button variant="secondary" arrow href="#">Trova un fornitore</Button>
        </div>
      </div>
    </div>
  )
}
