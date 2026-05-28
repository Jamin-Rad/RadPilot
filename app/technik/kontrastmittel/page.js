// app/technik-physik/kontrastmittel/page.js

import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Kontrastmittel | RadYar',
  description: 'Radiologie Lernplattform – Kontrastmittel',
};

const sections = [
  { id: 'grundlagen', label: 'Grundlagen' },
  { id: 'applikation', label: 'Applikation' },
  { id: 'nebenwirkungen', label: 'Nebenwirkungen' },
  { id: 'pcaki', label: 'PC-AKI' },
  { id: 'hyperthyreose', label: 'Hyperthyreose' },
  { id: 'gastro', label: 'GI-Diagnostik' },
  { id: 'mrt', label: 'MRT-Kontrastmittel' },
  { id: 'leber', label: 'Leberspezifische KM' },
  { id: 'medikation', label: 'Begleitmedikation' },
  { id: 'schwangerschaft', label: 'Schwangerschaft' },
];

export default function Page() {
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
          <div>
            <p className={styles.kicker}>Technik & Physik</p>
            <h1>Kontrastmittel</h1>
            <p className={styles.lead}>
              Übersicht zu Röntgen- und MRT-Kontrastmitteln, Nebenwirkungen,
              Kontraindikationen, PC-AKI, Schwangerschaft sowie klinisch
              relevanten Fallstricken für Dienst und Facharztprüfung.
            </p>
          </div>
        </header>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.quickNav}>
              <h3>Schnellnavigation</h3>

              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={styles.content}>
            <section id="grundlagen" className={styles.section}>
              <h2>Grundlagen der Kontrastmittel</h2>

              <div className={styles.card}>
                <h3>Röntgennegative Kontrastmittel</h3>

                <ul>
                  <li>Keine bzw. geringe Absorption von Röntgenstrahlen</li>
                  <li>Beispiele: Luft, Gas, Wasser</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Röntgenpositive Kontrastmittel</h3>

                <p>
                  Vermehrte Absorption aufgrund höherer Ordnungszahl im
                  Vergleich zu biologischem Gewebe.
                </p>

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
                        Niedrige Osmolarität, bessere Verträglichkeit,
                        intravasaler Standard
                      </td>
                      <td>Imeron®, Ultravist®</td>
                    </tr>

                    <tr>
                      <td>Ionisch</td>
                      <td>
                        Höhere Osmolarität, mehr Nebenwirkungen, enteral
                      </td>
                      <td>Gastrografin®</td>
                    </tr>

                    <tr>
                      <td>Bariumsulfat</td>
                      <td>Wasserunlöslich, GI-Diagnostik</td>
                      <td>Barium</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.noteBox}>
                <strong>Merke:</strong> Alle wasserlöslichen jodhaltigen
                Kontrastmittel basieren auf einem Trijodbenzolring. Das Jod ist
                die eigentliche kontrastgebende Substanz.
              </div>
            </section>

            <section id="applikation" className={styles.section}>
              <h2>Applikation & Ausscheidung</h2>

              <div className={styles.grid}>
                <div className={styles.card}>
                  <h3>Jodkonzentration</h3>

                  <ul>
                    <li>Standard CT: ca. 300 mg/ml</li>
                    <li>CT-Angiographie: 350–375 mg/ml</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <h3>Injektionsrate</h3>

                  <ul>
                    <li>Standard: 3–5 ml/s über 18G</li>
                    <li>Hohe Rate bei LAE-CT und CTA</li>
                    <li>2,5 ml/s nur eingeschränkt sinnvoll</li>
                  </ul>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Typische Kontrastmittelmengen</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Untersuchung</th>
                      <th>Volumen</th>
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
                      <td>CT Abdomen PV-Phase</td>
                      <td>80–120 ml</td>
                    </tr>

                    <tr>
                      <td>Biphasisches Abdomen</td>
                      <td>100–140 ml</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.card}>
                <h3>Ausscheidung</h3>

                <ul>
                  <li>90 % renal</li>
                  <li>Plasmahalbwertszeit: 1–3 Stunden</li>
                  <li>Fast vollständige Elimination nach 24 Stunden</li>
                </ul>
              </div>

              <div className={styles.noteBox}>
                <strong>Merke:</strong> Jodhaltige CT-KM und Gadolinium-KM sind
                inzwischen im Trinkwasser nachweisbar.
              </div>

              <div className={styles.card}>
                <h3>Paravasat-Management</h3>

                <ol>
                  <li>Injektion sofort stoppen</li>
                  <li>Zugang belassen und aspirieren</li>
                  <li>Extremität hochlagern</li>
                  <li>Kühlen</li>
                  <li>Dokumentation und Verlaufskontrolle</li>
                </ol>
              </div>
            </section>

            <section id="nebenwirkungen" className={styles.section}>
              <h2>Nebenwirkungen jodhaltiger KM</h2>

              <div className={styles.card}>
                <h3>Chemotoxische Reaktionen</h3>

                <ul>
                  <li>Wärmegefühl</li>
                  <li>Übelkeit / Erbrechen</li>
                  <li>Arrhythmien</li>
                  <li>Vasovagale Reaktion</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Allergieartige Reaktionen</h3>

                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Grad</th>
                      <th>Symptome</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Grad 1</td>
                      <td>Juckreiz, leichte Urtikaria</td>
                    </tr>

                    <tr>
                      <td>Grad 2</td>
                      <td>Bronchospasmus, Larynxödem</td>
                    </tr>

                    <tr>
                      <td>Grad 3</td>
                      <td>Hypotonie, Schock</td>
                    </tr>

                    <tr>
                      <td>Grad 4</td>
                      <td>Atemstillstand, Herzstillstand</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.noteBox}>
                <strong>Wichtig:</strong> Eine echte „Jodallergie“ existiert
                nicht.
              </div>
            </section>

            <section id="pcaki" className={styles.section}>
              <h2>PC-AKI</h2>

              <div className={styles.card}>
                <h3>Definition</h3>

                <p>
                  Post-Contrast Acute Kidney Injury (PC-AKI) beschreibt einen
                  Kreatininanstieg innerhalb von 48–72 Stunden nach
                  Kontrastmittelgabe.
                </p>
              </div>

              <div className={styles.card}>
                <h3>Risikofaktoren</h3>

                <ul>
                  <li>eGFR &lt; 30 ml/min/1,73 m²</li>
                  <li>Große KM-Mengen</li>
                  <li>Mehrfache KM-Gaben</li>
                  <li>Intensivpatient*innen</li>
                </ul>
              </div>

              <div className={styles.noteBox}>
                <strong>Merke:</strong> Hydrierung ist die wichtigste
                prophylaktische Maßnahme.
              </div>
            </section>

            <section id="hyperthyreose" className={styles.section}>
              <h2>Hyperthyreose & jodhaltige KM</h2>

              <div className={styles.card}>
                <ul>
                  <li>
                    Risiko einer thyreotoxischen Krise bei Basedow oder
                    Autonomie
                  </li>
                  <li>Latente Hyperthyreose → Irenat®</li>
                  <li>
                    Manifeste Hyperthyreose → absolute Kontraindikation
                  </li>
                </ul>
              </div>

              <div className={styles.noteBox}>
                <strong>Prüfungsfalle:</strong> Schilddrüsenkarzinome sind eine
                Kontraindikation wegen möglicher Beeinträchtigung der späteren
                Radiojodtherapie.
              </div>
            </section>

            <section id="gastro" className={styles.section}>
              <h2>Gastrointestinale Diagnostik</h2>

              <div className={styles.grid}>
                <div className={styles.card}>
                  <h3>Bariumsulfat</h3>

                  <ul>
                    <li>Oral oder rektal</li>
                    <li>Nicht resorbierbar</li>
                    <li>Kontraindiziert bei Perforation</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <h3>Gastrografin®</h3>

                  <ul>
                    <li>Wasserlöslich</li>
                    <li>Keine Barium-Peritonitis</li>
                    <li>Hyperosmolar und abführend</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="mrt" className={styles.section}>
              <h2>MRT-Kontrastmittel</h2>

              <div className={styles.card}>
                <h3>Gadolinium</h3>

                <p>
                  Paramagnetisches Metall, das in Chelaten gebunden werden muss.
                </p>

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
                      <td>Weniger stabil, höhere Ablagerungsrate</td>
                    </tr>

                    <tr>
                      <td>Makrozyklisch</td>
                      <td>Hohe Stabilität, heutiger Standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.card}>
                <h3>NSF</h3>

                <ul>
                  <li>Nahezu nur bei GFR &lt; 30</li>
                  <li>V. a. lineare Gadolinium-KM</li>
                  <li>Heute extrem selten</li>
                </ul>
              </div>

              <div className={styles.noteBox}>
                <strong>Merke:</strong> Gadolinium-Retention zeigt sich als
                T1-Hyperintensität im Nucleus dentatus und Globus pallidus.
              </div>
            </section>

            <section id="leber" className={styles.section}>
              <h2>Leberspezifische Kontrastmittel</h2>

              <div className={styles.card}>
                <h3>Primovist®</h3>

                <ul>
                  <li>Einziges hepatozytenspezifisches Gd-KM</li>
                  <li>Ca. 50 % biliäre Ausscheidung</li>
                  <li>Hepatobiliäre Phase nach ca. 20 Minuten</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h3>Indikationen</h3>

                <ul>
                  <li>FNH vs. Adenom</li>
                  <li>HCC in Zirrhose</li>
                  <li>Kleine Metastasen</li>
                  <li>Gallengangsleckagen</li>
                </ul>
              </div>
            </section>

            <section id="medikation" className={styles.section}>
              <h2>Begleitmedikation</h2>

              <div className={styles.card}>
                <h3>Buscopan®</h3>

                <ul>
                  <li>Parasympatholytikum</li>
                  <li>Reduktion von Bewegungsartefakten</li>
                  <li>Kontraindikationen: Glaukom, Ileus, Tachyarrhythmie</li>
                </ul>
              </div>

              <div className={styles.noteBox}>
                <strong>Merke:</strong> Nach Buscopan® besteht für 1–2 Stunden
                Fahruntüchtigkeit.
              </div>
            </section>

            <section id="schwangerschaft" className={styles.section}>
              <h2>Schwangerschaft & Stillzeit</h2>

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

                <p>
                  Eine Stillpause ist in der Regel nicht notwendig. Optional
                  kann für 24 Stunden pausiert werden.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
