import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedFlights from '@/components/FeaturedFlights'
import PopularDestinations from '@/components/PopularDestinations'
import WhyFlyWithUs from '@/components/WhyFlyWithUs'
import Testimonials from '@/components/Testimonials'
import SpecialOffers from '@/components/SpecialOffers'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedFlights />
      <PopularDestinations />
      <WhyFlyWithUs />
      <Testimonials />
      <SpecialOffers />
      <CTA />
      <Footer />
    </>
  )
}

