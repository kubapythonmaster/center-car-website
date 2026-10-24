import React from 'react'
import { motion } from 'framer-motion'
import { Percent, Clock, FileText } from 'lucide-react'

const Fleet = () => {
  const benefits = [
    {
      icon: Percent,
      title: 'Stałe Rabaty',
      description: 'Indywidualne warunki cenowe dla firm i warsztatów'
    },
    {
      icon: Clock,
      title: 'Priorytetowe Terminy',
      description: 'Szybsza realizacja zamówień dla stałych partnerów'
    },
    {
      icon: FileText,
      title: 'Faktura VAT',
      description: 'Pełna dokumentacja księgowa i rozliczeniowa'
    }
  ]

  return (
    <section id="fleet" className="py-24 bg-navy text-white relative overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&auto=format&fit=crop&q=80" 
          alt="Flota samochodów" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Obsługa Flot <span className="text-pink">Samochodowych</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Kompleksowa obsługa samochodów firmowych. Współpracujemy z liderami w kategorii.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 p-10 border-2 border-white/20 hover:border-pink transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-pink flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 p-12 border-2 border-white/20 backdrop-blur-sm"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Zainteresowany Współpracą B2B?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby omówić szczegóły i otrzymać indywidualną ofertę
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-pink text-navy font-semibold text-lg hover:bg-pink-light transition-colors duration-300"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Fleet
