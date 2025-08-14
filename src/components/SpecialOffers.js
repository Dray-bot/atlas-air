'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState, useEffect } from 'react'

const offers = [
  {
    title: 'Fly to Bali',
    discount: '30% Off',
    details: 'Book now and save on round trips from select cities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
  },
  {
    title: 'Paris Getaway',
    discount: 'Save $150',
    details: 'Experience the City of Light with this special offer.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
  },
  {
    title: 'Tokyo Adventure',
    discount: '20% Off',
    details: 'Enjoy discounted flights from major US airports.',
    image: 'https://static.ffx.io/images/$zoom_0.196%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/e63d57e76adbff3a52ff2c6423fee46c0c044e41'
  }
]

export default function SpecialOffers() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkWidth = () => setIsMobile(window.innerWidth <= 768)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  const Card = ({ offer }) => (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 sm:h-56 md:h-60 w-full overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 sm:p-6 flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-bold text-blue-700">{offer.title}</h3>
        <span className="text-md sm:text-lg font-semibold text-green-600">{offer.discount}</span>
        <p className="text-blue-500 text-sm sm:text-base">{offer.details}</p>
        <button className="mt-4 px-4 py-2 sm:px-5 sm:py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
          Book Offer
        </button>
      </div>
    </motion.div>
  )

  return (
    <section
      id="special-offers"
      className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-tr from-blue-50 to-white overflow-hidden"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-10 sm:mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Special Offers
      </motion.h2>

      {!mounted ? (
        // Render placeholder so SSR & Client match
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, i) => (
            <Card key={i} offer={offer} />
          ))}
        </div>
      ) : isMobile ? (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides
          pagination={{ clickable: true }}
          className="max-w-full"
        >
          {offers.map((offer, i) => (
            <SwiperSlide key={i}>
              <Card offer={offer} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, i) => (
            <Card key={i} offer={offer} />
          ))}
        </div>
      )}
    </section>
  )
}
