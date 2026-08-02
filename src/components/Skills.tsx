import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/constants/data'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const category = SKILL_CATEGORIES[activeCategory]

  return (
    <SectionWrapper id="skills">
      <div className="container-custom">
        <SectionHeader
          tag="Skills"
          title="My Tech"
          highlight="Arsenal"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="flex flex-col gap-8">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {SKILL_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon
              const isActive = i === activeCategory
              return (
                <motion.button
                  key={cat.title}
                  onClick={() => setActiveCategory(i)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? 'bg-primary/15 border-primary/40 text-white shadow-lg shadow-primary/10'
                      : 'glass border-white/8 text-muted hover:text-white hover:border-white/20'
                  }`}
                >
                  <Icon size={15} />
                  {cat.title}
                </motion.button>
              )
            })}
          </div>

          {/* Skills panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-4 mb-8">
                {(() => {
                  const Icon = category.icon
                  return (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                  )
                })()}
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-sm text-muted mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/3 border border-white/6 hover:border-white/15 hover:bg-white/6 transition-all duration-300 cursor-default"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}18` }}
                      >
                        <Icon size={20} style={{ color: skill.color }} />
                      </div>
                      <span className="text-xs font-medium text-muted group-hover:text-white transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* All skills overview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SKILL_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.button
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => setActiveCategory(i)}
                  className="glass-card p-4 text-center flex flex-col items-center gap-2 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5 group"
                >
                  <Icon size={20} className="text-muted group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium text-muted group-hover:text-white transition-colors">
                    {cat.title}
                  </span>
                  <span className="text-xs text-muted/50">{cat.skills.length} skills</span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
