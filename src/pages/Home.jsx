import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Coverage from '../components/Coverage'
import Process from '../components/Process'
import Why from '../components/Why'
import About from '../components/About'
import CTA from '../components/CTA'
import { scrollToId } from '../components/Nav'

export default function Home() {
  const location = useLocation()
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      const id = setTimeout(() => scrollToId(target), 80)
      return () => clearTimeout(id)
    }
  }, [location.state])

  return (
    <main>
      <Hero />
      <Services />
      <Coverage />
      <Process />
      <Why />
      <About />
      <CTA />
    </main>
  )
}
