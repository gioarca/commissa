import Cursor from '../components/Cursor.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

import Hero from '../sections/Hero.jsx'
import ProblemSection from '../sections/ProblemSection.jsx'
import HowItWorks from '../sections/HowItWorks.jsx'
import LabsSection from '../sections/LabsSection.jsx'
import {
  SplitCTA,
  Testimonials,
  Distretti,
  Pricing,
  FinalCTA,
} from '../sections/OtherSections.jsx'

export default function LandingPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <LabsSection />
        <SplitCTA />
        <Testimonials />
        <Distretti />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
