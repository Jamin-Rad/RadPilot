# app/technik-physik/kontrastmittel/page.js

```jsx
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Kontrastmittel | RadYar',
  description: 'Interaktive Lernseite zu Kontrastmitteln',
};

const sections = [
  {
    id: 'grundlagen',
    title: 'Grundlagen',
  },
  {
    id: 'applikation',
    title: 'Applikation & Ausscheidung',
  },
  {
    id: 'nebenwirkungen',
    title: 'Nebenwirkungen',
  },
  {
    id: 'pcaki',
    title: 'PC-AKI',
  },
  {
    id: 'hyperthyreose',
    title: 'Hyperthyreose',
  },
  {
    id: 'gastro',
    title: 'GI-Diagnostik',
  },
  {
    id: 'mrt',
    title: 'MRT-Kontrastmittel',
  },
  {
    id: 'schwangerschaft',
    title: 'Schwangerschaft & Stillzeit',
  },
];

export default function KontrastmittelPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link href="/">RadYar</Link>
          <span>›</span>
          <Link href="/technik-physik">Technik & Physik</Link>
          <span>›</span>
          <span>Kontrastmittel</span>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroBadge}>Radiologie · Technik & Physik</div>

          <h1>Kontrastmittel</h1>

          <p className={styles.heroText}>
            Interaktive Übersicht zu jodhaltigen und MRT-Kontrastmitteln für
            Dienst, Alltag und Facharztprüfung.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <span>Kapitel</span>
              <strong>8</strong>
            </div>

            <div className={styles.statCard}>
              <span>Prüfungsrelevanz</span>
              <strong>Sehr hoch</strong>
            </div>

            <div className={styles.statCard}>
              <span>Level</span>
              <strong>Dienstwissen</strong>
            </div>
          </div>
        </header>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.quickNav}>
              <h3>Schnellnavigation</h3>

              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={styles.content}>
            <section id="grundlagen" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>01</span>
                <h2>Grundlagen</h2>
              </div>

              <div className={styles.card}>
                <h3>Röntgennegative Kontrastmittel</h3>

                <ul>
                  <li>Luft / Gas / CO₂</li>
                  <li>Wasser</li>
                  <li>Kaum Absorption von Röntgenstrahlen</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Röntgenpositive Kontrastmittel</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Typ</th>
                      <th>Eigenschaften</th>
                      <th>Beispiele</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Nicht-ionisch</td>
                      <td>
                        Niedrige Osmolarität, intravasaler Standard
                      </td>
                      <td>Imeron®, Ultravist®</td>
                    </tr>

                    <tr>
                      <td>Ionisch</td>
                      <td>Höhere Osmolarität, enterale Anwendung</td>
                      <td>Gastrografin®</td>
                    </tr>

                    <tr>
                      <td>Barium</td>
                      <td>GI-Diagnostik</td>
                      <td>Bariumsulfat</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.noteBox}>
                <strong>Merke:</strong> Alle wasserlöslichen jodhaltigen
                Kontrastmittel basieren auf einem Trijodbenzolring.
              </div>

              <div className={styles.quizCard}>
                <div>
                  <span className={styles.quizLabel}>Prüfungsfrage</span>
                  <h4>Warum ist Jod kontrastgebend?</h4>
                </div>

                <p>
                  Wegen der hohen Ordnungszahl (Z = 53) und der daraus
                  resultierenden stärkeren Absorption von Röntgenstrahlen.
                </p>
              </div>
            </section>

            <section id="applikation" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>02</span>
                <h2>Applikation & Ausscheidung</h2>
              </div>

              <div className={styles.grid}>
                <div className={styles.card}>
                  <h3>Jodkonzentration</h3>

                  <ul>
                    <li>Standard CT: ~300 mg/ml</li>
                    <li>CTA: 350–375 mg/ml</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <h3>Injektionsrate</h3>

                  <ul>
                    <li>3–5 ml/s über 18G</li>
                    <li>Hohe Rate bei LAE-CT</li>
                    <li>22G möglichst vermeiden</li>
                  </ul>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Typische Volumina</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Untersuchung</th>
                      <th>Menge</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>LAE-CT</td>
                      <td>50–70 ml</td>
                    </tr>

                    <tr>
                      <td>CTA Aorta</td>
                      <td>60–80 ml</td>
                    </tr>

                    <tr>
                      <td>Abdomen portalvenös</td>
                      <td>80–120 ml</td>
                    </tr>

                    <tr>
                      <td>Biphasisches Abdomen</td>
                      <td>100–140 ml</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.noteBox}>
                <strong>Merke:</strong> Je schneller maximale arterielle
                Kontrastierung erreicht werden soll, desto kleiner ist meist das
                benötigte Volumen.
              </div>
            </section>

            <section id="nebenwirkungen" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>03</span>
                <h2>Nebenwirkungen</h2>
              </div>

              <div className={styles.card}>
                <h3>Chemotoxische Reaktionen</h3>

                <div className={styles.tagRow}>
                  <span>Wärmegefühl</span>
                  <span>Übelkeit</span>
                  <span>Erbrechen</span>
                  <span>Arrhythmien</span>
                  <span>Krampfanfall</span>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Allergieartige Reaktionen</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Grad</th>
                      <th>Befunde</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Juckreiz, leichte Urtikaria</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Bronchospasmus, Larynxödem</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Hypotonie, Schock</td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Herz- oder Atemstillstand</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.noteDanger}>
                <strong>Wichtig:</strong> Eine echte „Jodallergie“ existiert
                nicht.
              </div>
            </section>

            <section id="pcaki" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>04</span>
                <h2>PC-AKI</h2>
              </div>

              <div className={styles.card}>
                <h3>Definition</h3>

                <p>
                  Kreatininanstieg innerhalb von 48–72 Stunden nach
                  intravaskulärer Kontrastmittelgabe.
                </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.card}>
                  <h3>Risikofaktoren</h3>

                  <ul>
                    <li>eGFR &lt; 30</li>
                    <li>Große KM-Mengen</li>
                    <li>Mehrfache Gaben</li>
                    <li>First-Pass-Effekt</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <h3>Prophylaxe</h3>

                  <ul>
                    <li>Hydrierung</li>
                    <li>NaCl 0,9 %</li>
                    <li>Keine ACC-Empfehlung mehr</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="hyperthyreose" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>05</span>
                <h2>Hyperthyreose</h2>
              </div>

              <div className={styles.card}>
                <ul>
                  <li>Gefahr der thyreotoxischen Krise</li>
                  <li>Besonders bei Basedow und Autonomie</li>
                  <li>Latente Hyperthyreose → Irenat®</li>
                  <li>Manifeste Hyperthyreose → Kontraindikation</li>
                </ul>
              </div>
            </section>

            <section id="gastro" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>06</span>
                <h2>Gastrointestinale Diagnostik</h2>
              </div>

              <div className={styles.grid}>
                <div className={styles.card}>
                  <h3>Bariumsulfat</h3>

                  <ul>
                    <li>Doppelkontrast möglich</li>
                    <li>Nicht resorbierbar</li>
                    <li>Kontraindiziert bei Perforation</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <h3>Gastrografin®</h3>

                  <ul>
                    <li>Wasserlöslich</li>
                    <li>Hyperosmolar</li>
                    <li>Keine Barium-Peritonitis</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="mrt" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>07</span>
                <h2>MRT-Kontrastmittel</h2>
              </div>

              <div className={styles.card}>
                <h3>Lineare vs. makrozyklische Chelate</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Typ</th>
                      <th>Eigenschaft</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Linear</td>
                      <td>Weniger stabil</td>
                    </tr>

                    <tr>
                      <td>Makrozyklisch</td>
                      <td>Hohe Stabilität, heutiger Standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.noteBox}>
                <strong>Prüfungsfalle:</strong> Primovist® ist das einzige
                hepatozytenspezifische Gadolinium-KM.
              </div>
            </section>

            <section id="schwangerschaft" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span>08</span>
                <h2>Schwangerschaft & Stillzeit</h2>
              </div>

              <div className={styles.card}>
                <h3>Schwangerschaft</h3>

                <ul>
                  <li>Strenge Indikationsstellung</li>
                  <li>Jodhaltige KM sind plazentagängig</li>
                  <li>Gadolinium möglichst vermeiden</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Stillzeit</h3>

                <ul>
                  <li>Stillpause meist nicht nötig</li>
                  <li>Optional 24 Stunden pausieren</li>
                  <li>Sehr geringe orale Bioverfügbarkeit beim Säugling</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
```

