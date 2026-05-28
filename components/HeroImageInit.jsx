'use client'
import { useEffect } from 'react'

export default function HeroImageInit() {
  useEffect(() => {
    const el = document.getElementById('heroBg')
    if (el) el.style.backgroundImage = "url('/hero.png')"
  }, [])
  return null
}
