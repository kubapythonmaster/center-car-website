import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Start', path: '/', href: '#home' },
    { name: 'O nas', path: '/', href: '#about' },
    { name: 'Usługi', path: '/', href: '#services' },
    { name: 'Części', path: '/', href: '#parts' },
    { name: 'Cennik', path: '/cennik' },
    { name: 'Kontakt', path: '/', href: '#contact' },
  ]

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false)
    if (link.href && location.pathname === link.path) {
      setTimeout(() => {
        const element = document.querySelector(link.href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/logo-centercar.png" 
              alt="Center Car" 
              className="h-20 sm:h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              link.path ? (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link)}
                  className="px-5 py-2.5 text-lg font-medium text-gray-700 hover:text-navy hover:bg-gray-50 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2.5 text-lg font-medium text-gray-700 hover:text-navy hover:bg-gray-50 transition-all duration-200"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Phone Numbers + CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end border-r border-gray-300 pr-6">
              <a
                href="tel:228110179"
                className="flex items-center gap-2 text-lg font-bold text-navy hover:text-pink transition-colors"
              >
                <Phone size={20} />
                22 811 01 79
              </a>
              <a
                href="tel:228846407"
                className="flex items-center gap-2 text-base font-bold text-gray-600 hover:text-pink transition-colors"
              >
                <Phone size={18} />
                22 884 64 07
              </a>
            </div>
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="px-8 py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors duration-300"
            >
              Umów wizytę
            </Link>
          </div>

          {/* Mobile: Phone + Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:228110179"
              className="flex items-center gap-2 text-navy hover:text-pink font-bold transition-colors"
            >
              <Phone size={22} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleNavClick(link)}
                    className="px-4 py-4 text-lg font-medium text-gray-700 hover:text-navy hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-4 text-lg font-medium text-gray-700 hover:text-navy hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 px-4">
                <a
                  href="tel:228110179"
                  className="flex items-center gap-2 text-lg font-bold text-navy py-2"
                >
                  <Phone size={20} />
                  22 811 01 79
                </a>
                <a
                  href="tel:228846407"
                  className="flex items-center gap-2 text-lg font-bold text-navy py-2"
                >
                  <Phone size={20} />
                  22 884 64 07
                </a>
                <a
                  href="tel:501867335"
                  className="flex items-center gap-2 text-lg font-bold text-navy py-2"
                >
                  <Phone size={20} />
                  501 867 335
                </a>
                <Link
                  to="/"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setTimeout(() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                  className="block text-center mt-4 px-8 py-4 bg-navy text-white font-semibold text-lg hover:bg-navy-dark transition-colors"
                >
                  Umów wizytę
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
