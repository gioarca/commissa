export default function SectionLabel({ children, light = false }) {
  return (
    <div style={{
      fontFamily: 'var(--font-label)',
      fontSize: '0.5rem',
      letterSpacing: '0.26em',
      textTransform: 'uppercase',
      color: light ? 'var(--terra-mid)' : 'var(--terracotta)',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    }}>
      <span style={{
        display: 'inline-block',
        width: 24,
        height: 1,
        background: light ? 'var(--terra-mid)' : 'var(--terracotta)',
        flexShrink: 0,
      }} />
      {children}
    </div>
  )
}
