import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Facebook } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą najszybciej jak to możliwe.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['22 811 01 79', '22 884 64 07', '501 867 335']
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: ['ul. Wrocławska 4', '01-493 Warszawa (Bemowo)']
    },
    {
      icon: Clock,
      title: 'Godziny Otwarcia',
      details: ['Pon-Pt: 8:00 - 18:00', 'Sob: 9:00 - 14:00']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['centercar@example.pl']
    }
  ]

  return (
    <section id="contact" className="py-24 bg-white">
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
            Skontaktuj się z <span className="text-pink">Nami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub odwiedź nas osobiście!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 border-l-4 border-navy hover:border-pink transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-navy flex-shrink-0 mt-1" strokeWidth={2.5} />
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-navy mb-3">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 font-medium text-lg mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 border-l-4 border-navy"
            >
              <h4 className="font-bold text-xl text-navy mb-4">
                Social Media
              </h4>
              <a
                href="https://facebook.com/CenterCarWaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-navy hover:text-pink font-semibold text-lg transition-colors"
              >
                <Facebook size={24} />
                facebook.com/CenterCarWaw
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-10 border-2 border-gray-200 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-navy mb-8">
              Formularz Kontaktowy
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Imię i Nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-navy transition-colors text-lg"
                  placeholder="Jan Kowalski"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-navy transition-colors text-lg"
                  placeholder="+48 123 456 789"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-navy transition-colors text-lg"
                  placeholder="jan@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="carModel" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Marka i Model Auta
                </label>
                <input
                  type="text"
                  id="carModel"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-navy transition-colors text-lg"
                  placeholder="np. VW Golf, BMW 3"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-lg">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-5 py-4 bg-white border-2 border-gray-200 text-gray-900 focus:outline-none focus:border-navy transition-colors resize-none text-lg"
                  placeholder="Opisz czego potrzebujesz..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Wyślij Zapytanie
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden shadow-xl border-2 border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.8676847935667!2d20.91799931573898!3d52.24857597976344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c8e8c8c8f%3A0x8c8c8c8c8c8c8c8c!2sWroc%C5%82awska%204%2C%2001-493%20Warszawa!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Center Car"
          ></iframe>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
