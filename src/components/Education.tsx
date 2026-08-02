import { motion } from 'framer-motion'
import { EDUCATION, LANGUAGES } from '@/constants/data'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-card/20">
      <div className="container-custom">
        <SectionHeader
          tag="Education"
          title="Academic"
          highlight="Background"
          subtitle="My educational path and language proficiency."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education timeline */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {EDUCATION.map((edu, i) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass-card p-6 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-white group-hover:text-secondary transition-colors">
                          {edu.school}
                        </h3>
                        <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-lg shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-secondary mb-1">{edu.degree}</p>
                      <p className="text-xs text-muted mb-4">{edu.specialization}</p>

                      {/* Activities */}
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.map((act) => (
                          <span
                            key={act}
                            className="inline-flex items-center gap-1.5 text-xs text-muted/80 bg-white/4 border border-white/8 px-2.5 py-1 rounded-lg"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent/60" />
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 h-fit"
          >
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Languages
            </h3>

            <div className="flex flex-col gap-6">
              {LANGUAGES.map((lang, i) => (
                <div key={lang.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{lang.name}</span>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                  <span className="text-xs text-muted/60 text-right">{lang.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-white/8">
              <p className="text-xs text-muted/60 text-center font-mono">
                Multilingual communicator
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
