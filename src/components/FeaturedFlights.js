'use client'

import { motion } from 'framer-motion'
import Button from './sera/Button'

const flights = [
  {
    from: 'New York',
    to: 'London',
    fromCode: 'JFK',
    toCode: 'LHR',
    departure: '08:45',
    arrival: '20:15',
    price: '$450',
    duration: '7h 30m'
  },
  {
    from: 'Los Angeles',
    to: 'Tokyo',
    fromCode: 'LAX',
    toCode: 'HND',
    departure: '13:20',
    arrival: '17:35+1',
    price: '$620',
    duration: '11h 15m'
  },
  {
    from: 'Paris',
    to: 'Dubai',
    fromCode: 'CDG',
    toCode: 'DXB',
    departure: '09:10',
    arrival: '17:55',
    price: '$380',
    duration: '6h 45m'
  }
]

export default function FeaturedFlights() {
  return (
    <section
      id="flights"
      className="relative py-24 px-6 bg-gradient-to-tr from-blue-50 to-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center">
        Featured Flights
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {flights.map((flight, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 hover:border-blue-300 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: 'spring', stiffness: 120 }}
          >
            {/* Flight info */}
            <div className="p-6 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-blue-800">{flight.fromCode}</p>
                  <p className="text-sm text-blue-500">{flight.from}</p>
                </div>
                <div className="flex-1 border-t border-dashed border-gray-300 mx-4"></div>
                <div>
                  <p className="text-3xl font-bold text-blue-800">{flight.toCode}</p>
                  <p className="text-sm text-blue-500">{flight.to}</p>
                </div>
              </div>

              {/* Times & Duration */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{flight.departure}</span>
                <span>{flight.duration}</span>
                <span>{flight.arrival}</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="bg-blue-50 p-6 flex items-center justify-between">
              <p className="text-2xl font-bold text-blue-700">{flight.price}</p>
              <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                Book Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
