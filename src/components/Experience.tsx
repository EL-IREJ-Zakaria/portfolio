import { motion } from 'framer-motion'
import { Briefcase, Zap } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const EXPERIENCE = [
  {
    role: 'Mobile Developer (Personal Projects)',
    company: 'Self-Employed',
    period: '2024 – Present',
    type: 'Freelance',
    description:
      'Designing and developing mobile applications using Flutter and Kotlin. Building REST API integrations, Firebase backends, and publishing apps to production.',
    skills: ['Flutter', 'Kotlin', 'Firebase', 'REST API', 'Dart'],
    color: '#3B82F6',
  },
  {
    role: 'Web Developer (Academic Projects)',
    company: 'CMC Rabat',
    period: '2024 – Present',
    type: 'Academic',
    description:
      'Building full-stack web applications as part of the Digital Development curriculum. Projects include e-commerce platforms, hotel reservation systems, and management dashboards.',
    skills: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'MongoDB'],
    color: '#06B6D4',
  },
  {
    role: 'Sports Club President',
    company: 'CMC Rabat',
    period: '2024 – Present',
    type: 'Leadership',
    description:
      'Leading the sports club with 50+ members. Organizing events, managing schedules, and fostering teamwork and community spirit within the school.',
    skills: ['Leadership', 'Event Management', 'Communication', 'Teamwork'],
    color: '#10B981',
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="container-custom">
        <SectionHeader
          tag="Experience"
          title="My"
          highlight="Journey"
          subtitle="Projects, roles, and experiences that shaped my skills."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 sm:pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 hidden sm:flex border border-white/10"
                  style={{ backgroundColor: `${exp.color}15` }}
                >
                  <Briefcase size={18} style={{ color: exp.color }} />
                </div>

                {/* Card */}
                <div className="glass-card p-6 flex-1 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-white group-hover:text-secondary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-xs font-mono text-muted/70 bg-white/5 px-2.5 py-1 rounded-lg border border-white/8">
                        {exp.period}
                      </span>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ color: exp.color, backgroundColor: `${exp.color}15` }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="tech-badge">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Future placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex gap-6 sm:pl-16 relative"
            >
              <div className="absolute left-0 top-5 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 hidden sm:flex border border-dashed border-white/20">
                <Zap size={18} className="text-muted/40" />
              </div>
              <div className="glass-card p-6 flex-1 border-dashed border-white/10">
                <p className="text-sm text-muted/50 font-mono text-center">
                  Next chapter loading...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
