import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Applications from './components/Applications'
import ShedTypes from './components/ShedTypes'
import WhyChooseUs from './components/WhyChooseUs'
import ClientLogos from './components/ClientLogos'
import CaseStudies from './components/CaseStudies'
import HowItWorks from './components/HowItWorks'
import CTABanner from './components/CTABanner'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Applications />
        <ShedTypes />
        <WhyChooseUs />
        <ClientLogos />
        <CaseStudies />
        <HowItWorks />
        <CTABanner />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
