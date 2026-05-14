import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Applications from './components/Applications'
import ClientLogos from './components/ClientLogos'
import ShedTypes from './components/ShedTypes'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function useHashRoute() {
  const get = () => (typeof window === 'undefined' ? '' : window.location.hash.replace(/^#\/?/, '').replace(/\/$/, ''))
  const [route, setRoute] = useState(get())
  useEffect(() => {
    const onChange = () => { setRoute(get()); window.scrollTo({ top: 0 }) }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Applications />
        <ClientLogos />
        <ShedTypes />
        <WhyChooseUs />
        <HowItWorks />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const route = useHashRoute()
  if (route === 'privacy-policy') return <PrivacyPolicy />
  if (route === 'terms-of-service') return <TermsOfService />
  return <Home />
}
