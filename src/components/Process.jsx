import React from 'react'
import { motion } from 'framer-motion'
import { Search, FileCheck, Truck, CheckCircle } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Wybór Pojazdu',
      description: 'Wspólnie wybieramy auto z aukcji francuskich według Twoich potrzeb i budżetu. Sprawdzamy historię, stan techniczny i dokumentację.'
    },
    {
      icon: FileCheck,
      number: '02',
      title: 'Zakup i Formalności',
      description: 'Kupujemy wybrany pojazd w Twoim imieniu, załatwiamy wszystkie formalności prawne i dokumentację potrzebną do importu.'
    },
    {
      icon: Truck,
      number: '03',
      title: 'Transport do Polski',
      description: 'Organizujemy profesjonalny transport pojazdu z Francji do Polski na lawecie. Zapewniamy pełne ubezpieczenie podczas przewozu.'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Odbiór i Rejestracja',
      description: 'Po przyjeździe do Polski pomagamy w rejestracji pojazdu. Otrzymujesz komplet dokumentów i gotowe do użytkowania auto.'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Jak to Działa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prosty proces importu w 4 krokach
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200 hover:border-french-blue transition-all duration-300 h-full">
                  
                  {/* Number Badge */}
                  <div className="w-12 h-12 bg-french-blue text-white rounded-lg flex items-center justify-center mb-4 font-heading font-bold text-xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-french-blue" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white p-12 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Gotowy na Import Swojego Wymarzonego Auta?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i poznaj szczegóły. Bezpłatna wycena i doradztwo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-french-red text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Zapytaj o Wycenę
            </a>
            <a
              href="tel:660144971"
              className="px-8 py-4 border-2 border-french-blue text-french-blue font-semibold rounded-lg hover:bg-french-blue hover:text-white transition-colors duration-300"
            >
              Zadzwoń: 660 144 971
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Process
