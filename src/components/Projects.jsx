import React from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, Apple, Calendar, Video, Package, MessageCircle } from 'lucide-react'
import { useContent } from '../context/ContentContext'

const iconMap = [Calendar, Package, Dumbbell, Apple, Package, Video]

const Projects = () => {
  const { content } = useContent()
  const servicesData = content?.services

  if (!servicesData) return null

  return (
    <section id="services" className="py-28 bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-cyan mb-6">
            {servicesData.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            {servicesData.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.items?.map((service, index) => {
            const Icon = iconMap[index] || Dumbbell
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-neon-dark to-black p-8 rounded-2xl border-2 border-neon-blue/30 hover:border-neon-blue hover:shadow-2xl hover:shadow-neon-blue/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-8 h-8 text-neon-blue" strokeWidth={2} />
                    </div>
                    {service.price && (
                      <div className="text-right">
                        <div className="text-2xl font-heading font-bold text-neon-cyan">
                          {service.price.split('/')[0]}
                        </div>
                        {service.price.includes('/') && (
                          <div className="text-xs text-gray-400">
                            {service.price.split('/')[1]}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {service.keywords && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.keywords.split(',').slice(0, 3).map((keyword, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-neon-blue/10 text-neon-cyan border border-neon-blue/30 rounded-full"
                        >
                          {keyword.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href="#contact"
                    className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 border border-neon-blue text-neon-blue font-heading font-semibold hover:from-neon-blue hover:to-neon-cyan hover:text-black transition-all duration-300"
                  >
                    WYBIERZ PAKIET
                  </a>
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
          className="relative bg-gradient-to-r from-neon-dark via-black to-neon-dark p-12 rounded-2xl border-2 border-neon-blue/30 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-cyan/5"></div>
          
          <div className="relative z-10">
            <MessageCircle className="w-16 h-16 text-neon-blue mx-auto mb-6 animate-float" />
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Nie wiesz który pakiet wybrać?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Skontaktuj się ze mną, a wspólnie dobierzemy najlepszą opcję dostosowaną do Twoich celów i możliwości.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-heading font-bold text-lg tracking-wide hover:shadow-2xl hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105"
              >
                BEZPŁATNA KONSULTACJA
              </a>
              <a
                href="mailto:kontakt@sztangastudio.pl"
                className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-heading font-bold text-lg tracking-wide hover:bg-neon-blue hover:text-black transition-all duration-300"
              >
                NAPISZ MAILA
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
