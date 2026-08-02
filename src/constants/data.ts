import {
  FaAndroid,
  FaReact,
  FaPhp,
  FaPython,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaUsers,
  FaProjectDiagram,
  FaComments,
  FaLightbulb,
  FaCode,
  FaServer,
  FaTools,
  FaGraduationCap,
  FaUniversity,
  FaMoon,
  FaTaxi,
  FaPlane,
  FaBook,
  FaPray,
  FaSnowflake,
  FaComments as FaNexTalk,
  FaChild,
  FaMapMarkedAlt,
  FaCertificate,
  FaRobot,
  FaLaptopCode,
} from 'react-icons/fa'
import {
  SiKotlin,
  SiDart,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiJetpackcompose,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiShadcnui,
  SiFramer,
  SiAndroidstudio,
  SiClaude,
} from 'react-icons/si'
import { FiMonitor, FiCpu, FiZap, FiLayers, FiGlobe, FiShoppingBag, FiHome, FiSettings } from 'react-icons/fi'
import type { NavLink, SkillCategory, Project, Application, Education, Language, Statistic, Testimonial, Certificate, BlogPost } from '@/types'

/* ==================== NAVIGATION ==================== */

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
]

/* ==================== TYPING ROLES ==================== */

export const TYPING_ROLES = [
  'Mobile Developer',
  'Android Developer',
  'Flutter Developer',
  'Kotlin Developer',
  'Web Developer',
  'WordPress Developer',
  'Backend Developer',
  'Gen AI Enthusiast',
]

/* ==================== FLOATING TECH ICONS ==================== */

