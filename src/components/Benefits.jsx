import React from 'react'
import { motion } from 'framer-motion'
import { Wallet, Shield, Clock, Headphones, FileText, Gauge } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Wallet,
      title: 'Oszczędności do 40%',
      description: 'Kupując bezpośrednio z aukcji francuskich omijasz marże pośredników i dealerów. Realne oszczędności od kilku do kilkudziesięciu tysięcy złotych.'
    },
    {
      icon: Shield,
      title: 'Pełne Bezpieczeństwo',
      description: 'Każda transakcja jest w pełni legalna i ubezpieczona. Otrzymujesz komplet dokumentów oraz gwarancję autentyczności pojazdu.'
    },
    {
      icon: Clock,
      title: 'Szybka Realizacja',
      description: 'Średni czas od zakupu do odbioru w Polsce to tylko 2-3 tygodnie. Regularnie informujemy Cię o postępach na każdym etapie.'
    },
    {
      icon: Headphones,
      title: 'Obsługa 24/7',
      description: 'Jesteśmy do Twojej dyspozycji przez cały proces importu. Odpowiadamy na pytania, doradzamy i wspieramy w każdej sytuacji.'
    },
    {
      icon: FileText,
      title: 'Pełna Dokumentacja',
      description: 'Otrzymujesz komplet dokumentów potrzebnych do rejestracji w Polsce. Pomagamy w tłumaczeniach i wszelkich formalnościach.'
    },
    {
      icon: Gauge,
      title: 'Sprawdzone Pojazdy',
      description: 'Każdy pojazd przed zakupem jest szczegółowo weryfikowany. Otrzymujesz raport techniczny i zdjęcia w wysokiej rozdzielczości.'
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
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
            Dlaczego Warto Nam Zaufać?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy kompleksową obsługę i gwarancję najlepszych warunków zakupu
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-french-blue hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-french-blue rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-french-blue p-12 rounded-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Sprowadzonych Pojazdów' },
              { number: '10+', label: 'Lat na Rynku' },
              { number: '98%', label: 'Zadowolonych Klientów' },
              { number: '40%', label: 'Średnia Oszczędność' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-heading font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Benefits
