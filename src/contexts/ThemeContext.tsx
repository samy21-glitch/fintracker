import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  switchable?: boolean
}

const STORAGE_KEY = 'fintracker-theme'

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
      if (stored === 'dark' || stored === 'light') return stored
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    if (switchable) {
      localStorage.setItem(STORAGE_KEY, theme)
    }
  }, [theme, switchable])

  function setTheme(next: Theme) {
    if (switchable) {
      setThemeState(next)
    }
  }

  function toggleTheme() {
    if (switchable) {
      setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'))
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
