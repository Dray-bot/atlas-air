'use client'

import { motion } from 'framer-motion'
import { Twitter, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
        
        {/* Brand */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-sky-600 mb-4">Atlas Air</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            Premium airline for travelers who demand comfort, reliability, and style. Your journey starts here.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#featured" className="text-gray-500 hover:text-sky-500 transition">Featured Flights</a></li>
            <li><a href="#destinations" className="text-gray-500 hover:text-sky-500 transition">Destinations</a></li>
            <li><a href="#testimonials" className="text-gray-500 hover:text-sky-500 transition">Reviews</a></li>
            <li><a href="#cta" className="text-gray-500 hover:text-sky-500 transition">Book Now</a></li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-sky-500 transition">About Us</a></li>
            <li><a href="#" className="text-gray-500 hover:text-sky-500 transition">Careers</a></li>
            <li><a href="#" className="text-gray-500 hover:text-sky-500 transition">Press</a></li>
            <li><a href="#" className="text-gray-500 hover:text-sky-500 transition">Policies</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-semibold text-gray-900 mb-4">Get in Touch</h4>
          <p className="text-gray-500 text-sm">support@atlasair.com</p>
          <p className="text-gray-500 text-sm">+1 (800) 555-0199</p>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-sky-500 transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-600 hover:text-sky-500 transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-600 hover:text-sky-500 transition"><Facebook className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 space-y-4 sm:space-y-0"
      >
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Atlas Air. All rights reserved. Made by Dray.
        </p>
        <p className="text-center sm:text-right">
          Designed for seamless travel experiences.
        </p>
      </motion.div>
    </footer>
  )
}
