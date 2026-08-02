import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import LoadingScreen from '@/components/LoadingScreen'
import CursorGlow from '@/components/CursorGlow'
import ScrollProgress from '@/components/ScrollProgress'
import CommandPalette from '@/components/CommandPalette'
import BackToTop from '@/components/BackToTop'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Applications from '@/components/Applications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  useSmoothScroll()

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorGlow />
          <ScrollProgress />
          <CommandPalette />
          <BackToTop />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Applications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
