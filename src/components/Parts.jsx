import React from 'react'
import { motion } from 'framer-motion'
import { Package, Truck, Clock, BadgeCheck } from 'lucide-react'

const Parts = () => {
  const brands = [
    'Bosch', 'Mann', 'Filtron', 'TRW', 
    'ATE', 'Sachs', 'Febi', 'LUK'
  ]

  const features = [
    {
      icon: Package,
      title: '10,000+ Części',
      description: 'Ogromny wybór części zamiennych do aut europejskich i azjatyckich'
    },
    {
      icon: BadgeCheck,
      title: 'Jakość GVO',
      description: 'Części odpowiadające jakością częściom oryginalnym'
    },
    {
      icon: Truck,
      title: 'Własny Transport',
      description: 'Dostawy na terenie Warszawy i okolic'
    },
    {
      icon: Clock,
      title: 'Dostawa 24h',
      description: 'Realizacja zamówień indywidualnych w ciągu 24h'
    }
  ]

  return (
    <section id="parts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 tracking-tight leading-tight">
            Hurtownia <span className="text-pink">Części</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesjonalna hurtownia części samochodowych od 1996 roku
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-pink" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Brands Section */}
        <div className="bg-gray-50 p-10 sm:p-12 border-2 border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold text-navy mb-6">
              Zaufane Marki
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Współpracujemy tylko z najlepszymi producentami części zamiennych
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 border-2 border-gray-200 hover:border-navy transition-colors duration-300 text-center shadow-sm hover:shadow-md"
              >
                <span className="text-2xl font-bold text-navy">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-center"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors duration-300"
            >
              Zapytaj o dostępność części
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Parts
