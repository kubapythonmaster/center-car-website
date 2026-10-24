import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Start', path: '/' },
    { name: 'O nas', path: '/', hash: '#about' },
    { name: 'Usługi', path: '/', hash: '#services' },
    { name: 'Części', path: '/', hash: '#parts' },
    { name: 'Cennik', path: '/cennik' },
    { name: 'Kontakt', path: '/', hash: '#contact' },
  ]

  const services = [
    'Diagnostyka komputerowa',
    'Wymiana rozrządu',
    'Serwis olejowy',
    'Naprawy hamulców',
    'Układ zawieszenia',
    'Przegląd techniczny'
  ]

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo-centercar.png" 
                alt="Center Car" 
                className="h-20 w-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-3">
                Center Car
              </h3>
              <p className="text-white/80 leading-relaxed">
                Profesjonalny serwis samochodowy i hurtownia części od 1996 roku. 
                Warszawa Bemowo.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <a
                href="https://facebook.com/CenterCarWaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-pink transition-colors"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">
              Menu
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    if (link.hash) {
                      setTimeout(() => {
                        document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }
                  }}
                  className="block text-white/80 hover:text-pink transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">
              Nasze Usługi
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">
              Kontakt
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:228110179"
                className="flex items-start gap-3 text-white/80 hover:text-pink transition-colors"
              >
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span className="font-semibold">22 811 01 79</span>
              </a>
              <a 
                href="tel:228846407"
                className="flex items-start gap-3 text-white/80 hover:text-pink transition-colors"
              >
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span className="font-semibold">22 884 64 07</span>
              </a>
              <a 
                href="tel:501867335"
                className="flex items-start gap-3 text-white/80 hover:text-pink transition-colors"
              >
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span className="font-semibold">501 867 335</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>ul. Wrocławska 4<br />01-493 Warszawa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-center md:text-left">
              &copy; {currentYear} Center Car. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-white/80 hover:text-pink transition-colors">
                Polityka Prywatności
              </a>
              <a href="#" className="text-white/80 hover:text-pink transition-colors">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
