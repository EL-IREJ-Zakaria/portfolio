import { TECH_MARQUEE } from '@/constants/data'

export default function TechMarquee() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE]

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-6 text-sm font-mono text-muted/60 hover:text-muted transition-colors"
          >
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
