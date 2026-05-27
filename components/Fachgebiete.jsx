import styles from './Fachgebiete.module.css'

// SVG icon components for custom anatomical icons
const AbdomenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 4C6 4 4 5.5 4 8.5C4 12 5 16 7.5 18.5C9 20 11 20.5 13 19.5C15 18.5 16.5 16.5 17 14C17.5 11.5 17 9 15.5 7.5C14 6 12 5.5 10.5 6" />
    <path d="M10.5 6C10 5 9.5 4.2 8 4" />
    <path d="M17 14C17.5 13 18.5 12.5 19 13" />
  </svg>
)

const HalsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M9.5 8.5h5M9.5 12h5M9.5 15.5h5" />
    <ellipse cx="8" cy="13" rx="3.2" ry="5" strokeOpacity="0.65" />
    <ellipse cx="16" cy="13" rx="3.2" ry="5" strokeOpacity="0.65" />
  </svg>
)

const BrustIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="3" x2="19" y2="21" />
    <path d="M19 6C17 6 13.5 7.5 10.5 10.5C8.5 12.5 7.5 15 8.5 17.5C9.5 19.5 13 20.5 16 20.5C18 20.5 19 20 19 19" />
    <circle cx="8" cy="14" r="1.3" fill="#f472b6" stroke="none" />
  </svg>
)

const BeckenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9C2 6.5 3.5 4 6 4.5C7.5 5 7.5 7 7.5 9" />
    <path d="M21 9C22 6.5 20.5 4 18 4.5C16.5 5 16.5 7 16.5 9" />
    <path d="M7.5 9C7.5 9 8 15 10 17C11 18 12 18.5 12 20" />
    <path d="M16.5 9C16.5 9 16 15 14 17C13 18 12 18.5 12 20" />
    <path d="M7.5 9C10 10.5 14 10.5 16.5 9" />
  </svg>
)

const fachgebiete = [
  { name: 'Neuroradiologie', bg: 'rgba(139,92,246,0.18)', icon: '🧠' },
  { name: 'Thorax',          bg: 'rgba(56,189,248,0.18)',  icon: '🫁' },
  { name: 'Abdomen',         bg: 'rgba(52,211,153,0.18)',  icon: <AbdomenIcon /> },
  { name: 'Muskuloskelettales', bg: 'rgba(251,191,36,0.18)', icon: '🦴' },
  { name: 'Hals',            bg: 'rgba(251,146,60,0.18)',  icon: <HalsIcon /> },
  { name: 'Brust',           bg: 'rgba(244,114,182,0.18)', icon: <BrustIcon /> },
  { name: 'Becken',          bg: 'rgba(99,102,241,0.18)',  icon: <BeckenIcon /> },
  { name: 'Technik & Physik',bg: 'rgba(167,139,250,0.18)', icon: '⚛️' },
]

export default function Fachgebiete() {
  return (
    <section className={styles.section} id="fachgebiete">
      <div className="sLabel">Fachgebiete</div>
      <h2 className="sTitle">Alle Spezialgebiete<br />im Überblick</h2>
      <p className="sSub">Wähle ein Fachgebiet und starte direkt mit Lernmodul, Fällen und MCQs.</p>

      <div className={styles.grid}>
        {fachgebiete.map((f) => (
          <div key={f.name} className={styles.card}>
            <div className={styles.iconWrap} style={{ background: f.bg }}>
              {typeof f.icon === 'string'
                ? <span>{f.icon}</span>
                : f.icon
              }
            </div>
            <div>
              <div className={styles.name}>{f.name}</div>
              <div className={`${styles.status} ${styles.soon}`}>In Vorbereitung</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
