import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react'
import { CONTACT_INFO, NAV_LINKS } from '@/constants/data'
import { scrollToSection } from '@/lib/utils'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/8 bg-card/30 backdrop-blur-xl">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Terminal size={14} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">Zakaria</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Mobile & Web Developer passionate about building elegant, scalable applications.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: CONTACT_INFO.github, icon: Github, label: 'GitHub' },
                { href: CONTACT_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${CONTACT_INFO.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted hover:text-white hover:bg-primary/20 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.replace('#', ''))}
                  className="text-sm text-muted hover:text-white transition-colors text-left py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Built With</p>
            <div className="flex flex-wrap gap-2">
              {['React 19', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'GSAP', 'Lenis'].map((t) => (
                <span key={t} className="text-xs text-muted/70 bg-white/4 border border-white/8 px-2.5 py-1 rounded-lg font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted/60 font-mono">
            © {year} Zakaria El Irej. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-muted/60 flex items-center gap-1.5"
          >
            Made with <Heart size={11} className="text-red-400 fill-red-400" /> by{' '}
            <span className="text-secondary font-medium">Zakaria</span>
            {' '}· Built with React + TypeScript
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
