'use client'
import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Hero.module.css'

function HexLogo({ size = 54 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none">
      <polygon points="27,2 49,14.5 49,39.5 27,52 5,39.5 5,14.5"
        stroke="url(#hwg)" strokeWidth="2.2" fill="rgba(249,115,22,0.1)"/>
      <polygon points="27,11 41,19 41,35 27,43 13,35 13,19"
        stroke="url(#hwg)" strokeWidth="1.2" fill="none" opacity="0.4"/>
      <text x="27" y="33" textAnchor="middle" fill="url(#hwg)"
        fontSize="16" fontWeight="800" fontFamily="'Syne',system-ui,sans-serif">RY</text>
      <defs>
        <linearGradient id="hwg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f97316"/>
          <stop offset="100%" stopColor="#fbbf24"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  const { texts } = useLanguage()

  return (
    <section className={styles.hero}>

      {/* Background image */}
      <div className={styles.bg} id="heroBg" />

      {/* Animated overlay layers */}
      <div className={styles.overlay} />

      {/* Animated scan lines */}
      <div className={styles.scanLines} />

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={styles.particle}
            style={{ '--i': i, '--x': `${10 + (i * 7.3) % 80}%`, '--d': `${i * 0.4}s`, '--s': `${4 + (i % 4)}s` }} />
        ))}
      </div>

      {/* MRI bore glow ring */}
      <div className={styles.boreGlow} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.wordmark}>
          <HexLogo size={56} />
          <div className={styles.wmText}>
            <span className={styles.wmTitle}>
              <span className={styles.wmRad}>RAD</span>
              <span className={styles.wmYar}>YAR</span>
            </span>
            <span className={styles.wmSub}>{texts.heroSub || 'Radiology Education'}</span>
          </div>
        </div>

        <p className={styles.tagline}>{texts.tagline}</p>
        <div className={styles.bar} />
        <p className={styles.desc}>{texts.heroDesc}</p>

        <div className={styles.stats}>
          {[
            { dot: '#f97316', text: texts.stat1 },
            { dot: '#fbbf24', text: texts.stat2 },
            { dot: '#34d399', text: texts.stat3 },
          ].map((s) => (
            <span key={s.text} className={styles.chip}>
              <span className={styles.dot} style={{ background: s.dot }} />
              {s.text}
            </span>
          ))}
        </div>

        <div className={styles.ctas}>
          <Link href="#fachgebiete" className={styles.btnPrimary}>{texts.cta}</Link>
          <Link href="#lernpfade" className={styles.btnGhost}>
            {texts.ctaSub}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3.5 6.5l4.5 4.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
