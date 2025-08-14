'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const destinations = [
  {
    city: 'London',
    country: 'United Kingdom',
    image: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/topic-london-gettyimages-760251843-feature?_a=BAVAZGDX0',
    price: 'From $450'
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    image: 'https://www.diplomatisches-magazin.de/fileadmin/_processed_/f/4/csm_jezael-melgoza-1127048-unsplash_3af6a70a55.jpg',
    price: 'From $620'
  },
  {
    city: 'Dubai',
    country: 'UAE',
    image: 'https://mediaim.expedia.com/destination/9/cd8a3f3db7149b0ce36d052aea1182df.jpg',
    price: 'From $380'
  },
  {
    city: 'Paris',
    country: 'France',
    image: 'https://www.chooseparisregion.org/sites/default/files/news/6---Tour-Eiffel_AdobeStock_644956457_1920_72dpi.jpg',
    price: 'From $410'
  }
]

export default function PopularDestinations() {
  return (
    <section
      id="destinations"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Decorative gradient shapes */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 blur-3xl -z-10"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center">
        Popular Destinations
      </h2>

      {/* Mobile carousel */}
      <div className="block lg:hidden relative">
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev custom-prev absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full shadow-md cursor-pointer hover:bg-white/50 transition">
          <FaChevronLeft className="text-blue-800 text-lg" />
        </div>
        <div className="swiper-button-next custom-next absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full shadow-md cursor-pointer hover:bg-white/50 transition">
          <FaChevronRight className="text-blue-800 text-lg" />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          grabCursor
        >
          {destinations.map((dest, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 120 }}
              >
                <img
                  src={dest.image}
                  alt={`${dest.city}, ${dest.country}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{dest.city}</h3>
                  <p className="text-sm opacity-80">{dest.country}</p>
                  <p className="mt-1 font-medium">{dest.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop grid */}
      <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 120 }}
          >
            <img
              src={dest.image}
              alt={`${dest.city}, ${dest.country}`}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{dest.city}</h3>
              <p className="text-sm opacity-80">{dest.country}</p>
              <p className="mt-1 font-medium">{dest.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
