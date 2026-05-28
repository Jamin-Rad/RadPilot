'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'
import styles from './Fachgebiete.module.css'

// Sprite positions from 532x364 image (4x2 grid, each cell 133x182px)
const FACH_DATA = [
  {
    key: 'Neuroradiologie',
    col: 0, row: 0,
    color: '#7c3aed',
    bg: 'linear-gradient(135deg,#1a1040,#2d1b69)',
    available: false,
    description: 'Gehirn, Rückenmark, Schädel & Wirbelsäule',
    topics: ['Schlaganfall', 'Tumoren', 'Multiple Sklerose', 'Trauma', 'Gefäße'],
  },
  {
    key: 'Thorax',
    col: 1, row: 0,
    color: '#0ea5e9',
    bg: 'linear-gradient(135deg,#0c2340,#0c3460)',
    available: false,
    description: 'Lunge, Herz, Mediastinum & Pleura',
    topics: ['Pneumonie', 'Lungenembolie', 'Tumor', 'Herzinsuffizienz', 'Pneumothorax'],
  },
  {
    key: 'Abdomen',
    col: 2, row: 0,
    color: '#10b981',
    bg: 'linear-gradient(135deg,#0d2818,#14401e)',
    available: false,
    description: 'Leber, Milz, Niere, Pankreas & GI-Trakt',
    topics: ['Leberzirrhose', 'Pankreatitis', 'Nierensteine', 'Appendizitis', 'Tumoren'],
  },
  {
    key: 'Muskuloskelettales',
    col: 3, row: 0,
    color: '#d97706',
    bg: 'linear-gradient(135deg,#2a1a00,#3d2800)',
    available: false,
    description: 'Knochen, Gelenke, Muskulatur & Weichteile',
    topics: ['Frakturen', 'Arthrose', 'Tumoren', 'Osteochondrose', 'Sportverletzungen'],
  },
  {
    key: 'Becken',
    col: 0, row: 1,
    color: '#e11d48',
    bg: 'linear-gradient(135deg,#2a0a10,#3d1020)',
    available: false,
    description: 'Hüfte, Blase, Prostata & gynäkologische Organe',
    topics: ['Prostatakarzinom', 'Zervixkarzinom', 'Hüftarthrose', 'Blasentumoren'],
  },
  {
    key: 'Brust',
    col: 1, row: 1,
    color: '#db2777',
    bg: 'linear-gradient(135deg,#2a0a20,#420c2e)',
    available: false,
    description: 'Mammographie, Sonographie & MRT der Brust',
    topics: ['Mammakarzinom', 'Mastopathie', 'Fibroadenom', 'BIRADS-Klassifikation'],
  },
  {
    key: 'Hals',
    col: 2, row: 1,
    color: '#2563eb',
    bg: 'linear-gradient(135deg,#0c1f40,#142d5a)',
    available: false,
    description: 'Schilddrüse, Lymphknoten, Larynx & Pharynx',
    topics: ['Schilddrüsentumoren', 'Lymphome', 'Larynxkarzinom', 'Abszesse'],
  },
  {
    key: 'Technik & Physik',
    col: 3, row: 1,
    color: '#059669',
    bg: 'linear-gradient(135deg,#0a2030,#0a3040)',
    available: true,
    description: 'Physikalische Grundlagen · Kontrastmittel · Protokolle',
    topics: ['Kontrastmittel', 'MRT-Physik', 'CT-Technik', 'Strahlenschutz', 'Protokolle'],
    links: [
      { label: 'Kontrastmittel', href: '/technik/kontrastmittel', ready: true },
      { label: 'MRT-Physik', href: '/technik/mrt', ready: false },
      { label: 'CT-Technik', href: '/technik/ct', ready: false },
      { label: 'Strahlenschutz', href: '/technik/strahlenschutz', ready: false },
    ],
  },
]

const CW = 133  // sprite cell width
const CH = 182  // sprite cell height

export default function Fachgebiete() {
  const { texts } = useLanguage()
  const [selected, setSelected] = useState(null)

  const fach = selected ? FACH_DATA.find(f => f.key === selected) : null

  return (
    <section className={styles.section} id="fachgebiete">
      <div className="sLabel">{texts.section2Label}</div>
      <h2 className="sTitle">{texts.section2Title}</h2>
      <p className="sSub">{texts.section2Sub}</p>

      <div className={styles.grid}>
        {FACH_DATA.map((f) => (
          <div
            key={f.key}
            className={styles.card}
            style={{ background: f.bg }}
            onClick={() => setSelected(f.key)}
          >
            {/* Illustration from sprite */}
            <div className={styles.visual}>
              <div
                className={styles.sprite}
                style={{
                  backgroundPosition: `-${f.col * CW}px -${f.row * CH}px`,
                }}
              />
              {f.available && <span className={styles.liveBadge}>✓ Verfügbar</span>}
            </div>

            {/* Card body */}
            <div className={styles.body}>
              <div className={styles.name} style={{ color: f.color }}>
                {texts.fachNames[f.key]}
              </div>
              <div className={styles.status}>
                {f.available ? 'Inhalt verfügbar' : texts.fachStatus}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MODAL ── */}
      {selected && fach && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>

            <div className={styles.modalHeader} style={{ background: fach.bg }}>
              <div className={styles.modalSprite}
                style={{ backgroundPosition: `-${fach.col * CW}px -${fach.row * CH}px` }} />
              <div className={styles.modalHeaderText}>
                <div className={styles.modalTitle} style={{ color: fach.color }}>
                  {texts.fachNames[fach.key]}
                </div>
                <div className={styles.modalDesc}>{fach.description}</div>
              </div>
              <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
            </div>

            <div className={styles.modalBody}>
              {fach.available ? (
                <>
                  <div className={styles.modalSectionLabel}>Verfügbare Inhalte</div>
                  <div className={styles.linkGrid}>
                    {fach.links?.map(link => (
                      link.ready
                        ? <Link key={link.label} href={link.href} className={styles.linkCard}
                            onClick={() => setSelected(null)}>
                            <span className={styles.linkIcon}>📄</span>
                            <div>
                              <div className={styles.linkName}>{link.label}</div>
                              <div className={styles.linkMeta}>Verfügbar</div>
                            </div>
                            <span className={styles.linkArrow}>→</span>
                          </Link>
                        : <div key={link.label} className={`${styles.linkCard} ${styles.linkSoon}`}>
                            <span className={styles.linkIcon}>🔒</span>
                            <div>
                              <div className={styles.linkName}>{link.label}</div>
                              <div className={styles.linkMeta}>In Vorbereitung</div>
                            </div>
                          </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.modalSectionLabel}>Themen</div>
                  <div className={styles.topicChips}>
                    {fach.topics.map(t => (
                      <span key={t} className={styles.topicChip}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.comingSoon}>
                    <span>🚧</span>
                    <span>Inhalte werden vorbereitet – bald verfügbar!</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
