import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Award, ThumbsUp } from 'lucide-react'

const WhyUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: '30 Lat Doświadczenia',
      description: 'Od 1996 roku obsługujemy tysiące zadowolonych klientów w Warszawie'
    },
    {
      icon: Award,
      title: 'Certyfikowany Serwis',
      description: 'Posiadamy certyfikat OK Service - gwarancja jakości usług'
    },
    {
      icon: Clock,
      title: 'Szybka Realizacja',
      description: 'Dostawa części tego samego dnia, sprawna naprawa'
    },
    {
      icon: ThumbsUp,
      title: '98% Zadowolenia',
      description: 'Wysokie oceny i pozytywne opinie naszych klientów'
    }
  ]

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
          <span className="inline-block px-4 py-2 bg-pink text-navy border-l-4 border-white text-xs font-bold uppercase tracking-wider mb-6">
            Dlaczego My?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Twój Zaufany
            <span className="block text-pink mt-3">Partner Motoryzacyjny</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Łączymy doświadczenie, profesjonalizm i nowoczesne podejście do obsługi klienta
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border-2 border-white/10 p-8 hover:border-pink hover:bg-white/10 transition-all duration-300 shadow-lg"
              >
                <div className="w-16 h-16 bg-pink flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white/5 border-2 border-white/10 p-10"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Przekonaj się sam!
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dołącz do grona tysięcy zadowolonych klientów, którzy nam zaufali
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-pink text-navy font-semibold text-lg hover:bg-pink-light transition-colors"
            >
              Umów wizytę już dziś
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyUs
