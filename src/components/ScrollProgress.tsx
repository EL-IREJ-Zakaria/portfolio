import { useScrollProgress } from '@/hooks/useScrollProgress'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9997] h-[2px] bg-gradient-to-r from-primary via-accent to-secondary origin-left"
      style={{ scaleX: progress / 100 }}
      transition={{ ease: 'linear' }}
    />
  )
}
