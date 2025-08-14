'use client'

import { useState } from 'react'
import { Plane } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { name: 'Flights', href: '#flights', dropdown: ['One-way', 'Round-trip', 'Multi-city'] },
  { name: 'Destinations', href: '#destinations', dropdown: ['Europe', 'Asia', 'America'] },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(null)

  return (
    <nav className="fixed w-full top-4 z-50 px-4 flex justify-center">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 25 }}
        className="w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-full shadow-md flex items-center px-5 py-2 ring-1 ring-white/30 justify-between"
      >
        {/* Logo */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2 text-blue-600 font-bold text-lg md:text-xl select-none"
        >
          <Plane className="w-6 h-6 rotate-[-15deg] text-blue-500" />
          Atlas Air
        </motion.div>

        {/* Desktop Menu & Search */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-6 gap-5 relative">
          {/* Menu Links */}
          <div className="flex gap-5">
            {menuItems.map(item => (
              <div key={item.name} className="relative">
                <motion.button
                  onClick={() => setActive(active === item.name ? null : item.name)}
                  className="text-sm md:text-base font-medium px-2 py-1 text-blue-700 hover:text-blue-900 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && active === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ type: 'tween', duration: 0.2 }}
                      className="absolute top-8 left-0 w-44 bg-white/95 shadow-md rounded-lg flex flex-col p-2 z-50 ring-1 ring-white/20"
                    >
                      {item.dropdown.map(option => (
                        <motion.a
                          key={option}
                          href="#"
                          className="text-sm px-2 py-1 hover:bg-blue-50 rounded transition"
                          whileHover={{ x: 5 }}
                        >
                          {option}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center bg-white/90 rounded-full px-3 py-1 border border-gray-200 shadow-inner focus-within:ring-2 focus-within:ring-blue-200 transition ml-6">
            <input
              type="text"
              placeholder="Search flights, destinations..."
              className="flex-1 px-3 py-1 text-sm outline-none rounded-l-full bg-transparent"
            />
            <button className="bg-blue-600 text-white px-4 py-1 rounded-r-full hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden ml-auto w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-md hover:shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="block w-6 h-0.5 bg-blue-700 rounded relative"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-blue-700 rounded my-1"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-blue-700 rounded relative"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          />
        </motion.button>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="absolute top-16 right-4 w-64 bg-white/80 backdrop-blur-md shadow-lg flex flex-col gap-2 p-3 rounded-b-lg ring-1 ring-white/20 md:hidden"
          >
            {menuItems.map(item => (
              <div key={item.name} className="flex flex-col">
                <a
                  href={item.href}
                  className="text-sm font-medium px-2 py-1 text-blue-700 hover:text-blue-900 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-4 flex flex-col gap-1">
                    {item.dropdown.map(option => (
                      <a
                        key={option}
                        href="#"
                        className="text-sm px-2 py-1 text-blue-600 hover:bg-blue-50 rounded transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile Search */}
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-2 py-1 rounded-l-full border border-gray-200 text-sm outline-none"
              />
              <button className="bg-blue-600 text-white px-3 py-1 rounded-r-full hover:bg-blue-700 transition">
                Go
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
