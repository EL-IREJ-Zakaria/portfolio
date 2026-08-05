import { motion } from 'framer-motion'
import { APPLICATIONS } from '@/constants/data'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { Smartphone, Code2 } from 'lucide-react'

const STATUS_STYLES: Record<string, string> = {
  Published: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'In Development': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Beta: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
}

export default function Applications() {
  return (
    <SectionWrapper id="applications">
      <div className="container-custom">
        <SectionHeader
          tag="Applications"
          title="Mobile"
          highlight="Apps"
          subtitle="Mobile applications I've built with Flutter and Kotlin."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {APPLICATIONS.map((app, i) => {
            const Icon = app.icon
            const TechIcon = app.technology === 'Flutter' ? Smartphone : Code2
            const techColor = app.technology === 'Flutter' ? '#02569B' : '#7F52FF'

            return (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group glass-card p-5 flex flex-col gap-4 hover:border-white/20 hover:shadow-xl transition-all duration-400 cursor-default"
              >
                {/* App icon */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${app.color}20`, boxShadow: `0 8px 24px ${app.color}20` }}
                  >
                    <Icon size={26} style={{ color: app.color }} />
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_STYLES[app.status]}`}
                  >
                    {app.status}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="font-bold text-white text-sm leading-tight group-hover:text-secondary transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                </div>

                {/* Tech badge */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-white/5">
                  <TechIcon size={12} style={{ color: techColor }} />
                  <span className="text-xs font-mono text-muted/70">{app.technology}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 glass-card p-5 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { label: 'Total Apps', value: APPLICATIONS.length, color: '#3B82F6' },
            { label: 'Flutter', value: APPLICATIONS.filter((a) => a.technology === 'Flutter').length, color: '#02569B' },
            { label: 'Kotlin', value: APPLICATIONS.filter((a) => a.technology === 'Kotlin').length, color: '#7F52FF' },
            { label: 'Published', value: APPLICATIONS.filter((a) => a.status === 'Published').length, color: '#10B981' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
