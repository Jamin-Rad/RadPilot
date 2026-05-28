import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Kontrastmittel – Technik & Physik | RadYar',
}

// ── Reusable layout components ─────────────────────────────────────────────

function Section({ id, title, children }) {
  return (
    <section className={styles.section} id={id}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  )
}

function Sub({ title, children }) {
  return (
    <div className={styles.sub}>
      <h3 className={styles.subTitle}>{title}</h3>
      {children}
    </div>
  )
}

function Card({ children, variant = 'default' }) {
  return <div className={`${styles.card} ${styles[variant]}`}>{children}</div>
}

function Merke({ children }) {
  return (
    <div className={styles.merke}>
      <span className={styles.merkeLabel}>Merke</span>
      {children}
    </div>
  )
}

function InfoBox({ icon = 'ℹ️', label, children, variant = 'info' }) {
  return (
    <div className={`${styles.box} ${styles[variant]}`}>
      {label && <div className={styles.boxLabel}>{icon} {label}</div>}
      <div className={styles.boxBody}>{children}</div>
    </div>
  )
}

function GradCard({ grad, label, color, items }) {
  return (
    <div className={styles.gradCard} style={{ borderColor: color }}>
      <div className={styles.gradHead} style={{ color }}>
        <span className={styles.gradNum}>{grad}</span>
        <span className={styles.gradLabel}>{label}</span>
      </div>
      <ul className={styles.gradList}>
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Pill({ children, color = '#f97316' }) {
  return (
    <span className={styles.pill} style={{ borderColor: color, color }}>
      {children}
    </span>
  )
}

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function KontrastmittelPage() {
  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadLink}>RadYar</Link>
            <span className={styles.breadSep}>›</span>
            <Link href="/#fachgebiete" className={styles.breadLink}>Technik & Physik</Link>
            <span className={styles.breadSep}>›</span>
            <span className={styles.breadCurrent}>Kontrastmittel</span>
          </div>
          <h1 className={styles.pageTitle}>Kontrastmittel</h1>
          <p className={styles.pageDesc}>
            Röntgen- und MRT-Kontrastmittel · Applikation · Nebenwirkungen · Nierenschutz · Schwangerschaft
          </p>
          <div className={styles.tagRow}>
            <Pill>Röntgen-KM</Pill>
            <Pill color="#38bdf8">MRT-KM</Pill>
            <Pill color="#34d399">Gadolinium</Pill>
            <Pill color="#a78bfa">Nebenwirkungen</Pill>
          </div>
        </div>
      </div>

      {/* Quick-Nav */}
      <div className={styles.quickNav}>
        <div className={styles.quickNavInner}>
          {[
            ['#roentgen', 'Röntgen-KM'],
            ['#applikation', 'Applikation'],
              ['#paravasat', 'Paravasat'],
            ['#nebenwirkungen', 'Nebenwirkungen'],
            ['#gi', 'GI-Diagnostik'],
            ['#mrt', 'MRT-KM'],
            ['#schwangerschaft', 'Schwangerschaft'],
          ].map(([href, label]) => (
            <a key={href} href={href} className={styles.qLink}>{label}</a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>

        {/* ── 1. RÖNTGEN-KM ─────────────────────────────────────────── */}
        <Section id="roentgen" title="Röntgen-Kontrastmittel">

          <div className={styles.twoCol}>
            <Card variant="dark">
              <h4 className={styles.cardTitle} style={{ color: '#94a3b8' }}>
                ⬛ Röntgennegative KM
              </h4>
              <p className={styles.cardText}>
                Geringe/fehlende Absorptionsfähigkeit → ungehinderte Durchlässigkeit der Röntgenstrahlung.
              </p>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Wasser</span>
                <span className={styles.chip}>Luft</span>
                <span className={styles.chip}>CO₂</span>
              </div>
            </Card>

            <Card variant="dark">
              <h4 className={styles.cardTitle} style={{ color: '#f97316' }}>
                ⬜ Röntgenpositive KM
              </h4>
              <p className={styles.cardText}>
                Vermehrte Absorption der Röntgenstrahlen durch <strong>höhere Ordnungszahl</strong> im Vergleich zum biologischen Gewebe.
              </p>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Jodhaltig</span>
                <span className={styles.chip}>Bariumsulfat</span>
              </div>
            </Card>
          </div>

          <Sub title="Wasserlösliche Kontrastmittel">
            <p className={styles.text}>
              Alle wasserlöslichen jodhaltigen KM besitzen als gemeinsame Grundstruktur einen <strong>Trijodbenzolring</strong>.
              Das Jod (<strong>Ordnungszahl Z = 53</strong>) ist die röntgenkontrastgebende Substanz.
            </p>

            <Table
              headers={['', 'Nicht-ionische KM', 'Ionische KM']}
              rows={[
                ['Beispiele', 'Imeron®, Ultravist®', 'Gastrografin®'],
                ['Ladung', 'Keine elektrische Ladung', 'Elektrisch geladen'],
                ['Osmolarität', 'Niedrig', 'Hoch'],
                ['Verträglichkeit', 'Besser', 'Schlechter'],
                ['Anwendung', 'Standard intravasale Anwendung', 'Enterale Anwendung'],
                ['Zulassung i.v.', '✅ Ja', '❌ Nicht mehr zugelassen'],
              ]}
            />
          </Sub>

          <Sub title="Wasserunlösliche Kontrastmittel">
            <div className={styles.twoCol}>
              <Card>
                <h4 className={styles.cardTitle}>Bariumsulfat</h4>
                <p className={styles.cardText}>Für die enterale Bildgebung</p>
              </Card>
              <Card>
                <h4 className={styles.cardTitle}>Jodhaltige Öle</h4>
                <p className={styles.cardText}>Zur Darstellung der Lymphbahnen (Lymphangiographie) – heute nur noch selten verwendet.</p>
              </Card>
            </div>
          </Sub>
        </Section>

        {/* ── 2. APPLIKATION ────────────────────────────────────────── */}
        <Section id="applikation" title="KM-Applikation & Ausscheidung">

          <Sub title="Jodkonzentration">
            <div className={styles.threeCol}>
              <Card variant="orange">
                <div className={styles.statNum}>300 mg/ml</div>
                <div className={styles.statLabel}>Standard</div>
                <p className={styles.cardText}>Für die meisten intravenösen CT-Untersuchungen ausreichend.</p>
              </Card>
              <Card variant="orange">
                <div className={styles.statNum}>350–375 mg/ml</div>
                <div className={styles.statLabel}>CT-Angiographie</div>
                <p className={styles.cardText}>Stärkere intravasale Kontrastierung.</p>
              </Card>
            </div>
          </Sub>

          <Sub title="Kontrastmittelmenge (Erwachsene)">
            <Table
              headers={['Untersuchung', 'Volumen']}
              rows={[
                ['LAE-CT', '~50–70 ml'],
                ['CTA-Aorta (BBA / supraaortal)', '~60–80 ml'],
                ['Abdomen (portalvenöse Phase)', '80–120 ml'],
                ['Biphasisch Abdomen', '100–140 ml'],
              ]}
            />
            <Merke>
              Je schneller maximale Gefäßkontrastierung → kleineres Volumen nötig.
              Je länger homogene Organkontrastierung → größeres Volumen nötig.
            </Merke>
          </Sub>

          <Sub title="Einflussfaktoren auf das KM-Volumen">
            <div className={styles.threeCol}>
              <Card>
                <h4 className={styles.cardTitle}>Art der Untersuchung</h4>
                <p className={styles.cardText}>Parenchymatöse Organe (Kopf, Thorax, Abdomen, Becken) brauchen mehr Volumen als CT-Angiographien.</p>
              </Card>
              <Card>
                <h4 className={styles.cardTitle}>Körpergewicht</h4>
                <p className={styles.cardText}>Höheres Gewicht → häufig höheres Volumen für ausreichende Kontrastierung.</p>
              </Card>
              <Card>
                <h4 className={styles.cardTitle}>Nierenfunktion (CA-AKI)</h4>
                <p className={styles.cardText}>Bei eingeschränkter Nierenfunktion wird das Volumen reduziert.</p>
              </Card>
            </div>
          </Sub>

          <Sub title="Injektionsrate">
            <Table
              headers={['Rate', 'Zugang', 'Indikation']}
              rows={[
                ['3–5 ml/s', '18G-Braunüle (grün)', 'Standard'],
                ['3–4 ml/s', '20G-Braunüle (rosa)', 'Fallback – ausreichend für rein portalvenöse Phase'],
                ['5 ml/s', '18G', 'LAE, hypervask./hypovask. Tumoren'],
                ['2,5 ml/s', '22G (blau) oder ZVK', '⚠️ Möglichst vermeiden – schlechtere art. Abgrenzbarkeit'],
              ]}
            />
          </Sub>

          <Sub title="Ausscheidung jodhaltiger KM">
            <div className={styles.twoCol}>
              <Card variant="dark">
                <h4 className={styles.cardTitle}>Renale Elimination</h4>
                <div className={styles.statNum} style={{ fontSize: '32px' }}>~90%</div>
                <p className={styles.cardText}>über die Niere</p>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>HWZ 1–3 h</span>
                  <span className={styles.chip}>50% nach ~2 h</span>
                  <span className={styles.chip}>~100% nach 24 h</span>
                </div>
              </Card>
              <Card variant="dark">
                <h4 className={styles.cardTitle}>Extra-renale Ausscheidung</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Leber-Galle</span>
                  <span className={styles.chip}>Darm</span>
                  <span className={styles.chip}>Speicheldrüsen</span>
                </div>
                <InfoBox variant="warning" icon="🌍" label="Umwelt">
                  <p>Jod-KM und Gd-KM können kaum filtriert werden → gelangen über Urin ins Abwassersystem und sind im Trinkwasser messbar. Derzeit keine effektiven Gegenmaßnahmen.</p>
                </InfoBox>
              </Card>
            </div>
          </Sub>
        </Section>

        {/* ── 3. PARAVASAT ──────────────────────────────────────────── */}
        <Section id="paravasat" title="Paravasat-Management">
          <Sub title="Sofortmaßnahmen">
            <div className={styles.stepList}>
              {[
                ['1', 'Injektion stoppen, Zugang belassen → Aspiration versuchen'],
                ['2', 'Kanüle entfernen (erst nach Aspiration)'],
                ['3', 'Extremität hochlagern'],
                ['4', 'Kalte Kompresse (20 min, mehrfach)'],
                ['5', 'Umfang der betroffenen Stelle dokumentieren (Stift markieren)'],
              ].map(([n, text]) => (
                <div key={n} className={styles.step}>
                  <span className={styles.stepNum}>{n}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </Sub>

          <Sub title="Überwachung">
            <div className={styles.twoCol}>
              <Card>
                <h4 className={styles.cardTitle}>Worauf achten</h4>
                <ul className={styles.list}>
                  <li><strong>Durchblutung:</strong> Kapillarfüllzeit, Pulse distal der Stelle</li>
                  <li><strong>Motorik & Sensorik:</strong> Parästhesien, motorische Ausfälle</li>
                  <li><strong>Spannung:</strong> Ödembildung, livide Verfärbung → Kompartmentsyndrom</li>
                  <li><strong>Hautzustand:</strong> Blasenbildung, Nekrosen</li>
                </ul>
              </Card>
              <Card>
                <h4 className={styles.cardTitle}>Dem Patienten mitteilen</h4>
                <InfoBox variant="info" icon="ℹ️">
                  <p>Schwellung / Rötung / Wärme in den nächsten Stunden → <strong>normal</strong></p>
                </InfoBox>
                <InfoBox variant="danger" icon="🚨" label="Sofort Notaufnahme bei:">
                  <p>Zunahme · Bläschenbildung · Taubheit · Hautverfärbung · starke Schmerzen</p>
                </InfoBox>
              </Card>
            </div>
            <Merke>Menge, KM-Typ, klinischer Befund und Maßnahmen schriftlich dokumentieren.</Merke>
          </Sub>
        </Section>

        {/* ── 4. NEBENWIRKUNGEN ─────────────────────────────────────── */}
        <Section id="nebenwirkungen" title="Nebenwirkungen jodhaltiger KM">

          <Sub title="Chemotoxische Reaktionen">
            <Card>
              <p className={styles.cardText}><strong>Definition:</strong> Direkte chemische Wirkung des KM – nicht immunologisch vermittelt.</p>
              <div className={styles.chipRow}>
                <span className={styles.chip}>Wärmegefühl</span>
                <span className={styles.chip}>Übelkeit / Erbrechen</span>
                <span className={styles.chip}>Vasovagale Reaktion</span>
                <span className={styles.chip}>Arrhythmien</span>
                <span className={styles.chip}>Zerebraler Krampfanfall</span>
              </div>
            </Card>
          </Sub>

          <Sub title="Allergieartige Reaktionen (Pseudoallergie)">
            <InfoBox variant="info" icon="🔬" label="Mechanismus">
              <p>Nicht IgE-vermittelt · Unspezifische Mastzellaktivierung · Histaminausschüttung</p>
            </InfoBox>

            <div className={styles.gradGrid}>
              <GradCard grad="Grad 1" label="Mild" color="#34d399"
                items={['Juckreiz', 'Leichte Urtikaria', 'Erythem']} />
              <GradCard grad="Grad 2" label="Moderat" color="#fbbf24"
                items={['Deutliche Urtikaria', 'Bronchospasmus', 'Larynxödem']} />
              <GradCard grad="Grad 3" label="Schwer" color="#f97316"
                items={['Hypotonie', 'Schock', 'Sehr selten (0,01–0,04 %)']} />
              <GradCard grad="Grad 4" label="Lebensbedrohlich" color="#ef4444"
                items={['Atemstillstand', 'Herzstillstand']} />
            </div>

            <Sub title="Management bei anamnestischer allergieartiger Reaktion">
              <div className={styles.threeCol}>
                <Card>
                  <h4 className={styles.cardTitle}>1. Alternatives Verfahren</h4>
                  <p className={styles.cardText}>KM-freie Bildgebung bevorzugen, wenn möglich.</p>
                </Card>
                <Card>
                  <h4 className={styles.cardTitle}>2. Substanzwechsel</h4>
                  <p className={styles.cardText}>Anderes KM verwenden.</p>
                  <InfoBox variant="info" icon="📊" label="Park et al. 2018">
                    <p>Gleiche Substanz: <strong>31 %</strong> erneute Reaktion</p>
                    <p>Substanzwechsel: <strong>12 %</strong> erneute Reaktion</p>
                  </InfoBox>
                </Card>
                <Card>
                  <h4 className={styles.cardTitle}>3. Prämedikation</h4>
                  <p className={styles.cardText}>H1-/H2-Blocker & Cortison – im Alltag häufig, aber in aktuellen Leitlinien nicht mehr empfohlen.</p>
                  <div className={styles.chipRow}>
                    <span className={styles.chip}>H1-Blocker</span>
                    <span className={styles.chip}>H2-Blocker</span>
                    <span className={styles.chip}>Cortison</span>
                  </div>
                </Card>
              </div>
              <Merke>
                Die oft genannte „Jodallergie" existiert <strong>nicht</strong>. Jod ist als kleines Molekül nicht allergen –
                die Reaktion richtet sich gegen andere Molekülbestandteile.
              </Merke>
            </Sub>
          </Sub>

          <Sub title="PC-AKI – Kontrastmittelassoziierte akute Nierenschädigung">
            <InfoBox variant="info" icon="📋" label="Terminologische Änderung">
              <p><strong>Alt:</strong> CIN – Kontrastmittelinduzierte Nephropathie</p>
              <p><strong>Neu:</strong> PC-AKI – Post-Contrast Acute Kidney Injury</p>
              <p style={{ marginTop: 8 }}>Umbenennung, da akutes Nierenversagen gleich häufig nach nativer <em>und</em> KM-verstärkter CT auftritt → möglicher fehlender Kausalzusammenhang.</p>
            </InfoBox>

            <Card>
              <h4 className={styles.cardTitle}>Definition (nach ESUR)</h4>
              <p className={styles.cardText}>Anstieg des Serumkreatinins <strong>innerhalb von 48–72 h</strong> nach intravaskulärer KM-Gabe um <strong>≥ 0,3 mg/dl</strong> oder auf das <strong>≥ 1,5-fache</strong>.</p>
            </Card>

            <Table
              headers={['Risikofaktor', 'Schwellenwert / Bedingung']}
              rows={[
                ['eGFR (First-Pass-Effekt)', '< 45 ml/min/1,73 m²'],
                ['eGFR (Second-Pass-Effekt)', '< 30 ml/min/1,73 m²'],
                ['Bekanntes akutes Nierenversagen', 'Jedes Stadium'],
                ['Intraarterielle KM-Gabe (First Pass)', 'Proximale Nierenarterien'],
                ['Große KM-Mengen', 'Mehrfachgaben ≤ 48–72 h'],
              ]}
            />

            <Sub title="Hydrierung & Nierenschutz">
              <InfoBox variant="warning" icon="💧" label="Hydrierung">
                <p>Empfohlen ab <strong>eGFR &lt; 30 ml/min/1,73 m²</strong></p>
                <p>Vorzugsweise i.v. (0,9 % Kochsalz) · Schema: <strong>100 ml/h für je 4 h</strong> vor und nach KM-Gabe</p>
                <p>⚠️ Vorsicht bei Herzinsuffizienz (NYHA 3–4) oder Lungenödem</p>
              </InfoBox>
              <Merke>
                Es gibt <strong>keine</strong> nachgewiesene medikamentöse Prophylaxe.
                Acetylcystein (ACC) – früher häufig eingesetzt – hat sich als unwirksam erwiesen.
              </Merke>
            </Sub>

            <Sub title="Metformin-Management">
              <Table
                headers={['eGFR', 'Vorgehen']}
                rows={[
                  ['> 30 ml/min/1,73 m²', 'Metformin kann normal weitergenommen werden'],
                  ['< 30 ml/min/1,73 m²', 'Absetzen zum Zeitpunkt der Untersuchung für 48 Stunden'],
                  ['Akutes Nierenversagen', 'Absetzen für 48 Stunden'],
                ]}
              />
              <Merke>Eigentlich ist Metformin bei eGFR &lt; 30 kontraindiziert!</Merke>
            </Sub>

            <Sub title="Hyperthyreose und jodhaltiges KM">
              <InfoBox variant="warning" icon="🦋" label="Risiko">
                <p>Jodhaltige KM können Hyperthyreose verstärken oder thyreotoxische Krise auslösen – besonders bei Basedow, Struma multinodosa, Autonomie.</p>
                <p><strong>Epidemiologie:</strong> Tritt meist ≥ 1 Woche nach KM-Gabe auf. Extrem selten (100 Fälle / 5 Mio. KM-Gaben).</p>
              </InfoBox>
              <Table
                headers={['Situation', 'Vorgehen']}
                rows={[
                  ['Latente Hyperthyreose', 'Natriumperchlorat (Irenat®) vor KM, dann 7–10 Tage weiter'],
                  ['Manifeste Hyperthyreose', '⛔ Absolute Kontraindikation'],
                  ['Lebensbedrohliche Situation (Ausnahme)', 'Kombination: Irenat + Thiamazol/Carbimazol'],
                  ['Schilddrüsenkarzinom (papillär/follikulär)', '⛔ Strikt verboten – verhindert spätere Radiojodtherapie'],
                ]}
              />
            </Sub>
          </Sub>
        </Section>

        {/* ── 5. GI-DIAGNOSTIK ──────────────────────────────────────── */}
        <Section id="gi" title="Gastrointestinale Diagnostik">

          <Sub title="Bariumsulfat">
            <div className={styles.twoCol}>
              <Card>
                <h4 className={styles.cardTitle}>Applikation & Physiologie</h4>
                <p className={styles.cardText}>Oral (Trinken) oder rektal (Einlauf).</p>
                <p className={styles.cardText}>Wird <strong>nicht resorbiert</strong> → Ausscheidung als charakteristischer „weißer Stuhl".</p>
              </Card>
              <Card>
                <h4 className={styles.cardTitle}>Doppelkontrast-Methode</h4>
                <p className={styles.cardText}><strong>Positiver Kontrast</strong> (Barium) benetzt die Wand (Schleimhautbeschlag).</p>
                <p className={styles.cardText}><strong>Negativer Kontrast</strong> (CO₂ / Methylzellulose) bläht das Lumen auf.</p>
                <p className={styles.cardText}>Ziel: Beurteilung des Schleimhautreliefs (frühe Erosionen, kleine Polypen). Heute selten verwendet.</p>
              </Card>
            </div>

            <InfoBox variant="danger" icon="⛔" label="Kontraindikationen Bariumsulfat">
              <ul className={styles.list}>
                <li><strong>V.a. Perforation / Anastomoseninsuffizienz</strong> → schwere Barium-Peritonitis</li>
                <li><strong>Aspirationsgefahr</strong> → Barium ist nicht lungengängig → Fremdkörperreaktion + Lungenödem</li>
                <li><strong>V.a. Ileus</strong> → Barium entzieht Darminhalt Wasser → Barium-Steine → Ileus verschlimmert sich</li>
              </ul>
            </InfoBox>
          </Sub>

          <Sub title="Wasserlösliche KM – z. B. Gastrografin®">
            <div className={styles.twoCol}>
              <Card variant="green">
                <h4 className={styles.cardTitle}>✅ Vorteile gegenüber Barium</h4>
                <ul className={styles.list}>
                  <li>Keine Peritonitis → bei Perforation wird KM vom Bauchfell resorbiert</li>
                  <li>Hyperosmolar → wirkt abführend (therapeutisch bei Ileus möglich)</li>
                </ul>
              </Card>
            </div>
          </Sub>
        </Section>

        {/* ── 6. MRT-KM ─────────────────────────────────────────────── */}
        <Section id="mrt" title="MRT-Kontrastmittel – Gadolinium">

          <InfoBox variant="info" icon="⚗️" label="Grundprinzip">
            <p>Gadolinium (Gd³⁺) ist paramagnetisch. Da freie Gd³⁺-Ionen <strong>toxisch</strong> sind, müssen sie in einem <strong>Chelat</strong> eingeschlossen werden.</p>
          </InfoBox>

          <Sub title="Wirkmechanismus">
            <div className={styles.twoCol}>
              <Card variant="orange">
                <h4 className={styles.cardTitle}>T1-Effekt</h4>
                <p className={styles.cardText}>T1-Verkürzung → <strong>Signalanstieg</strong> (hauptsächlicher Effekt)</p>
              </Card>
              <Card variant="dark">
                <h4 className={styles.cardTitle}>T2-Effekt</h4>
                <p className={styles.cardText}>T2-Verkürzung → Signalabfall. Nur bei <strong>Hochdosis</strong> relevant.</p>
              </Card>
            </div>
          </Sub>

          <Sub title="Chelat-Formen">
            <Table
              headers={['', 'Lineare Chelate', 'Makrozyklische Chelate']}
              rows={[
                ['Struktur', 'Offenkettig', 'Ringförmig – „Käfig"'],
                ['Stabilität', 'Geringere Stabilität', 'Sehr hohe Stabilität'],
                ['Ablagerungsrisiko', 'Höher', 'Minimal'],
                ['Status', 'Rote-Hand-Brief 2018 (Zulassungsruhen)', 'Standard in der heutigen Routine'],
                ['Beispiele', 'Primovist®, Multihance® (Ausnahmen Leber)', 'Gadovist®, Dotarem®'],
              ]}
            />
            <Merke>
              Ausnahmen vom Zulassungsruhen linearer KM: <strong>Primovist® (Gadoxetsäure)</strong> und <strong>Multihance® (Gadobensäure)</strong>
              dürfen weiterhin für Leber-MRT eingesetzt werden, da makrozyklische KM dort weniger geeignet sind.
            </Merke>
          </Sub>

          <Sub title="Nebenwirkungen von Gadolinium">
            <Card>
              <h4 className={styles.cardTitle}>Nephrogene Systemische Fibrose (NSF)</h4>
              <p className={styles.cardText}>Schwere fibrosierende Erkrankung von Haut und inneren Organen.</p>
              <p className={styles.cardText}><strong>Mechanismus:</strong> Freies Gadolinium → Aktivierung von Fibroblasten → massive Kollagenablagerung.</p>
              <InfoBox variant="warning" icon="⚠️">
                <p>Tritt nahezu ausschließlich bei <strong>GFR &lt; 30</strong> + linearen KM auf. Heute extrem selten dank makrozyklischer KM.</p>
              </InfoBox>
            </Card>

            <Card>
              <h4 className={styles.cardTitle}>Gadolinium-Retention im Gehirn</h4>
              <p className={styles.cardText}>Hyperintensitäten in <strong>Nucleus dentatus</strong> und <strong>Globus pallidus</strong> (T1 nativ) nach mehrfacher Gabe linearer KM.</p>
              <div className={styles.twoCol} style={{ marginTop: 12 }}>
                <InfoBox variant="info">
                  <p><strong>Nucleus dentatus:</strong> Im Marklager der Kleinhirnhemisphäre, lateral der Kleinhirnkerne.</p>
                </InfoBox>
                <InfoBox variant="info">
                  <p><strong>Globus pallidus:</strong> Mediales Segment des Linsenkerns, lateral der Capsula interna, medial des Putamens.</p>
                </InfoBox>
              </div>
              <Merke>Klinische Relevanz bisher unbekannt – kein klinisches Korrelat nachgewiesen.</Merke>
            </Card>
          </Sub>

          <Sub title="Leberspezifische KM">
            <InfoBox variant="info" icon="🫀" label="Grundprinzip">
              <p>Leberspezifische KM werden von <strong>funktionstüchtigen Hepatozyten</strong> aufgenommen und biliär ausgeschieden.
              Hepatozyten zeigen Enhancement → alle anderen Läsionen bleiben hypointens.</p>
            </InfoBox>

            <Table
              headers={['', 'Primovist®', 'Multihance®']}
              rows={[
                ['Hepatozyten-Aufnahme', '~ 50 %', '~ 3–5 %'],
                ['Spätphase (hepatobiliär)', 'nach ~ 20 min', 'nach ~ 40–120 min'],
                ['Gd-Dosis', '0,025 mmol/kg (¼ der Standarddosis)', '0,1 mmol/kg'],
                ['Elimination', '~50 % biliär / ~50 % renal', 'Überwiegend renal'],
              ]}
            />
            <Merke>Primovist ist das <strong>einzige</strong> hepatozytenspezifische Gd-KM!</Merke>

            <Sub title="Indikationen leberspezifischer KM">
              <div className={styles.twoCol}>
                {[
                  ['FNH vs. Adenom', 'FNH nimmt KM auf, Adenome meist nicht.'],
                  ['HCC-Detektion (Zirrhose)', 'Gut differenziertes HCC kann KM aufnehmen.'],
                  ['Metastasen < 1 cm', 'Hypointens in hepatobiliärer Phase → erhöhte Sensitivität.'],
                  ['Gallengangsleckage', 'Darstellung durch biliäre Ausscheidung.'],
                ].map(([title, text]) => (
                  <Card key={title}>
                    <h4 className={styles.cardTitle}>{title}</h4>
                    <p className={styles.cardText}>{text}</p>
                  </Card>
                ))}
              </div>
            </Sub>
          </Sub>

          <Sub title="Buscopan® als Begleitmedikation (Leber-MRT)">
            <div className={styles.twoCol}>
              <Card>
                <h4 className={styles.cardTitle}>Wirkung</h4>
                <p className={styles.cardText}>Parasympatholytikum → lähmt vorübergehend die glatte Muskulatur im GI-Trakt → <strong>Artefaktreduktion</strong>.</p>
              </Card>
              <Card variant="danger">
                <h4 className={styles.cardTitle}>Kontraindikationen</h4>
                <div className={styles.chipRow}>
                  <span className={styles.chip}>Glaukom</span>
                  <span className={styles.chip}>Prostatahyperplasie</span>
                  <span className={styles.chip}>Tachyarrhythmie</span>
                  <span className={styles.chip}>Mechanischer Ileus</span>
                </div>
                <p className={styles.cardText} style={{ marginTop: 8 }}>Alternative: <strong>Glucagon</strong></p>
              </Card>
            </div>
            <InfoBox variant="warning" icon="🚗" label="Wichtiger Hinweis für Patienten">
              <p>Pupillenerweiterung + Akkommodationsstörung → <strong>Fahrverbot und keine Maschinen bedienen</strong> für 1–2 Stunden.</p>
            </InfoBox>
          </Sub>
        </Section>

        {/* ── 7. SCHWANGERSCHAFT ────────────────────────────────────── */}
        <Section id="schwangerschaft" title="Schwangerschaft & Stillzeit">

          <InfoBox variant="warning" icon="🤰" label="Grundprinzip">
            <p>Strenge Indikationsstellung. KM nur, wenn die Untersuchung nicht auf nach der Entbindung verschoben werden kann und eine KM-freie Alternative nicht ausreicht. Detaillierte Aufklärung und Dokumentation obligat.</p>
          </InfoBox>

          <Sub title="Jodhaltige KM (CT, Angiographie)">
            <Table
              headers={['Aspekt', 'Detail']}
              rows={[
                ['Plazentagängigkeit', 'Ja – fetale Schilddrüse kann Jod aufnehmen (ab ca. 10.–12. SSW)'],
                ['Risiko', 'Fetale/neonatale Hypothyreose durch Wolff-Chaikoff-Effekt'],
                ['Escape-Phänomen', 'Erwachsene können dem Blockade-Effekt entkommen – Fetus häufig nicht'],
                ['Maßnahme', 'Neugeborenes nach Geburt auf Schilddrüsenfunktion kontrollieren (TSH-Wert)'],
              ]}
            />
          </Sub>

          <Sub title="Gadolinium-haltige KM (MRT)">
            <Table
              headers={['Aspekt', 'Detail']}
              rows={[
                ['Plazentagängigkeit', 'Ja → renale Ausscheidung ins Fruchtwasser → orale Resorption durch Fetus → Kreislauf'],
                ['Risiko', 'Freies Gd im Fruchtwasser potenziell toxisch – Ausmaß unbekannt'],
                ['Empfehlung', 'Möglichst vermeiden, besonders im 1. Trimester'],
                ['Wenn nötig', 'Makrozyklische Gadolinium-KM bevorzugen (geringere Dissoziation)'],
              ]}
            />
          </Sub>

          <Sub title="Stillzeit">
            <Table
              headers={['KM-Typ', 'Ausscheidung in Muttermilch', 'Stillpause']}
              rows={[
                ['Jodhaltige KM', '~0,5 % der Dosis – orale Bioverfügbarkeit sehr gering', 'Nicht nötig'],
                ['Gadolinium-KM', '< 0,04 % der Dosis – orale Resorption minimal', 'Nicht nötig'],
              ]}
            />
            <Merke>
              Wenn die Mutter beruhigt werden möchte: <strong>24 h Stillen pausieren</strong> und Milch verwerfen.
            </Merke>
          </Sub>
        </Section>

      </div>
    </div>
  )
}
