import { motion } from 'framer-motion'
import { Github, ExternalLink, Zap } from 'lucide-react'
import { PROJECTS } from '@/constants/data'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-card/20">
      <div className="container-custom">
        <SectionHeader
          tag="Projects"
          title="Featured"
          highlight="Work"
          subtitle="A selection of projects I've built — from web apps to full-stack systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group glass-card overflow-hidden flex flex-col hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                {/* Screenshot placeholder */}
                <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 bg-grid opacity-30" />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Coming soon badge */}
                  {project.comingSoon && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-xs font-medium text-white">
                      <Zap size={10} className="text-yellow-400" />
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  {!project.comingSoon && (
                    <div className="flex gap-2 pt-2 border-t border-white/5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-muted hover:text-white hover:bg-white/5 transition-all duration-200 border border-white/8 hover:border-white/20"
                          aria-label={`GitHub: ${project.title}`}
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-secondary hover:text-white hover:bg-primary/10 transition-all duration-200 border border-primary/20 hover:border-primary/40"
                          aria-label={`Demo: ${project.title}`}
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
