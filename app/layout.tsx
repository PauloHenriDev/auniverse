'use client'

import { useEffect, useState } from 'react'
import Header from './components/Header/page'
import './globals.css'

export const metadata = {
  title: 'Auniverse',
  description: 'Universo Alternativo',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    const initialTheme = storedTheme || 'dark'
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <html lang="pt-BR">
      <body className="transition-colors duration-300 bg-white text-black dark:bg-[#1B1A21] dark:text-black">
        <Header toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  )
}


{/* <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />
</head> */}