export const FLOATING_TECH = [
  { name: 'Flutter', icon: FaAndroid, color: '#02569B', position: 'top-0 left-0' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF', position: 'top-10 right-0' },
  { name: 'Android', icon: FaAndroid, color: '#3DDC84', position: 'top-1/2 -left-4' },
  { name: 'React', icon: FaReact, color: '#61DAFB', position: 'top-1/3 right-10' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4', position: 'bottom-1/4 left-8' },
  { name: 'Python', icon: FaPython, color: '#3776AB', position: 'bottom-10 right-4' },
  { name: 'WordPress', icon: FaWordpress, color: '#21759B', position: 'bottom-0 left-1/4' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8', position: 'top-1/4 -right-2' },
  { name: 'Jetpack Compose', icon: SiJetpackcompose, color: '#4285F4', position: 'bottom-1/3 -right-4' },
]

/* ==================== SKILLS ==================== */

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core languages I use to build robust applications',
    icon: FaCode,
    skills: [
      { name: 'Flutter', icon: FaAndroid, color: '#02569B' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
    ],
  },
  {
    title: 'Backend',
    description: 'Server-side technologies and APIs',
    icon: FaServer,
    skills: [
      { name: 'REST API', icon: FiGlobe, color: '#3B82F6' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Authentication', icon: FiCpu, color: '#06B6D4' },
      { name: 'Architecture', icon: FiLayers, color: '#60A5FA' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Modern web technologies for beautiful UIs',
    icon: FiMonitor,
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Shadcn', icon: SiShadcnui, color: '#FFFFFF' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
      { name: 'WordPress', icon: FaWordpress, color: '#21759B' },
    ],
  },
  {
    title: 'Android',
    description: 'Native Android development',
    icon: FaAndroid,
    skills: [
      { name: 'Jetpack Compose', icon: SiJetpackcompose, color: '#4285F4' },
      { name: 'XML', icon: FaCode, color: '#E34F26' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools',
    description: 'Tools I use daily for development',
    icon: FaTools,
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
      { name: 'Linux', icon: FaLinux, color: '#FCC624' },
      { name: 'VS Code', icon: FaCode, color: '#007ACC' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'Microsoft Office', icon: FaCode, color: '#D83B01' },
      { name: 'ChatGPT', icon: FaRobot, color: '#10A37F' },
      { name: 'Claude', icon: SiClaude, color: '#D97757' },
      { name: 'Midjourney', icon: FaCode, color: '#8B5CF6' },
    ],
  },
  {
    title: 'Soft Skills',
    description: 'Interpersonal skills for effective collaboration',
    icon: FaUsers,
    skills: [
      { name: 'Teamwork', icon: FaUsers, color: '#3B82F6' },
      { name: 'Project Management', icon: FaProjectDiagram, color: '#06B6D4' },
      { name: 'Communication', icon: FaComments, color: '#60A5FA' },
      { name: 'Problem Solving', icon: FaLightbulb, color: '#F59E0B' },
    ],
  },
]

/* ==================== PROJECTS ==================== */

export const PROJECTS: Project[] = [
  {
    title: 'Student Registration Website',
    description: 'A complete student registration form for the Center of Professions and Skills (CMC RSK). Built with modern frontend technologies for a seamless user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/zakariaelirej',
    demoUrl: '#',
    gradient: 'from-blue-500 to-cyan-500',
    icon: FaLaptopCode,
  },
  {
    title: 'Travel Agency Website',
    description: 'An interactive travel agency website with stunning visuals, destination showcases, and booking features designed to inspire wanderlust.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/zakariaelirej',
    demoUrl: '#',
    gradient: 'from-cyan-500 to-teal-500',
    icon: FaPlane,
  },
  {
    title: 'Second-Hand Clothing Marketplace',
    description: 'An e-commerce platform for buying and selling second-hand clothing, featuring product listings, user accounts, and secure transactions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    githubUrl: 'https://github.com/zakariaelirej',
    demoUrl: '#',
    gradient: 'from-purple-500 to-pink-500',
    icon: FiShoppingBag,
  },
  {
    title: 'Hotel Reservation System',
    description: 'A full-stack hotel reservation system with database management, REST API integration, and real-time booking functionality.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/zakariaelirej',
    demoUrl: '#',
    gradient: 'from-amber-500 to-orange-500',
    icon: FiHome,
  },
  {
    title: 'Automotive Equipment Management',
    description: 'A comprehensive system for managing automotive equipment parts with MongoDB database and an intuitive HTML/CSS interface.',
    technologies: ['HTML', 'CSS', 'MongoDB', 'Backend'],
    githubUrl: 'https://github.com/zakariaelirej',
    demoUrl: '#',
    gradient: 'from-emerald-500 to-green-500',
    icon: FiSettings,
  },
  {
    title: 'Future Featured Project',
    description: 'An exciting new project is in development. Stay tuned for something innovative and impactful!',
    technologies: ['Coming Soon'],
    comingSoon: true,
    gradient: 'from-slate-500 to-slate-700',
    icon: FiZap,
  },
]

/* ==================== APPLICATIONS ==================== */

export const APPLICATIONS: Application[] = [
  {
    name: 'Sleep Tracker',
    description: 'Track your sleep patterns and improve your sleep quality with detailed analytics.',
    technology: 'Flutter',
    status: 'Published',
    icon: FaMoon,
    color: '#8B5CF6',
  },
  {
    name: 'Smart Compteur Taxi',
    description: 'Smart taxi meter application with GPS tracking and fare calculation.',
    technology: 'Kotlin',
    status: 'Published',
    icon: FaTaxi,
    color: '#F59E0B',
  },
  {
    name: 'TravelAPP',
    description: 'Your ultimate travel companion for discovering new destinations.',
    technology: 'Flutter',
    status: 'Published',
    icon: FaPlane,
    color: '#3B82F6',
  },
  {
    name: 'Répertoire',
    description: 'Digital directory application for managing contacts efficiently.',
    technology: 'Kotlin',
    status: 'Published',
    icon: FaBook,
    color: '#10B981',
  },
  {
    name: 'SalatTime',
    description: 'Prayer times application with accurate schedules and notifications.',
    technology: 'Flutter',
    status: 'Published',
    icon: FaPray,
    color: '#06B6D4',
  },
  {
    name: 'Climify',
    description: 'Climate monitoring application with real-time weather data.',
    technology: 'Flutter',
    status: 'In Development',
    icon: FaSnowflake,
    color: '#60A5FA',
  },
  {
    name: 'NexTalk',
    description: 'Modern messaging application with real-time chat capabilities.',
    technology: 'Kotlin',
    status: 'In Development',
    icon: FaNexTalk,
    color: '#EC4899',
  },
  {
    name: 'freeKidsLearn',
    description: 'Educational application for kids with interactive learning content.',
    technology: 'Flutter',
    status: 'Beta',
    icon: FaChild,
    color: '#F97316',
  },
  {
    name: 'Triply',
    description: 'Trip planning application with itinerary management and sharing.',
    technology: 'Flutter',
    status: 'In Development',
    icon: FaMapMarkedAlt,
    color: '#8B5CF6',
  },
]

/* ==================== EDUCATION ==================== */

export const EDUCATION: Education[] = [
  {
    school: 'CMC Rabat',
    period: '2024 - 2026',
    degree: 'Specialized Technician in Digital Development',
    specialization: 'Mobile Development',
    activities: ['Sports Club President', 'Event Assistant', 'Robotics Club'],
    icon: FaUniversity,
  },
  {
    school: 'Lycée Salah Eddin Ayoubi',
    period: '2024',
    degree: 'Bachelor in Physics Chemistry',
    specialization: 'Science Physique',
    activities: ['Volleyball Team Member & Representative'],
    icon: FaGraduationCap,
  },
]

/* ==================== LANGUAGES ==================== */

export const LANGUAGES: Language[] = [
  { name: 'Arabic', level: 'Native', percentage: 100 },
  { name: 'French', level: 'C1', percentage: 85 },
  { name: 'English', level: 'B2', percentage: 70 },
]

/* ==================== STATISTICS ==================== */

export const STATISTICS: Statistic[] = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 9, suffix: '+', label: 'Applications' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '+', label: 'Years Learning' },
]

/* ==================== TESTIMONIALS ==================== */

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Project Team Member',
    role: 'Collaborator',
    content: 'Zakaria is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver quality work is truly impressive.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Classmate',
    role: 'Fellow Student',
    content: 'Working with Zakaria on projects has been a great experience. He is dedicated, creative, and always willing to help others.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Club Member',
    role: 'Sports Club',
    content: 'As our club president, Zakaria demonstrated outstanding leadership and organizational skills. He knows how to motivate a team.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
]

/* ==================== CERTIFICATES ==================== */

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Specialized Technician Diploma',
    issuer: 'CMC Rabat',
    year: '2026',
    icon: FaCertificate,
  },
  {
    title: 'Bachelor in Physics Chemistry',
    issuer: 'Lycée Salah Eddin Ayoubi',
    year: '2024',
    icon: FaGraduationCap,
  },
  {
    title: 'Robotics Club Member',
    issuer: 'CMC Rabat',
    year: '2025',
    icon: FaRobot,
  },
]

