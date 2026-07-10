import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'
import InternationalCTASection from './components/InternationalCTASection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactCTASection from './components/ContactCTASection'

export const metadata: Metadata = {
  title: 'FIAT — La Technologie qui Sécurise Vos Investissements au Burkina Faso',
  description:
    'FIAT (Faso Info Art Technologie) : expert en réseaux Wi-Fi professionnels, vidéosurveillance intelligente, domotique et matériel informatique à Ouagadougou, Burkina Faso.',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <InternationalCTASection />
        <TestimonialsSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  )
}
