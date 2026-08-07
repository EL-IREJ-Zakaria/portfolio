import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'

export default function CursorGlow() {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)

  // Dot: ultra-fast
  const dotX = useSpring(cursorX, { stiffness: 600, damping: 28 })
  const dotY = useSpring(cursorY, { stiffness: 600, damping: 28 })

  // Ring: medium lag for trailing effect
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 22 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 22 })

  // Outer glow: very slow
  const glowX = useSpring(cursorX, { stiffness: 40, damping: 18 })
  const glowY = useSpring(cursorY, { stiffness: 40, damping: 18 })

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const rotateRef = useRef(0)
  const rafRef = useRef<number>(0)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovered(true)
      }
    }
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovered(false)
      }
    }
    const onDown = () => setClicked(true)
    const onUp = () => setClicked(false)

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', onEnter, { passive: true })
    window.addEventListener('mouseout', onLeave, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    // Rotate the dashed ring
    const spin = () => {
      rotateRef.current += 0.6
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(-50%, -50%) rotate(${rotateRef.current}deg)`
      }
      rafRef.current = requestAnimationFrame(spin)
    }
    rafRef.current = requestAnimationFrame(spin)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafRef.current)
    }
  }, [cursorX, cursorY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  const ringSize = hovered ? 56 : clicked ? 20 : 36
  const dotSize = hovered ? 8 : clicked ? 14 : 5
  const ringOpacity = hovered ? 0.9 : 0.45

  return (
    <>
      {/* Ambient glow blob */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{ x: glowX, y: glowY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{ scale: hovered ? 1.4 : 1, opacity: hovered ? 0.18 : 0.08 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-[320px] h-[320px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, #06B6D4 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      {/* Outer dashed rotating ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          ref={ringRef}
          animate={{
            width: ringSize + 20,
            height: ringSize + 20,
            opacity: ringOpacity * 0.5,
          }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            translateX: '-50%',
            translateY: '-50%',
            borderRadius: '50%',
            border: '1px dashed rgba(96,165,250,0.6)',
          }}
        />
      </motion.div>

      {/* Main ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            borderRadius: hovered ? '30%' : '50%',
            borderColor: hovered ? 'rgba(6,182,212,0.9)' : 'rgba(59,130,246,0.5)',
            boxShadow: hovered
              ? '0 0 12px rgba(6,182,212,0.5), inset 0 0 8px rgba(6,182,212,0.15)'
              : '0 0 6px rgba(59,130,246,0.25)',
            opacity: ringOpacity,
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1.5px solid rgba(59,130,246,0.5)',
            position: 'absolute',
            top: 0,
            left: 0,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: dotSize,
            height: dotSize,
            borderRadius: hovered ? '30%' : '50%',
            background: hovered
              ? 'radial-gradient(circle, #06B6D4, #3B82F6)'
              : 'radial-gradient(circle, #93C5FD, #3B82F6)',
            boxShadow: hovered
              ? '0 0 10px #06B6D4, 0 0 20px rgba(6,182,212,0.4)'
              : '0 0 6px rgba(59,130,246,0.8)',
          }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #93C5FD, #3B82F6)',
            position: 'absolute',
            top: 0,
            left: 0,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      </motion.div>
    </>
  )
}
