'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Olivia Smith',
    location: 'New York, USA',
    review: 'From booking to landing, everything felt first-class. Crew was amazing!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    name: 'Hiro Tanaka',
    location: 'Tokyo, Japan',
    review: 'Smooth flight, spacious seats, and the food was incredible.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'Sophie Martin',
    location: 'Paris, France',
    review: 'I felt cared for from start to finish. The attention to detail is unmatched.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5
  }
]

export default function Testimonials() {
  const Card = ({ testimonial }) => (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 border border-blue-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-100 shadow-md"
      />
      <p className="text-lg text-blue-800 italic mb-4 leading-relaxed">
        &quot;{testimonial.review}&quot;
      </p>
      <div className="flex justify-center mb-2">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>
      <h4 className="font-semibold text-blue-700 text-lg">{testimonial.name}</h4>
      <p className="text-blue-500 text-sm">{testimonial.location}</p>
    </motion.div>
  )

  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl -translate-x-1/3 -translate-y-1/3 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3 -z-10"></div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What Our Passengers Say
      </motion.h2>

      <div className="block md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="max-w-md mx-auto"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <Card testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i} testimonial={t} />
        ))}
      </div>
    </section>
  )
}