---

# app/technik-physik/kontrastmittel/page.module.css

```css
.page {
  min-height: 100vh;
  background: #060708;
  color: #f0ece8;
  padding-top: 64px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 120px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
  color: rgba(240, 225, 200, 0.65);
  font-size: 0.92rem;
}

.breadcrumb a {
  text-decoration: none;
  color: rgba(240, 225, 200, 0.65);
}

.breadcrumb a:hover {
  color: #f97316;
}

.hero {
  margin-bottom: 48px;
}

.heroBadge {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(249, 115, 22, 0.08);
  border: 1px solid rgba(249, 115, 22, 0.12);
  color: #f97316;
  margin-bottom: 22px;
}

.hero h1 {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  margin-bottom: 20px;
}

.heroText {
  max-width: 820px;
  line-height: 1.8;
  color: rgba(240, 225, 200, 0.7);
  font-size: 1.08rem;
}

.heroStats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 30px;
}

.statCard {
  min-width: 180px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(249, 115, 22, 0.04);
  border: 1px solid rgba(249, 115, 22, 0.12);
}

.statCard span {
  display: block;
  margin-bottom: 8px;
  color: rgba(240, 225, 200, 0.6);
}

.statCard strong {
  color: #fbbf24;
  font-size: 1.1rem;
}

.layout {
  display: grid;
  grid-template-columns: 290px 1fr;
  gap: 44px;
}

.quickNav {
  position: sticky;
  top: 90px;
  padding: 24px;
  border-radius: 14px;
  background: rgba(249, 115, 22, 0.04);
  border: 1px solid rgba(249, 115, 22, 0.12);
}

.quickNav h3 {
  margin-bottom: 20px;
  color: #fbbf24;
}

.quickNav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.quickNav li + li {
  margin-top: 14px;
}

.quickNav a {
  color: rgba(240, 225, 200, 0.72);
  text-decoration: none;
  transition: 0.2s ease;
}

.quickNav a:hover {
  color: #f97316;
}

.section + .section {
  margin-top: 80px;
}

.sectionHeader {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 26px;
}

.sectionHeader span {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(249, 115, 22, 0.08);
  color: #f97316;
  font-weight: 700;
}

.sectionHeader h2 {
  font-size: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}

.card {
  background: rgba(249, 115, 22, 0.04);
  border: 1px solid rgba(249, 115, 22, 0.12);
  border-radius: 14px;
  padding: 26px;
  margin-bottom: 22px;
}

.card h3 {
  margin-bottom: 16px;
  color: #fbbf24;
}

.card p {
  line-height: 1.8;
  color: rgba(240, 225, 200, 0.78);
}

.card ul {
  padding-left: 20px;
  line-height: 1.9;
  color: rgba(240, 225, 200, 0.78);
}

.noteBox {
  border-left: 3px solid #f97316;
  background: rgba(249, 115, 22, 0.05);
  border-radius: 0 12px 12px 0;
  padding: 20px;
  margin: 22px 0;
  line-height: 1.8;
}

.noteDanger {
  border-left: 3px solid #ef4444;
  background: rgba(239, 68, 68, 0.08);
  border-radius: 0 12px 12px 0;
  padding: 20px;
  margin-top: 22px;
  line-height: 1.8;
}

.quizCard {
  margin-top: 24px;
  padding: 24px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    rgba(249, 115, 22, 0.12),
    rgba(251, 191, 36, 0.08)
  );
  border: 1px solid rgba(249, 115, 22, 0.18);
}

.quizLabel {
  color: #f97316;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
}

.quizCard h4 {
  margin: 12px 0;
  font-size: 1.15rem;
}

.quizCard p {
  color: rgba(240, 225, 200, 0.8);
  line-height: 1.7;
}

.tagRow {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tagRow span {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(249, 115, 22, 0.08);
  border: 1px solid rgba(249, 115, 22, 0.14);
  color: rgba(240, 225, 200, 0.88);
  font-size: 0.92rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
  margin-top: 12px;
}

.table thead {
  background: rgba(249, 115, 22, 0.12);
}

.table th {
  text-align: left;
  padding: 14px 16px;
  color: #f97316;
  border-bottom: 1px solid rgba(249, 115, 22, 0.12);
}

.table td {
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(240, 225, 200, 0.82);
  vertical-align: top;
}

.table tr:last-child td {
  border-bottom: none;
}

@media (max-width: 1100px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .quickNav {
    position: relative;
    top: 0;
  }
}

@media (max-width: 700px) {
  .hero h1 {
    font-size: 2.8rem;
  }

  .sectionHeader {
    align-items: flex-start;
  }

  .sectionHeader h2 {
    font-size: 1.6rem;
  }

  .container {
    padding: 28px 18px 90px;
  }
}
```
