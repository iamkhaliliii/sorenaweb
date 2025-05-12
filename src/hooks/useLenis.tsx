'use client'

import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      // You can add Lenis options here, e.g.:
      // duration: 1.2,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smoothTouch: true,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}

export default useLenis
