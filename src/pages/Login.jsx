import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, User, AlertCircle } from 'lucide-react'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Simple login (no backend)
  const ADMIN_USERNAME = 'admin'
  const ADMIN_PASSWORD = 'sztanga2024'

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdminLoggedIn', 'true')
      navigate('/admin')
    } else {
      setError('Nieprawidłowa nazwa użytkownika lub hasło')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neon-dark to-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/logo-sztanga.jpg" 
            alt="Sztanga Studio" 
            className="w-24 h-24 mx-auto rounded-lg mb-4 shadow-lg shadow-neon-blue/50"
          />
          <h1 className="text-4xl font-heading font-bold text-neon-blue mb-2">SZTANGA STUDIO</h1>
          <p className="text-gray-400 text-sm">Panel Administracyjny</p>
        </div>

        {/* Login Form */}
        <div className="bg-black/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-neon-blue/30">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-neon-blue" />
            <h2 className="text-2xl font-heading font-bold text-white">Logowanie</h2>
          </div>

          {error && (
            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-heading font-semibold text-white mb-2">
                Nazwa użytkownika
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border-2 border-neon-blue/30 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-500"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-heading font-semibold text-white mb-2">
                Hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border-2 border-neon-blue/30 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-gray-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-heading font-bold hover:shadow-2xl hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-105"
            >
              Zaloguj się
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-neon-blue/20">
            <p className="text-xs text-gray-500 text-center">
              Demo: username: <strong className="text-neon-blue">admin</strong> / password: <strong className="text-neon-blue">sztanga2024</strong>
            </p>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <a href="/" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">
            ← Powrót do strony głównej
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
