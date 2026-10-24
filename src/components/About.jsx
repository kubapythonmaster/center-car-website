import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { number: '30+', label: 'Lat na rynku', sublabel: 'Od 1996 roku' },
    { number: '10,000+', label: 'Części w ofercie', sublabel: 'Europejskie i azjatyckie' },
    { number: '98%', label: 'Zadowolenia', sublabel: 'Opinie klientów' }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1400&auto=format&fit=crop" 
                alt="Mechanik przy pracy" 
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Stats Cards Overlay */}
            <div className="absolute -bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-navy text-white p-6 shadow-xl text-center border-l-4 border-pink"
                >
                  <div className="text-3xl font-bold text-pink mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <span className="inline-block px-4 py-2 bg-pink text-navy border-l-4 border-navy text-xs font-bold uppercase tracking-wider mb-6">
              Kim jesteśmy?
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-8 tracking-tight leading-tight">
              Twój Zaufany Partner
              <span className="block text-pink mt-3">Od 1996 Roku</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed mb-10">
              <p className="text-base leading-loose">
                <strong className="text-navy font-bold">Firma Center Car</strong> jest profesjonalną hurtownią części do samochodów 
                europejskich i azjatyckich. Prowadzimy działalność już od <strong className="text-navy font-bold">1996 roku</strong>, co stawia nas 
                w pierwszym rzędzie najbardziej doświadczonych sprzedawców.
              </p>
              
              <p className="text-lg">
                Posiadamy ofertę zarówno dla odbiorców detalicznych, jak i dla hurtowych - oferujemy 
                <strong className="text-navy font-semibold"> specjalne zniżki dla warsztatów samochodowych oraz stałych klientów</strong>.
              </p>
              
              <p className="text-lg">
                W 2001 roku znacznie poszerzyliśmy ofertę dzięki czemu w stałej sprzedaży posiadamy ok. 
                <strong className="text-navy font-semibold"> 10,000 części zamiennych</strong> w znacznej większości odpowiadających 
                jakością częściom oryginalnym (dyrektywa GVO).
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors"
              >
                Nasze usługi
              </a>
              <a
                href="#parts"
                className="px-8 py-4 border-2 border-navy text-navy font-semibold text-lg hover:bg-gray-50 transition-colors"
              >
                Zobacz części
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
