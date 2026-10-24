import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { LogOut, Save, RotateCcw, Home, FileText, Briefcase, Phone } from 'lucide-react'

const AdminPanel = () => {
  const navigate = useNavigate()
  const { content, updateContent, resetContent } = useContent()
  const [editedContent, setEditedContent] = useState(content)
  const [activeTab, setActiveTab] = useState('hero')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    // Check if logged in (localStorage)
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn')
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [navigate])

  // Update editedContent when content changes
  useEffect(() => {
    if (content) {
      setEditedContent(content)
    }
  }, [content])

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn')
    navigate('/login')
  }

  const handleSave = () => {
    updateContent(editedContent)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleReset = () => {
    if (window.confirm('Czy na pewno chcesz przywrócić domyślną treść?')) {
      resetContent()
    }
  }

  const updateField = (section, field, value) => {
    setEditedContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const updateArrayField = (section, field, index, value) => {
    setEditedContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => i === index ? value : item)
      }
    }))
  }

  const updateServiceItem = (index, field, value) => {
    setEditedContent(prev => ({
      ...prev,
      services: {
        ...prev.services,
        items: prev.services.items.map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      }
    }))
  }

  const tabs = [
    { id: 'hero', label: 'Hero', icon: Home },
    { id: 'about', label: 'O Firmie', icon: FileText },
    { id: 'services', label: 'Usługi', icon: Briefcase },
    { id: 'contact', label: 'Kontakt', icon: Phone }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#C9A959]">PRESTIGE BUD</h1>
            <span className="text-sm text-white/60">/ Panel Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              className="text-sm text-white/80 hover:text-[#C9A959] transition-colors"
            >
              Zobacz stronę →
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors text-sm font-semibold"
            >
              <LogOut size={16} />
              Wyloguj
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-black">Edycja Treści Strony</h2>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-green-600 font-semibold text-sm">✓ Zapisano!</span>
            )}
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 transition-colors"
            >
              <RotateCcw size={18} />
              Reset
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 bg-[#00d4ff] text-black font-bold hover:bg-[#00ffff] transition-colors"
            >
              <Save size={18} />
              Zapisz Zmiany
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-300">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black border-b-4 border-[#C9A959]'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content Editor */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* HERO TAB */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Sekcja Hero</h3>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Tytuł (H1)</label>
                <textarea
                  value={editedContent.hero.title}
                  onChange={(e) => updateField('hero', 'title', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  rows="2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Podtytuł</label>
                <textarea
                  value={editedContent.hero.subtitle}
                  onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Bullet Point 1</label>
                <input
                  type="text"
                  value={editedContent.hero.bullets[0]}
                  onChange={(e) => updateArrayField('hero', 'bullets', 0, e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Bullet Point 2</label>
                <input
                  type="text"
                  value={editedContent.hero.bullets[1]}
                  onChange={(e) => updateArrayField('hero', 'bullets', 1, e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Bullet Point 3</label>
                <input
                  type="text"
                  value={editedContent.hero.bullets[2]}
                  onChange={(e) => updateArrayField('hero', 'bullets', 2, e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Tekst przycisku CTA</label>
                <input
                  type="text"
                  value={editedContent.hero.ctaText}
                  onChange={(e) => updateField('hero', 'ctaText', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* ABOUT TAB */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Sekcja O Firmie</h3>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Tytuł</label>
                <input
                  type="text"
                  value={editedContent.about.title}
                  onChange={(e) => updateField('about', 'title', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Podtytuł</label>
                <input
                  type="text"
                  value={editedContent.about.subtitle}
                  onChange={(e) => updateField('about', 'subtitle', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Nagłówek 1</label>
                <input
                  type="text"
                  value={editedContent.about.heading1}
                  onChange={(e) => updateField('about', 'heading1', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Paragraf 1</label>
                <textarea
                  value={editedContent.about.paragraph1}
                  onChange={(e) => updateField('about', 'paragraph1', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Nagłówek 2</label>
                <input
                  type="text"
                  value={editedContent.about.heading2}
                  onChange={(e) => updateField('about', 'heading2', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-black mb-2">Punkty (bullets)</label>
                {editedContent.about.bullets.map((bullet, index) => (
                  <input
                    key={index}
                    type="text"
                    value={bullet}
                    onChange={(e) => updateArrayField('about', 'bullets', index, e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                    placeholder={`Punkt ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Sekcja Usługi</h3>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Tytuł sekcji</label>
                <input
                  type="text"
                  value={editedContent.services.title}
                  onChange={(e) => updateField('services', 'title', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Podtytuł</label>
                <textarea
                  value={editedContent.services.subtitle}
                  onChange={(e) => updateField('services', 'subtitle', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  rows="2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Opis</label>
                <textarea
                  value={editedContent.services.description}
                  onChange={(e) => updateField('services', 'description', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  rows="2"
                />
              </div>

              <div className="border-t-4 border-[#C9A959] pt-6 mt-8">
                <h4 className="text-xl font-bold text-black mb-6">Usługi (6 kart)</h4>
                <div className="space-y-8">
                  {editedContent.services.items.map((service, index) => (
                    <div key={index} className="p-6 bg-gray-50 border-l-4 border-[#C9A959]">
                      <h5 className="font-bold text-black mb-4">Usługa {index + 1}</h5>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-black mb-2">Tytuł</label>
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) => updateServiceItem(index, 'title', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-black mb-2">Opis</label>
                          <textarea
                            value={service.description}
                            onChange={(e) => updateServiceItem(index, 'description', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                            rows="3"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-black mb-2">Keywords SEO</label>
                          <input
                            type="text"
                            value={service.keywords}
                            onChange={(e) => updateServiceItem(index, 'keywords', e.target.value)}
                            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">Sekcja Kontakt</h3>
              
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Tytuł</label>
                <input
                  type="text"
                  value={editedContent.contact.title}
                  onChange={(e) => updateField('contact', 'title', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Podtytuł</label>
                <textarea
                  value={editedContent.contact.subtitle}
                  onChange={(e) => updateField('contact', 'subtitle', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  rows="2"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Telefon</label>
                  <input
                    type="text"
                    value={editedContent.contact.phone}
                    onChange={(e) => updateField('contact', 'phone', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email</label>
                  <input
                    type="email"
                    value={editedContent.contact.email}
                    onChange={(e) => updateField('contact', 'email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Adres</label>
                <input
                  type="text"
                  value={editedContent.contact.address}
                  onChange={(e) => updateField('contact', 'address', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Miasto</label>
                <input
                  type="text"
                  value={editedContent.contact.city}
                  onChange={(e) => updateField('contact', 'city', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Godziny otwarcia</label>
                <textarea
                  value={editedContent.contact.hours}
                  onChange={(e) => updateField('contact', 'hours', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-[#C9A959] focus:outline-none"
                  rows="2"
                />
              </div>
            </div>
          )}

        </div>

        {/* Save Button Bottom */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-8 py-3 bg-[#00d4ff] text-black font-bold hover:bg-[#00ffff] transition-colors text-lg"
          >
            <Save size={20} />
            Zapisz Wszystkie Zmiany
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