/* ==================== BLOG POSTS ==================== */

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Getting Started with Flutter Development',
    excerpt: 'A comprehensive guide to building your first Flutter application from scratch.',
    date: 'Jan 2026',
    readTime: '5 min read',
    tag: 'Flutter',
  },
  {
    title: 'Modern Android Development with Jetpack Compose',
    excerpt: 'Learn how to build beautiful native Android UIs with the modern Compose toolkit.',
    date: 'Dec 2025',
    readTime: '8 min read',
    tag: 'Android',
  },
  {
    title: 'The Power of AI in Modern Development',
    excerpt: 'How AI tools like ChatGPT and Claude are transforming the way we build software.',
    date: 'Nov 2025',
    readTime: '6 min read',
    tag: 'AI',
  },
]

/* ==================== CONTACT ==================== */

export const CONTACT_INFO = {
  phone: '+212 649 144 468',
  email: 'elleirejzakaria@gmail.com',
  location: '348 Massira 1, Temara, Rabat, Morocco',
  github: 'https://github.com/zakariaelirej',
  linkedin: 'https://www.linkedin.com/in/zakaria-el-irej',
  whatsapp: 'https://wa.me/212649144468',
}

/* ==================== TECH MARQUEE ==================== */

export const TECH_MARQUEE = [
  'Flutter',
  'Kotlin',
  'React',
  'TypeScript',
  'PHP',
  'Python',
  'Jetpack Compose',
  'Tailwind CSS',
  'Firebase',
  'MongoDB',
  'MySQL',
  'WordPress',
  'Git',
  'Docker',
  'Figma',
]

/* ==================== GITHUB CONTRIBUTIONS ==================== */

export const GITHUB_CONTRIBUTIONS = Array.from({ length: 365 }, (_, i) => ({
  date: new Date(2025, 0, 1 + i),
  count: Math.floor(Math.random() * 5),
}))