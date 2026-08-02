import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants/data'
import { scrollToSection } from '@/lib/utils'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const filtered = NAV_LINKS.filter((l) =>
    l.label.toLowerCase().includes(query.toLowerCase())
  )

  const navigate = (href: string) => {
    setOpen(false)
    setQuery('')
    const id = href.replace('#', '')
    scrollToSection(id)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9991] w-full max-w-lg glass-card overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search size={16} className="text-muted shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to..."
                className="flex-1 bg-transparent text-white placeholder:text-muted text-sm outline-none"
              />
              <button onClick={() => setOpen(false)} className="text-muted hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Results */}
            <div className="py-2 max-h-64 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="text-center text-muted text-sm py-6">No results found</p>
              ) : (
                filtered.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => navigate(link.href)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-muted hover:text-white hover:bg-white/5 transition-all duration-150 text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {link.label}
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-2 border-t border-white/10 flex items-center gap-4 text-xs text-muted/60">
              <span><kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-xs">↵</kbd> select</span>
              <span><kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-xs">Esc</kbd> close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
