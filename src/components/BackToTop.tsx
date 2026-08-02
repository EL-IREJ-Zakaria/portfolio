import { useScrollProgress } from '@/hooks/useScrollProgress'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const progress = useScrollProgress()

  return (
    <AnimatePresence>
      {progress > 20 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl glass flex items-center justify-center text-muted hover:text-white hover:bg-primary/20 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
