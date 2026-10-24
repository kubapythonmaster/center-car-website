import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, Phone, ArrowRight } from 'lucide-react'

const PricingPage = () => {  const servicePricing = [
    {
      category: 'Diagnostyka i Przeglądy',
      items: [
        { service: 'Diagnostyka komputerowa', price: 'od 100 zł' },
        { service: 'Przegląd techniczny', price: 'od 150 zł' },
        { service: 'Kontrola przed zakupem', price: 'od 200 zł' },
        { service: 'Badanie techniczne', price: 'od 98 zł' },
      ]
    },
    {
      category: 'Serwis Olejowy',
      items: [
        { service: 'Wymiana oleju silnikowego', price: 'od 80 zł' },
        { service: 'Wymiana filtra oleju', price: 'od 40 zł' },
        { service: 'Wymiana filtra powietrza', price: 'od 30 zł' },
        { service: 'Wymiana filtra kabinowego', price: 'od 40 zł' },
      ]
    },
    {
      category: 'Układ Hamulcowy',
      items: [
        { service: 'Wymiana klocków hamulcowych (oś)', price: 'od 120 zł' },
        { service: 'Wymiana tarcz hamulcowych (oś)', price: 'od 150 zł' },
        { service: 'Wymiana płynu hamulcowego', price: 'od 80 zł' },
        { service: 'Regeneracja zacisków', price: 'od 200 zł' },
      ]
    },
    {
      category: 'Układ Rozrządu',
      items: [
        { service: 'Wymiana paska rozrządu', price: 'od 400 zł' },
        { service: 'Wymiana łańcucha rozrządu', price: 'od 800 zł' },
        { service: 'Wymiana pompy wody', price: 'od 250 zł' },
        { service: 'Regulacja zaworów', price: 'od 200 zł' },
      ]
    },
    {
      category: 'Układ Zawieszenia',
      items: [
        { service: 'Wymiana amortyzatora', price: 'od 150 zł' },
        { service: 'Wymiana wahacza', price: 'od 180 zł' },
        { service: 'Wymiana łożyska koła', price: 'od 200 zł' },
        { service: 'Geometria kół', price: 'od 100 zł' },
      ]
    },
    {
      category: 'Elektryka i Elektronika',
      items: [
        { service: 'Wymiana akumulatora', price: 'od 50 zł' },
        { service: 'Ładowanie klimatyzacji', price: 'od 150 zł' },
        { service: 'Wymiana żarówek', price: 'od 30 zł' },
        { service: 'Naprawa instalacji elektrycznej', price: 'od 150 zł' },
      ]
    },
  ]

  const packages = [
    {
      name: 'Przegląd Podstawowy',
      price: '199',
      popular: false,
      description: 'Idealny dla aut do 100 tys. km',
      features: [
        'Diagnostyka komputerowa',
        'Sprawdzenie płynów eksploatacyjnych',
        'Kontrola układu hamulcowego',
        'Sprawdzenie oświetlenia',
        'Pomiar grubości klocków',
        'Raport z przeglądu'
      ],
      notIncluded: [
        'Wymiana oleju i filtrów',
        'Naprawy',
        'Części zamienne'
      ]
    },
    {
      name: 'Przegląd Rozszerzony',
      price: '349',
      popular: true,
      description: 'Polecany dla aut 100-200 tys. km',
      features: [
        'Wszystko z Przeglądu Podstawowego',
        'Kontrola układu zawieszenia',
        'Kontrola układu wydechowego',
        'Sprawdzenie pasków i łańcuchów',
        'Test akumulatora',
        'Kontrola klimatyzacji',
        'Szczegółowy raport fotograficzny'
      ],
      notIncluded: [
        'Części zamienne',
        'Naprawy wykrytych usterek'
      ]
    },
    {
      name: 'Przegląd Premium',
      price: '599',
      popular: false,
      description: 'Kompleksowy dla aut powyżej 200 tys. km',
      features: [
        'Wszystko z Przeglądu Rozszerzonego',
        'Wymiana oleju i filtra',
        'Kontrola kompresji silnika',
        'Test turbosprężarki (jeśli dotyczy)',
        'Kontrola układu kierowniczego',
        'Skanowanie błędów',
        'Konsultacja techniczna'
      ],
      notIncluded: [
        'Części zamienne (poza olejem)',
        'Naprawy wykrytych usterek'
      ]
    }
  ]

  return (
    <div className="pt-24">
      
      {/* Hero Cennik */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1600&auto=format&fit=crop&q=80" 
            alt="Serwis samochodowy" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-pink text-navy border-l-4 border-white text-xs font-bold uppercase tracking-wider mb-6">
              Transparentne Ceny
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Cennik
              <span className="block text-pink mt-3">Usług i Przeglądów</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Przejrzyste i konkurencyjne ceny. Wszystkie kwoty zawierają robociznę. 
              Części rozliczane według cennika hurtowni.
            </p>
            <a
              href="tel:228110179"
              className="inline-flex items-center gap-3 px-8 py-4 bg-pink text-navy font-bold text-lg hover:bg-pink-light transition-colors shadow-lg"
            >
              <Phone size={20} />
              Zadzwoń po szczegóły: 22 811 01 79
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pakiety Przeglądowe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 tracking-tight leading-tight">
              Pakiety <span className="text-pink">Przeglądowe</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wybierz pakiet dopasowany do przebiegu Twojego auta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white p-8 border-2 ${
                  pkg.popular 
                    ? 'border-pink shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-navy'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink text-navy px-4 py-1 text-sm font-bold uppercase tracking-wide">
                      NAJPOPULARNIEJSZY
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-pink">{pkg.price}</span>
                    <span className="text-gray-600 font-medium">zł</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-bold text-navy mb-3">W pakiecie:</p>
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 mb-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.notIncluded.length > 0 && (
                    <div>
                      <p className="text-sm font-bold text-gray-500 mb-3">Nie zawiera:</p>
                      {pkg.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 mb-2">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-gray-500 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/#contact"
                  className={`block text-center px-6 py-3 font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-pink text-navy hover:bg-pink-light'
                      : 'bg-navy text-white hover:bg-navy-dark'
                  }`}
                >
                  Umów przegląd
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cennik Szczegółowy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 tracking-tight leading-tight">
              Cennik <span className="text-pink">Szczegółowy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ceny robocizny za najpopularniejsze usługi. Części rozliczane osobno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicePricing.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 border-2 border-gray-200 shadow-md"
              >
                <h3 className="text-2xl font-bold text-navy mb-6 border-b-4 border-pink pb-4">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-700 font-medium text-base">{item.service}</span>
                      <span className="text-navy font-bold text-xl">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-navy text-white p-10 border-l-8 border-pink"
          >
            <h3 className="text-2xl font-bold mb-4">Ważne Informacje</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="mb-2">✓ Wszystkie ceny zawierają robociznę</p>
                <p className="mb-2">✓ Części rozliczane według cennika hurtowni</p>
                <p className="mb-2">✓ Ceny mogą się różnić w zależności od modelu auta</p>
              </div>
              <div>
                <p className="mb-2">✓ Możliwość montażu części klienta</p>
                <p className="mb-2">✓ Faktury VAT</p>
                <p className="mb-2">✓ Gwarancja na wykonane usługi</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-gray-700 mb-6">
              Potrzebujesz indywidualnej wyceny? Skontaktuj się z nami!
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors"
            >
              Napisz do nas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery in Pricing */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Profesjonalny Sprzęt i <span className="text-pink">Doświadczony Zespół</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nowoczesne wyposażenie warsztatu gwarantuje najwyższą jakość usług
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=700&auto=format&fit=crop&q=80" 
                alt="Profesjonalny warsztat" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=700&auto=format&fit=crop&q=80" 
                alt="Diagnostyka komputerowa" 
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PricingPage
