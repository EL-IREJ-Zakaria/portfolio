import { motion } from 'framer-motion'
import { Smartphone, Palette, Server, Bot, Github, BookOpen, Code2 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import AnimatedCounter from './AnimatedCounter'
import { STATISTICS } from '@/constants/data'

const PASSIONS = [
  { icon: Smartphone, label: 'Mobile Development', color: '#3B82F6', desc: 'Flutter & Kotlin native apps' },
  { icon: Palette, label: 'Modern UI/UX', color: '#06B6D4', desc: 'Beautiful, intuitive interfaces' },
  { icon: Server, label: 'Backend & APIs', color: '#60A5FA', desc: 'REST APIs & databases' },
  { icon: Bot, label: 'Gen AI', color: '#8B5CF6', desc: 'AI-powered applications' },
  { icon: Github, label: 'Open Source', color: '#94A3B8', desc: 'Contributing to community' },
  { icon: BookOpen, label: 'Continuous Learning', color: '#10B981', desc: 'Always growing & improving' },
]

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-card/20">
      <div className="container-custom">
        <SectionHeader
          tag="About Me"
          title="Passionate"
          highlight="Developer"
          subtitle="Building the future, one line of code at a time."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-8 flex flex-col gap-5">
              {/* Avatar placeholder */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/20 shrink-0">
                  <Code2 size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Zakaria El Irej</h3>
                  <p className="text-sm text-muted">Mobile & Web Developer · Temara, Morocco</p>
                </div>
              </div>

              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I'm a passionate developer currently pursuing a{' '}
                  <span className="text-secondary font-medium">
                    Specialized Technician Diploma in Digital Development
                  </span>{' '}
                  with a Mobile Development option at{' '}
                  <span className="text-secondary font-medium">CMC Rabat</span> (2024–2026).
                </p>
                <p>
                  My journey started with a curiosity for how apps work, which quickly evolved into
                  a deep passion for crafting elegant mobile experiences with{' '}
                  <span className="text-accent font-medium">Flutter</span> and{' '}
                  <span className="text-accent font-medium">Kotlin</span>, and building robust web
                  solutions with <span className="text-accent font-medium">React</span> and{' '}
                  <span className="text-accent font-medium">PHP</span>.
                </p>
                <p>
                  Beyond coding, I serve as{' '}
                  <span className="text-secondary font-medium">Sports Club President</span> at CMC,
                  participate in the Robotics Club, and assist in organizing school events — because
                  great software is built by well-rounded humans.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Flutter', 'Kotlin', 'React', 'PHP', 'Python', 'TypeScript', 'Firebase', 'REST API'].map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Passions + Stats */}
          <div className="flex flex-col gap-6">
            {/* Passion grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {PASSIONS.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-4 flex flex-col gap-2 cursor-default group"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${p.color}15` }}
                    >
                      <Icon size={18} style={{ color: p.color }} />
                    </div>
                    <p className="text-xs font-semibold text-white leading-tight">{p.label}</p>
                    <p className="text-xs text-muted/70">{p.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {STATISTICS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-4 text-center flex flex-col gap-1"
                >
                  <span className="text-2xl font-black gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
