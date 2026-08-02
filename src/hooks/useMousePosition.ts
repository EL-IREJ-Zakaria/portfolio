import { useEffect, useState } from 'react'

/**
 * Hook to track mouse position
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition, { passive: true })

    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return position
}