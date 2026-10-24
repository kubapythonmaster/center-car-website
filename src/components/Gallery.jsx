import React from 'react'
import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

const Gallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80',
      title: 'Profesjonalny Warsztat',
      category: 'Warsztat'
    },
    {
      src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&auto=format&fit=crop&q=80',
      title: 'Diagnostyka Komputerowa',
      category: 'Serwis'
    },
    {
      src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&auto=format&fit=crop&q=80',
      title: 'Naprawa Silnika',
      category: 'Serwis'
    },
    {
      src: 'https://images.unsplash.com/photo-1632823469673-134f4c8f4576?w=800&auto=format&fit=crop&q=80',
      title: 'Serwis Olejowy',
      category: 'Konserwacja'
    },
    {
      src: 'https://images.unsplash.com/photo-1625047509191-a8b21e2e4c68?w=800&auto=format&fit=crop&q=80',
      title: 'Układ Hamulcowy',
      category: 'Bezpieczeństwo'
    },
    {
      src: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&auto=format&fit=crop&q=80',
      title: 'Zawieszenie',
      category: 'Naprawa'
    },
    {
      src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80',
      title: 'Kontrola Techniczna',
      category: 'Przegląd'
    },
    {
      src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80',
      title: 'Nowoczesny Sprzęt',
      category: 'Warsztat'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-pink" />
            <span className="text-sm font-bold uppercase tracking-wider text-navy">Galeria</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-navy mb-6 tracking-tight leading-tight">
            Nasz <span className="text-pink">Warsztat</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zobacz nasze profesjonalne zaplecze i nowoczesny sprzęt
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-pink text-navy text-xs font-bold uppercase tracking-wider mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Odwiedź nas i przekonaj się o naszych standardach osobiście
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors duration-300"
          >
            Umów wizytę
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
