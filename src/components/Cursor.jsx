import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const mouse     = useRef({ x: 0, y: 0 })
  const ring      = useRef({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const raf       = useRef(null)

  useEffect(() => {
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    const addHover = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))
      })
    }

    document.addEventListener('mousemove', onMove)
    animate()
    // slight delay so DOM is ready
    const t = setTimeout(addHover, 500)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      clearTimeout(t)
    }
  }, [])

  const cursorStyle = {
    position: 'fixed',
    width: hovered ? 18 : 10,
    height: hovered ? 18 : 10,
    background: 'var(--terracotta)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.2s, height 0.2s',
    mixBlendMode: 'multiply',
  }

  const ringStyle = {
    position: 'fixed',
    width: 36,
    height: 36,
    border: '1px solid var(--terracotta)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    opacity: hovered ? 0.2 : 0.5,
    transition: 'opacity 0.25s',
  }

  return (
    <>
      <div ref={cursorRef} style={cursorStyle} />
      <div ref={ringRef}   style={ringStyle} />
    </>
  )
}
