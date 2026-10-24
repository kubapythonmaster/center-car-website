import React, { createContext, useContext, useState, useEffect } from 'react'
import defaultContent from '../data/content.json'

const ContentContext = createContext()

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => {
    // Load from localStorage or use default
    const saved = localStorage.getItem('sztangaStudioContent')
    return saved ? JSON.parse(saved) : defaultContent
  })

  const updateContent = (newContent) => {
    setContent(newContent)
    localStorage.setItem('sztangaStudioContent', JSON.stringify(newContent))
  }

  const resetContent = () => {
    setContent(defaultContent)
    localStorage.setItem('sztangaStudioContent', JSON.stringify(defaultContent))
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  )
}
