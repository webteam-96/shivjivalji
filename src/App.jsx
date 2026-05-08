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

export default function App() {
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
