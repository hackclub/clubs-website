import { useState, useEffect } from 'react'

const usePrefersMotion = (): boolean => {
  const [prefersMotion, setPrefersMotion] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)')
      setPrefersMotion(mediaQuery.matches)
      
      const handleChange = () => setPrefersMotion(mediaQuery.matches)
      mediaQuery.addEventListener('change', handleChange)
      
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersMotion
}

export default usePrefersMotion

