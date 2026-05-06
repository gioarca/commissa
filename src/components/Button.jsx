import { useState } from 'react'

const VARIANTS = {
  primary: {
    background: 'var(--terracotta)',
    color: 'var(--bianco)',
    border: 'none',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--carta)',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  dark: {
    background: 'var(--nero)',
    color: 'var(--carta)',
    border: '1px solid var(--nebbia)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--nero)',
    border: '1px solid var(--nebbia)',
  },
  splitLab: {
    background: 'var(--terracotta)',
    color: 'var(--bianco)',
    border: 'none',
  },
  splitBrand: {
    background: 'var(--bianco)',
    color: 'var(--terracotta)',
    border: 'none',
  },
}

const HOVER = {
  primary:    { background: '#a04e2f' },
  secondary:  { border: '1px solid rgba(255,255,255,0.5)' },
  dark:       { background: 'var(--inchiostro)', borderColor: 'var(--carta)' },
  outline:    { borderColor: 'var(--terracotta)', color: 'var(--terracotta)' },
  splitLab:   { background: 'var(--terra-mid)' },
  splitBrand: { background: 'var(--carta)' },
}

export default function Button({
  children,
  variant = 'primary',
  arrow = false,
  href,
  onClick,
  fullWidth = false,
  style: extraStyle = {},
}) {
  const [hovered, setHovered] = useState(false)

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '13px 28px',
    borderRadius: 2,
    fontFamily: 'var(--font-body)',
    fontSize: '0.88rem',
    fontWeight: 500,
    textDecoration: 'none',
    cursor: 'none',
    letterSpacing: '0.02em',
    transition: 'all var(--transition)',
    width: fullWidth ? '100%' : 'auto',
    justifyContent: fullWidth ? 'center' : 'flex-start',
    ...VARIANTS[variant],
    ...(hovered ? HOVER[variant] : {}),
    ...extraStyle,
  }

  const content = (
    <>
      {children}
      {arrow && (
        <span style={{
          transition: 'transform var(--transition)',
          transform: hovered ? 'translateX(4px)' : 'none',
          display: 'inline-block',
        }}>→</span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        style={base}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      style={{ ...base, border: VARIANTS[variant].border || 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
