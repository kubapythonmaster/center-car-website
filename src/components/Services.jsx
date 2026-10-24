import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Cog, Droplets, Disc, Gauge, ClipboardCheck, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Diagnostyka Komputerowa',
      description: 'Kompleksowa diagnostyka elektroniki pojazdu',
      image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Cog,
      title: 'Wymiana Rozrządu',
      description: 'Profesjonalna wymiana paska i łańcucha',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Droplets,
      title: 'Serwis Olejowy i Filtry',
      description: 'Wymiana oleju i filtrów najwyższej jakości',
      image: 'https://images.unsplash.com/photo-1632823469673-134f4c8f4576?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Disc,
      title: 'Naprawy Hamulców',
      description: 'Wymiana klocków, tarcz i płynu hamulcowego',
      image: 'https://images.unsplash.com/photo-1625047509191-a8b21e2e4c68?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: Gauge,
      title: 'Układ Zawieszenia',
      description: 'Naprawa i wymiana elementów zawieszenia',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=600&auto=format&fit=crop'
    },
    {
      icon: ClipboardCheck,
      title: 'Przegląd Techniczny',
      description: 'Kompleksowy przegląd przed badaniem',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-navy text-white border-l-4 border-pink text-xs font-bold uppercase tracking-wider mb-6">
            Co oferujemy?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 tracking-tight leading-tight">
            Kompleksowe Usługi
            <span className="block text-pink mt-2">Serwisowe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesjonalny serwis samochodowy z certyfikatem OK Service
          </p>
        </motion.div>

        {/* Services Grid - Z OBRAZKAMI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white overflow-hidden border-2 border-gray-200 hover:border-pink transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors"></div>
                  
                  {/* Icon on Image */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-pink flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-pink transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-navy font-semibold hover:text-pink transition-colors group"
                  >
                    Zapytaj o usługę
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors duration-300"
          >
            Umów wizytę w serwisie
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Services
