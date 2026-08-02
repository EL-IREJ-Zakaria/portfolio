import type { IconType } from 'react-icons'

export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  icon: IconType
  color: string
}

export interface SkillCategory {
  title: string
  description: string
  icon: IconType
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  comingSoon?: boolean
  gradient: string
  icon: IconType
}

export interface Application {
  name: string
  description: string
  technology: 'Flutter' | 'Kotlin'
  status: 'Published' | 'In Development' | 'Beta'
  icon: IconType
  color: string
}

export interface Education {
  school: string
  period: string
  degree: string
  specialization: string
  activities: string[]
  icon: IconType
}

export interface Language {
  name: string
  level: string
  percentage: number
}

export interface Statistic {
  value: number
  suffix: string
  label: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

export interface Certificate {
  title: string
  issuer: string
  year: string
  icon: IconType
}

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  tag: string
}