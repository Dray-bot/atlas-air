'use client'

import { motion } from 'framer-motion'

export default function Button({ children, className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, opacity: 0.9 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`px-6 py-3 rounded-lg font-semibold cursor-pointer shadow-md bg-blue-600 text-white hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
