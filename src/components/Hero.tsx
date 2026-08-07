import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Eye, Github, Linkedin, Mail } from 'lucide-react'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { TYPING_ROLES, FLOATING_TECH, CONTACT_INFO } from '@/constants/data'
import { downloadFile } from '@/lib/utils'
import TechMarquee from './TechMarquee'

/* Particle background */
function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 4,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* Developer illustration */
function DevIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow" />
      <div className="absolute inset-4 rounded-full border border-accent/10 animate-[spin-slow_15s_linear_infinite_reverse]" />

      {/* Center card */}
      <div className="absolute inset-8 rounded-3xl glass-card flex flex-col items-center justify-center gap-4 shadow-2xl shadow-primary/10">
        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl shadow-primary/30 ring-2 ring-primary/30">
          <img
            src="/profile.jpg"
            alt="Zakaria El Irej"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-white">Zakaria El Irej</p>
          <p className="text-xs text-muted mt-0.5">Mobile & Web Developer</p>
        </div>
        {/* Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400 font-medium">Available for work</span>
        </div>
      </div>

      {/* Floating tech icons */}
      {FLOATING_TECH.map((tech, i) => {
        const angle = (i / FLOATING_TECH.length) * 2 * Math.PI
        const radius = 46 // percent from center
        const x = 50 + radius * Math.cos(angle - Math.PI / 2)
        const y = 50 + radius * Math.sin(angle - Math.PI / 2)
        const Icon = tech.icon

        return (
          <motion.div
            key={tech.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + i * 0.3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl glass flex items-center justify-center shadow-lg border border-white/10 hover:scale-110 transition-transform cursor-default"
              title={tech.name}
            >
              <Icon size={18} style={{ color: tech.color }} />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const typedText = useTypingEffect(TYPING_ROLES)

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <Particles />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/6 blur-[100px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-secondary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted text-lg font-medium mb-2">Hi, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="block text-white">EL IREJ</span>
                <span className="block gradient-text">ZAKARIA</span>
              </h1>
            </motion.div>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 h-8"
            >
              <span className="text-xl font-semibold text-accent font-mono">{typedText}</span>
              <span className="w-0.5 h-6 bg-accent animate-pulse rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-muted leading-relaxed max-w-lg"
            >
              Passionate developer specialized in Mobile and Web Development, building modern,
              scalable and user-friendly applications using Flutter, Kotlin, Jetpack Compose,
              React, PHP and modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => downloadFile('/zakariaCV.pdf', 'Zakaria_ElIrej_CV.pdf')}
                className="btn-primary group"
                aria-label="Download CV"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                Download CV
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
                aria-label="View Projects"
              >
                <Eye size={16} />
                View Projects
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4"
            >
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
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex justify-center"
          >
            <DevIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted/50 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Tech marquee at bottom */}
      <div className="relative z-10">
        <TechMarquee />
      </div>
    </section>
  )
}
