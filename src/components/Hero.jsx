import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-navy flex items-center">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&auto=format&fit=crop&q=80"
          alt="Profesjonalny warsztat samochodowy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/85 to-navy/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-5 py-2.5 bg-pink text-navy text-xs font-bold uppercase tracking-wider">
              Od 1996 Roku w Warszawie
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-none tracking-tight">
            Center Car
          </h1>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-pink mb-8 tracking-tight">
            Twoje Centrum Samochodowe
          </h2>

          {/* Divider Line */}
          <div className="w-28 h-1 bg-pink mb-8"></div>

          {/* Subheading */}
          <p className="text-xl text-white mb-4 leading-relaxed font-medium">
            Profesjonalny serwis mechaniczny i hurtownia części zamiennych
          </p>
          
          <p className="text-lg text-gray-300 mb-12">
            ul. Wrocławska 4, Warszawa Bemowo
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="tel:228110179"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-pink text-navy font-bold text-lg hover:bg-pink-light transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń: 22 811 01 79</span>
            </a>
            <Link
              to="/cennik"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-navy transition-all"
            >
              <span>Zobacz Cennik</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl">
            <div className="border-l-4 border-pink pl-6 py-3 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pink mb-2">30+</div>
              <div className="text-white text-xs uppercase tracking-wide font-semibold">Lat Doświadczenia</div>
            </div>
            <div className="border-l-4 border-pink pl-6 py-3 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pink mb-2">10k+</div>
              <div className="text-white text-xs uppercase tracking-wide font-semibold">Części w Magazynie</div>
            </div>
            <div className="border-l-4 border-pink pl-6 py-3 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pink mb-2">98%</div>
              <div className="text-white text-xs uppercase tracking-wide font-semibold">Zadowolonych Klientów</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
