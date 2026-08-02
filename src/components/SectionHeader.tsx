import { motion } from 'framer-motion'

interface Props {
  tag: string
  title: string
  highlight?: string
  subtitle?: string
}

export default function SectionHeader({ tag, title, highlight, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-4 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5"
      >
        {tag}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="section-title"
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
