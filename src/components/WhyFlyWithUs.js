'use client'

import { motion } from 'framer-motion'
import { FaPlaneDeparture, FaShieldAlt, FaWifi, FaConciergeBell } from 'react-icons/fa'

const features = [
  {
    icon: <FaPlaneDeparture className="text-blue-400 text-5xl drop-shadow-lg" />,
    title: 'Global Reach',
    description: 'Access 150+ destinations worldwide with our seamless service.'
  },
  {
    icon: <FaShieldAlt className="text-blue-400 text-5xl drop-shadow-lg" />,
    title: 'Safety First',
    description: 'Certified world-class safety standards and modern fleet.'
  },
  {
    icon: <FaWifi className="text-blue-400 text-5xl drop-shadow-lg" />,
    title: 'In-Flight Wi-Fi',
    description: 'Fast, reliable connectivity from departure to arrival.'
  },
  {
    icon: <FaConciergeBell className="text-blue-400 text-5xl drop-shadow-lg" />,
    title: 'Premium Service',
    description: 'Gourmet dining, spacious seating, and personal attention.'
  }
]

export default function WhyFlyWithUs() {
  return (
    <section
      id="why-fly"
      className="relative py-28 px-6 bg-gradient-to-b from-[#f0f6ff] to-white overflow-hidden"
    >
      {/* Luxury gradient orbs */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-blue-300/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-purple-300/20 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 -z-10"></div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Why Fly With Us
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 200 }}
              className="mb-6"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">{feature.title}</h3>
            <p className="text-blue-700/80 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
