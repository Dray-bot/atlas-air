'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'

export default function Hero() {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    fetch('/lottie/airplane.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load Lottie:', err))
  }, [])

  if (!animationData) return null

  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-12 gap-10 overflow-hidden pt-32 md:pt-0"
      style={{
        background: 'linear-gradient(180deg, #87CEFA 0%, #fff 60%)'
      }}
    >
      {/* Sun */}
      <motion.div
        className="absolute top-[-20px] left-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-yellow-500 rounded-full blur-3xl opacity-70 z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Clouds */}
      <motion.div
        className="absolute top-20 left-1/4 w-28 h-16 sm:w-36 sm:h-20 md:w-40 md:h-24 bg-white rounded-full opacity-50 blur-xl z-0"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute top-24 right-1/4 w-32 h-20 sm:w-44 sm:h-24 md:w-48 md:h-28 bg-white rounded-full opacity-50 blur-xl z-0"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* Text Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center md:items-start gap-4 md:gap-6 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Fly Beyond Borders
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-blue-900 max-w-xs sm:max-w-lg"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Atlas Air takes you to top destinations worldwide. Travel safe, travel smart, and experience the sky like never before.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.button
            className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Destinations
          </motion.button>
          <motion.button
            className="bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-md hover:bg-blue-100 hover:shadow-lg transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn About Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Lottie Animation */}
      <motion.div
        className="flex-1 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Lottie animationData={animationData} loop />
      </motion.div>
    </section>
  )
}
