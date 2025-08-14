'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 px-6 bg-gradient-to-b from-sky-100 via-sky-200 to-white text-blue-900 overflow-hidden"
    >
      {/* Cloud accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full opacity-40 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full opacity-40 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready for your next adventure?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-blue-700 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Book your flight today and experience world-class comfort, safety, and service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="px-8 py-4 bg-sky-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-sky-400 transition-colors">
            Book Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
