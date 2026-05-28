import Link from 'next/link';
import styles from './page.module.css';

export default function KontrastmittelLeitfadenPage() {
  return (
    <div className={styles.pageContainer}>
      
      {/* BREADCRUMB */}
      <nav className={styles.breadcrumbPath}>
        <Link href="/" className={styles.breadcrumbStep}>RadYar</Link>
        <span className={styles.breadcrumbDivider}>&rsaquo;</span>
        <Link href="/technik-physik" className={styles.breadcrumbStep}>Technik & Physik</Link>
        <span className={styles.breadcrumbDivider}>&rsaquo;</span>
        <span className={styles.breadcrumbCurrent}>Kontrastmittel-Leitfaden</span>
      </nav>

      {/* SEITENTITEL */}
      <h1 className={styles.mainTitle}>Kontrastmittel-Leitfaden</h1>

      {/* STICKY QUICK-NAVIGATION (Sitz direkt unter deiner 64px Navbar) */}
      <nav className={styles.stickyQuickNav}>
        <div className={styles.quickNavScrollWrapper}>
          <a href="#roentgen" className={styles.quickNavLink}>1. Röntgen-KM</a>
          <a href="#applikation" className={styles.quickNavLink}>2. Applikation & Elimination</a>
          <a href="#paravasat" className={styles.quickNavLink}>3. Paravasat</a>
          <a href="#nebenwirkungen" className={styles.quickNavLink}>4. Nebenwirkungen</a>
          <a href="#pc-aki" className={styles.quickNavLink}>5. PC-AKI</a>
          <a href="#hyperthyreose" className={styles.quickNavLink}>6. Hyperthyreose</a>
          <a href="#gastro" className={styles.quickNavLink}>7. Gastrointestinal</a>
          <a href="#mrt" className={styles.quickNavLink}>8. MRT-KM</a>
          <a href="#schwangerschaft" className={styles.quickNavLink}>9. Schwangerschaft</a>
        </div>
      </nav>

      {/* INHALT */}
      <main className={styles.contentWorkspace}>

        {/* --- SEKTION 1 --- */}
        <section id="roentgen" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>1. Röntgen-Kontrastmittel</h2>
          
          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Röntgennegative Kontrastmittel</h3>
            <p className={styles.normalText}>
              Zeigen aufgrund ihrer geringen oder fehlenden Absorptionsfähigkeit eine ungehinderte Durchlässigkeit der Röntgenstrahlung[cite: 1]. Beispiele hierfür sind Wasser oder Luft/Gase (wie CO₂).
            </p>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Röntgenpositive Kontrastmittel</h3>
            <p className={styles.normalText}>
              Führen zu einer vermehrten Absorption der Röntgenstrahlen im Vergleich zum umgebenden Gewebe durch eine höhere Ordnungszahl. Der Trijodbenzolring bildet hierbei die gemeinsame Grundstruktur aller wasserlöslichen, jodhaltigen Substanzen, wobei das Jod (Z=53) das eigentliche kontrastgebende Element darstellt.
            </p>
            
            <h4 className={styles.subElementHeading}>Wasserlösliche Formen:</h4>
            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>Nicht-ionische KM (z. B. Imeron®, Ultravist®):</span> Standard für intravasale Anwendungen. Sie tragen keine elektrische Ladung, sind hydrophiler und weisen eine deutlich niedrigere Osmolarität auf, was zu einer wesentlich besseren Verträglichkeit führt.
              </li>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>Ionische KM (z. B. Gastrografin®):</span> Ausschließlich für die enterale Applikation bestimmt und nicht mehr für die intravasale Gabe zugelassen. Sie besitzen eine hohe Osmolarität und ein höheres Nebenwirkungsprofil, sind dafür jedoch kostengünstiger.
              </li>
            </ul>

            <h4 className={styles.subElementHeading}>Wasserunlösliche Formen:</h4>
            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}><strong>Bariumsulfat:</strong> Verwendung in der enteralen Diagnostik des Magen-Darm-Traktes.</li>
              <li className={styles.bulletPointItem}><strong>Jodhaltige Öle:</strong> Historisch oder in Spezialindikationen zur Darstellung von Lymphbahnen verwendet.</li>
            </ul>
          </div>
        </section>

        {/* --- SEKTION 2 --- */}
        <section id="applikation" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>2. Kontrastmittel-Applikation und -Ausscheidung</h2>
          
          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Jodkonzentration & Richtvolumina im CT</h3>
            <p className={styles.normalText}>
              Für standardmäßige intravenöse CT-Untersuchungen genügt eine Jodkonzentration von circa 300 mg/ml. Bei CT-Angiographien werden höhere Konzentrationen von 350–375 mg/ml verwendet, um ein optimales intravasales Signal zu generсить.
            </p>
            
            <div className={styles.attentionBox}>
              <strong>Kinetische Grundregel:</strong> Je schneller eine Zielstruktur maximalkontrastiert werden muss (z. B. Angiographie), desto kleiner ist das benötigte KM-Volumen bei hoher Flussrate; je länger ein Organ homogen kontrastiert bleiben muss (z. B. parenchymatöse Organphasen), desto größer ist das Volumen bei moderater Flussrate.
            </div>

            <h4 className={styles.subElementHeading}>Richtwerte für KM-Volumina:</h4>
            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}><strong>LAE-CT (Lungenarterienembolie):</strong> 50 – 70 ml</li>
              <li className={styles.bulletPointItem}><strong>CT-Angiographie der Aorta:</strong> 60 – 80 ml</li>
              <li className={styles.bulletPointItem}><strong>Abdomen-CT (portalvenöse Phase):</strong> 80 – 120 ml</li>
              <li className={styles.bulletPointItem}><strong>Biphasische Untersuchungen (Leber/Pankreas):</strong> 100 – 140 ml</li>
            </ul>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Zugangskompatibilität & Injektionsraten</h3>
            <p className={styles.normalText}>
              Die Wahl der Flussrate orientiert sich streng an der Fragestellung und dem liegenden venösen Zugang.
            </p>

            <table className={styles.matrixTable}>
              <thead>
                <tr>
                  <th className={styles.tableHeaderCell}>Zugang / Indikation</th>
                  <th className={styles.tableHeaderCell}>Empfohlene Flussrate</th>
                  <th className={styles.tableHeaderCell}>Klinischer Einsatzzweck</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableDataCell}><strong>18G Venenverweilkanüle (Grün)</strong></td>
                  <td className={styles.tableDataCell}>3,0 – 5,0 ml/s</td>
                  <td className={styles.tableDataCell}>Standard für CT-Angiographien und Routine-CTs</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>20G Venenverweilkanüle (Rosa)</strong></td>
                  <td className={styles.tableDataCell}>3,0 – 4,0 ml/s</td>
                  <td className={styles.tableDataCell}>Ausreichend für rein portalvenöse Phasen</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>Hohe Flussrate (Spezial-Indikation)</strong></td>
                  <td className={styles.tableDataCell}>5,0 ml/s</td>
                  <td className={styles.tableDataCell}>Zwingend bei LAE-Diagnostik und Tumordesmoplasie</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>Niedrige Flussrate (22G / ZVK)</strong></td>
                  <td className={styles.tableDataCell}>2,5 ml/s</td>
                  <td className={styles.tableDataCell}>Sollte vermieden werden, da die arterielle Abgrenzung sinkt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Kinetik & Umweltrelevanz</h3>
            <p className={styles.normalText}>
              Die Ausscheidung erfolgt zu ca. 90 % renal über die glomeruläre Filtration mit einer Plasmahalbwertzeit von 1–3 Stunden. Nach 24 Stunden ist die Substanz nahezu vollständig eliminiert. Ein minimaler Anteil wird extrarenal über Galle, Speichel und Darm ausgeschieden.
            </p>
            <div className={styles.attentionBox}>
              <strong>Umwelthinweis:</strong> Jodierte Röntgenkontrastmittel sowie gadoliniumhaltige MRT-KM können in kommunalen Kläranlagen nicht herausgefiltert werden. Sie gelangen unverändert in den Wasserkreislauf und sind dauerhaft im Trinkwasser nachweisbar; effektive Eliminationsverfahren existieren aktuell nicht.
            </div>
          </div>
        </section>

        {/* --- SEKTION 3 --- */}
        <section id="paravasat" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>3. Paravasat-Management</h2>
          
          <div className={styles.dataCard}>
            <p className={styles.normalText}>
              Ein Kontrastmittelparavasat erfordert schnelles Handeln, um Gewebeschäden oder ein drohendes Kompartmentsyndrom zu verhindern.
            </p>

            <div className={styles.attentionBox}>
              <strong>Sofortmaßnahmen bei Paravasat:</strong>
              <ol className={styles.numberedList}>
                <li className={styles.numberedListItem}>Injektion sofort stoppen, den venösen Zugang fixiert belassen und eine Aspiration versuchen.</li>
                <li className={styles.numberedListItem}>Die Kanüle erst im Anschluss an den Aspirationsversuch vorsichtig entfernen.</li>
                <li className={styles.numberedListItem}>Die betroffene Extremität konsequent hochlagern.</li>
                <li className={styles.numberedListItem}>Trockene Kältekompressen applizieren (20 Minuten, zyklisch wiederholen).</li>
                <li className={styles.numberedListItem}>Das Paravasatareal auf der Haut mit einem dokumentenechten Stift markieren.</li>
              </ol>
            </div>

            <h4 className={styles.subElementHeading}>Klinische Überwachung & Vigilanz:</h4>
            <p className={styles.normalText}>
              Die engmaschige Kontrolle umfasst die distale Durchblutung (Rekapillarisierungszeit, Pulse), Sensorik und Motorik (Ausschluss von Parästhesien) sowie die Gewebespannung und den Hautstatus (Livide Verfärbung, Blasenbildung).
            </p>

            <div className={styles.attentionBox}>
              <strong>Patientenaufklärung bei Entlassung:</strong> Schwellung, lokale Wärme und Rötung sind in den ersten Stunden normal. Bei einer Progredienz der Schmerzen, Taubheitsgefühl, Blasenentwicklung oder Verfärbungen muss sich der Patient <strong>unverzüglich in einer chirurgischen Notaufnahme</strong> vorstellen. Jedes Ereignis ist lückenlos zu dokumentieren (Menge, KM-Typ, Befund, Maßnahmen).
            </div>
          </div>
        </section>

        {/* --- SEKTION 4 --- */}
        <section id="nebenwirkungen" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>4. Nebenwirkungen jodhaltiger Kontrastmittel</h2>
          
          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Chemotoxische Reaktionen</h3>
            <p className={styles.normalText}>
              Beruhen auf den direkten chemischen und osmotischen Eigenschaften der Substanz und verlaufen streng nicht-immunologisch. Typische Symptome umfassen Hitzegefühl, Übelkeit, Erbrechen, vasovagale Synkopen, Herzrhythmusstörungen oder im Extremfall zerebrale Krampfanfälle.
            </p>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Allergieartige Reaktionen (Pseudoallergie)</h3>
            <p className={styles.normalText}>
              Klinisch identisch mit einer anaphylaktischen Reaktion, jedoch <strong>nicht IgE-vermittelt</strong>. Der Pathomechanismus basiert auf einer unspezifischen, direkten Aktivierung von Mastzellen mit konsekutiver Histaminfreisetzung.
            </p>

            <table className={styles.matrixTable}>
              <thead>
                <tr>
                  <th className={styles.tableHeaderCell}>Schweregrad</th>
                  <th className={styles.tableHeaderCell}>Klinische Symptomatik</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableDataCell}><strong>Grad 1 (Mild)</strong></td>
                  <td className={styles.tableDataCell}>Lokalisiertes Exanthem, Juckreiz, milde Urtikaria, kutanes Erythem</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>Grad 2 (Moderat)</strong></td>
                  <td className={styles.tableDataCell}>Generalisierte Urtikaria, leichter Bronchospasmus, beginnendes Larynxödem</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>Grad 3 (Schwer)</strong></td>
                  <td className={styles.tableDataCell}>Hypotonie, ausgeprägter anaphylaktischer Schock (Inzidenz: 0,01 – 0,04 %)</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>Grad 4 (Vital)</strong></td>
                  <td className={styles.tableDataCell}>Atemstillstand, kardiopulmonaler Kreislaufstillstand</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.attentionBox}>
              <strong>Management bei Vorerkrankung (Substanzwechsel):</strong> Liegt eine anaphylaktoide Reaktion in der Anamnese vor, ist nach Park et al. (2018) ein konsequenter Substanzwechsel durchzuführen. Das Rezidivrisiko sinkt hierdurch von 31 % (bei wiederholter Gabe desselben KM) auf 12 %. Eine medikamentöse Prämedikation mittels H1-/H2-Blockern und Glukokortikoiden wird in aktuellen Leitlinien nicht mehr regelhaft empfohlen, da trotz Prophylaxe in 8–24 % der Fälle dennoch Durchbruchreaktionen auftreten.
            </div>

            <div className={styles.attentionBox}>
              <strong>Klinischer Mythos:</strong> Eine echte „Jodallergie“ existiert nicht. Das elementare Jod ist zu klein, um als Allergen zu fungieren; Überempfindlichkeiten richten sich ausschließlich gegen die molekulare Trägerstruktur des jeweiligen KM-Moleküls.
            </div>
          </div>
        </section>

        {/* --- SEKTION 5 --- */}
        <section id="pc-aki" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>5. Kontrastmittelassoziierte akute Nierenschädigung (PC-AKI)</h2>
          
          <div className={styles.dataCard}>
            <p className={styles.normalText}>
              Die Nomenklatur wurde von CIN (Kontrastmittelinduzierte Nephropathie) auf <strong>PC-AKI</strong> (Post-Contrast Acute Kidney Injury) umgestellt. Große kontrollierte Studien zeigten, dass eine akute Niereninsuffizienz nach nativen CTs statistisch ebenso häufig auftritt wie nach kontrastmittelverstärkten Untersuchungen, weshalb der kausale Zusammenhang seltener gegeben ist als historisch angenommen.
            </p>

            <div className={styles.attentionBox}>
              <strong>ESUR-Definition der PC-AKI:</strong> Ein absoluter Anstieg des Serumkreatinins um <strong>&ge; 0,3 mg/dl</strong> oder ein relativer Anstieg auf das <strong>&ge; 1,5-fache</strong> des Ausgangswertes innerhalb von 48 bis 72 Stunden nach intravaskulärer Applikation.
            </div>

            <h4 className={styles.subElementHeading}>Patientenbezogene Risikoprofile und Zirkulationseffekte:</h4>
            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>First-Pass-Effekt (Risiko ab eGFR &lt; 45 ml/min/1,73 m²):</span> Gilt bei einer intraarteriellen Applikation proximal der Nierenarterienabgänge sowie bei kritisch kranken Intensivpatienten. Das Kontrastmittel erreicht das Nierenparenchym unverdünnt in maximaler Konzentration.
              </li>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>Second-Pass-Effekt (Risiko ab eGFR &lt; 30 ml/min/1,73 m²):</span> Gilt bei intravenöser Gabe oder intraarterieller Gabe distal der Nierenarterien. Die Substanz durchläuft zuerst den Lungen- und Systemkreislauf und erreicht die Nieren stark verdünnt. Ein vorbekanntes, manifestes akutes Nierenversagen gilt ebenfalls als wesentlicher Risikoindikator.
              </li>
            </ul>

            <h4 className={styles.subElementHeading}>Untersuchungsbezogene Risikofaktoren:</h4>
            <p className={styles.normalText}>
              Dazu zählen hochdosierte Kontrastmittelgaben, die Verwendung hochosmolarer Röntgenkontrastmittel sowie wiederholte Applikationen innerhalb eines Zeitfensters von 48–72 Stunden.
            </p>

            <h4 className={styles.subElementHeading}>Prophylaxe und Begleitmanagement:</h4>
            <p className={styles.normalText}>
              Ab einer eGFR &lt; 30 ml/min/1,73 m² ist eine intravenöse Hydratation (z. B. 0,9 % NaCl) indiziert. Ein etabliertes Schema umfasst die Gabe von 100 ml/h über einen Zeitraum von jeweils 4 Stunden prä- und postinterventionell (Vorsicht bei manifester Herzinsuffizienz NYHA III/IV). Eine medikamentöse Protektion (z. B. mittels Acetylcystein / ACC) besitzt keine wissenschaftliche Evidenz und ist obsolet.
            </p>

            <div className={styles.attentionBox}>
              <strong>Dialyse-Spezifikation:</strong> Bei jodhaltigen Röntgenkontrastmitteln ist **keine** zeitliche Koordination mit der Hämodialyse erforderlich, da bei anurischen Patienten kein funktionelles Restgewebe mehr geschädigt werden kann. Bei gadoliniumhaltigen MRT-KM muss die Dialyse hingegen zeitnah nach der Untersuchung erfolgen, um eine Geweberetention zu verhindern.
            </div>

            <h4 className={styles.subElementHeading}>Metformin-Therapie:</h4>
            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}><strong>Bei einer eGFR &gt; 30 ml/min/1,73 m²:</strong> Metformin kann ohne Unterbrechung wie gewohnt eingenommen werden.</li>
              <li className={styles.bulletPointItem}><strong>Bei einer eGFR &lt; 30 ml/min/1,73 m² oder akutem Nierenversagen:</strong> Das Medikament muss zum Zeitpunkt der Untersuchung abgesetzt und für mindestens 48 Stunden pausiert werden. Generell besteht für Metformin bei Werten unter 30 ohnehin eine absolute Kontraindikation.</li>
            </ul>
          </div>
        </section>

        {/* --- SEKTION 6 --- */}
        <section id="hyperthyreose" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>6. Hyperthyreose und jodhaltiges Kontrastmittel</h2>
          
          <div className={styles.dataCard}>
            <p className={styles.normalText}>
              Die Zufuhr von freiem Jod durch Röntgenkontrastmittel kann bei funktioneller Autonomie, Struma multinodosa oder Morbus Basedow eine thyreotoxische Krise induzieren. Manifestationen treten typischerweise mit einer Latenz von einer Woche oder später auf, wobei das Ereignis im radiologischen Kollektiv mit ca. 100 Fällen auf 5 Millionen Applikationen sehr selten bleibt.
            </p>

            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}>
                <strong>Latente Hyperthyreose:</strong> Indikation zur prophylaktischen Gabe von Natriumperchlorat (Irenat®) vor der Untersuchung, fortgeführt über 7–10 Tage, um die Jodaufnahme in die Thyreozyten kompetitiv zu blockieren.
              </li>
              <li className={styles.bulletPointItem}>
                <strong>Manifeste Hyperthyreose:</strong> Stellt eine absolute Kontraindikation dar. Ausnahmen bilden ausschließlich vitale Notfälle (z. B. Polytrauma, Schlaganfall, Aortendissektion); hierbei muss eine sofortige Kombinationsprophylaxe aus Natriumperchlorat und Thyreostatika (Thiamazol/Carbimazol) eingeleitet werden.
              </li>
            </ul>

            <div className={styles.attentionBox}>
              <strong>Schilddrüsenkarzinom-Ausschluss:</strong> Bei nachgewiesenen oder hochgradig verdächtigen differenzierten Schilddrüsenkarzinomen (papillär/follikulär) ist die Verabreichung jodhaltiger KM strikt kontraindiziert, da die Jodsättigung eine therapeutisch oder diagnostisch notwendige Radiojodtherapie für viele Monate blockiert.
            </div>
          </div>
        </section>

        {/* --- SEKTION 7 --- */}
        <section id="gastro" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>7. Gastrointestinale Diagnostik</h2>
          
          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Bariumsulfat</h3>
            <p className={styles.normalText}>
              Wird oral oder rektal appliziert, verbleibt rein enteral ohne systemische Resorption und führt postinterventionell zu entfärbtem, weißem Stuhl. Bei der Doppelkontrast-Methode wird die physikalische Wandbenetzung durch Bariumsulfat (positiver Kontrast) mit einer luminalen Dehnung durch CO₂ oder Methylzellulose (negativer Kontrast) kombiniert, um Schleimhautfeinstrukturen zu beurteilen (heute weitgehend verlassen).
            </p>

            <div className={styles.attentionBox}>
              <strong>Absolute Kontraindikationen für Bariumsulfat:</strong>
              <ul className={styles.bulletPointList}>
                <li className={styles.bulletPointItem}>Perforationsverdacht oder Anastomoseninsuffizienz (Gefahr einer letalen chemischen Barium-Peritonitis im Abdomen).</li>
                <li className={styles.bulletPointItem}>Aspirationsrisiko (Bariumsulfat induziert in der Lunge schwere Fremdkörperreaktionen und akute Ödeme).</li>
                <li className={styles.bulletPointItem}>Mechanischer Ileus (Barium entzieht dem Darminhalt Wasser und führt zu steinharten Koprolithen, die die Obstruktion fixieren).</li>
              </ul>
            </div>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Wasserlösliche gastrointestinale KM (z. B. Gastrografin®)</h3>
            <p className={styles.normalText}>
              Bieten bei einer Perforation den Vorteil einer komplikationslosen peritonealen Resorption. Aufgrund der ausgeprägten Hyperosmolarität fließt Flüssigkeit in das Darmlumen, was eine abführende Wirkung entfaltet und bei einem funktionellen Subileus oder Mekoniumileus einen gezielten therapeutischen Nutzen aufweist.
            </p>
          </div>
        </section>

        {/* --- SEKTION 8 --- */}
        <section id="mrt" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>8. MRT-Kontrastmittel (Gadolinium)</h2>
          
          <div className={styles.dataCard}>
            <p className={styles.normalText}>
              Gadolinium ist ein stark paramagnetisches Metall, dessen freie Ionen (Gd³⁺) hochgradig toxisch sind und daher an organische Liganden (Chelate) gebunden sein müssen. Der primäre Wirkmechanismus beruht auf einer Verkürzung der T1-Relaxationszeit (Signalanstieg), während T2-Effekte (Signalabfall) meist erst in hohen lokalen Konzentrationen klinisch manifest werden.
            </p>

            <h4 className={styles.subElementHeading}>Strukturelle Klassifikation & Zulassungsstatus:</h4>
            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>Lineare Chelate (offenkettig):</span> Weisen eine geringere Bindungsstabilität auf. Aufgrund des Risikos von Gadolinium-Ablagerungen im Gewebe wurde 2018 ein weitgehendes Zulassungsruhen verhängt. Eine Ausnahme bilden leberspezifische Substanzen wie Gadoxetsäure (Primovist®) und Gadbensäure (Multihance®). Primovist® wird mit ¼ der Standarddosis (0,025 mmol/kg) verabreicht und gleichermaßen hepatobiliär und renal eliminiert.
              </li>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>Makrozyklische Chelate (ringförmig):</span> Schließen das Gadolinium-Ion stabil in einem Molekülkäfig ein. Sie besitzen eine extrem hohe Stabilität und stellen den aktuellen klinischen Routine-Standard dar (z. B. Gadovist®, Dotarem®).
              </li>
            </ul>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Geweberetention und spezifische Entitäten</h3>
            <p className={styles.normalText}>
              Die <strong>Nephrogene Systemische Fibrose (NSF)</strong> beschreibt eine fibrosierende Systemerkrankung der Cutis und innerer Organe durch freigesetztes Gadolinium bei schwerer Niereninsuffizienz (eGFR &lt; 30 ml/min/1,73 m²), die historisch fast ausschließlich mit linearen Chelaten assoziiert war und unter makrozyklischen KM kaum mehr auftritt. Nach ESUR-Leitlinie ist eine eGFR-Bestimmung vor MRT-KM nur bei Risikofaktoren (Nierenanamnese, Diabetes, Hypertonie, Alter &gt; 70) indiziert.
            </p>
            <p className={styles.normalText}>
              Eine <strong>Gadolinium-Retention im ZNS</strong> zeigt sich nach multiplen Gaben linearer KM als native T1-Hyperintensität im <i>Nucleus dentatus</i> (Kleinhirnmarklager) und im <i>Globus pallidus</i> (mediales Linsenkernsegment). Ein klinisch-funktionelles Korrelat oder Krankheitswert ist bisher nicht nachgewiesen.
            </p>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Leberspezifische MRT-KM im direkten Vergleich</h3>
            <p className={styles.normalText}>
              Die Substanzen werden über spezifische Membrantransporter aktiv in funktionelle Hepatozyten aufgenommen und biliär eliminiert, wodurch sich gesundes Gewebe im T1-Signal anreichert und pathologische, hepatozytenfreie Areale hypointens demarkieren.
            </p>

            <table className={styles.matrixTable}>
              <thead>
                <tr>
                  <th className={styles.tableHeaderCell}>Eigenschaft</th>
                  <th className={styles.tableHeaderCell}>Primovist® (Gd-EOB-DTPA)</th>
                  <th className={styles.tableHeaderCell}>Multihance® (Gd-BOPTA)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableDataCell}><strong>Hepatozyten-Aufnahmequote</strong></td>
                  <td className={styles.tableDataCell} style={{color: '#f97316', fontWeight: '600'}}>ca. 50 %</td>
                  <td className={styles.tableDataCell}>ca. 3 – 5 %</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>Hepatobiliäre Spätphase</strong></td>
                  <td className={styles.tableDataCell}>nach ca. 20 min</td>
                  <td className={styles.tableDataCell}>nach ca. 40 – 120 min</td>
                </tr>
                <tr>
                  <td className={styles.tableDataCell}><strong>Klinische Hauptindikationen</strong></td>
                  <td className={styles.tableDataCell} colSpan="2">
                    Differenzierung FNH (positiv) vs. Adenom (negativ); HCC-Frühdiagnostik in der zirrhotischen Leber; Detektion von Mikrometastasen (&lt; 1 cm); präzise Leckagediagnostik der Gallenwege.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Begleitmedikation: Buscopan®</h3>
            <p className={styles.normalText}>
              Dient als Parasympatholytikum zur zeitweisen Lähmung der gastrointestinalen Motilität, um Bewegungsartefakte in der abdominellen MRT-Bildgebung zu minimieren.
            </p>
            <div className={styles.attentionBox}>
              <strong>Absolute Kontraindikationen für Buscopan®:</strong> Glaukom (Engwinkelglaukom; hier ggf. Ausweichen auf Glucagon), manifeste Prostatahyperplasie mit Restharnbildung, höhergradige Tachyarrhythmien sowie mechanische Obstruktionen/Ileus.
            </div>
            <div className={styles.attentionBox}>
              <strong>Wichtiger Patientenhinweis:</strong> Durch die transiente Mydriasis und Akkommodationsstörung besteht ein generelles <strong>Fahrverbot sowie Verbot zum Bedienen von Maschinen für 1–2 Stunden</strong> nach Applikation.
            </div>
          </div>
        </section>

        {/* --- SEKTION 9 --- */}
        <section id="schwangerschaft" className={styles.contentSection}>
          <h2 className={styles.sectionHeading}>9. Umgang mit Schwangeren und Stillenden</h2>
          
          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Schwangerschaft</h3>
            <p className={styles.normalText}>
              Es gilt das Prinzip einer strengsten Indikationsstellung nach Ausschöpfung KM-freier Verfahren.
            </p>

            <ul className={styles.bulletPointList}>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>Jodhaltige KM:</span> Passieren die Plazenta vollständig. Ab der 10.–12. Schwangerschaftswoche nimmt die fetale Schilddrüse aktiv Jod auf. Große Jodmengen können über den <strong>Wolff-Chaikoff-Effekt</strong> die fetale Hormonsynthese blockieren. Während reife Organismen den Block über ein Escape-Phänomen durchbrechen, kann beim Fetus eine transiente Hypothyreose resultieren. <strong>Postnatale Konsequenz:</strong> Eine TSH-Kontrolle beim Neugeborenen aus dem Nabel精力- oder Fersenblut ist obligat.
              </li>
              <li className={styles.bulletPointItem}>
                <span className={styles.amberHighlightText}>Gadoliniumhaltige KM:</span> Passieren die Plazentabarriere ungehindert und werden vom Fetus über die Nieren in das Fruchtwasser eliminiert, von wo aus sie durch Trinken wieder rezirkulieren. Aufgrund potenzieller Toxizitätsrisiken des im Fruchtwasser verbleibenden freien Gadoliniums sollte eine Anwendung, insbesondere im ersten Trimester, strikt vermieden werden. Ist eine Gabe unumgänglich, sind ausschließlich hochstabile makrozyklische Chelate einzusetzen.
              </li>
            </ul>
          </div>

          <div className={styles.dataCard}>
            <h3 className={styles.cardContentTitle}>Stillzeit</h3>
            <div className={styles.attentionBox} style={{borderLeftColor: '#22c55e'}}>
              <strong>Klinischer Standard:</strong> Eine Unterbrechung des Stillens oder Verwerfen der Muttermilch ist aus medizinischer Sicht **nicht** erforderlich. Auf ausdrücklichen Wunsch der Mutter kann eine rein optionale Stillpause von 24 Stunden eingelegt werden.
            </div>
            <p className={styles.normalText} style={{marginTop: '14px'}}>
              <strong>Wissenschaftliche Evidenz:</strong> Bei jodhaltigen Röntgenkontrastmitteln werden weniger als 0,5 % der mütterlichen Dosis in die Milch exkretiert, wovon der Säugling aufgrund einer minimalen enteralen Bioverfügbarkeit kaum etwas resorbiert. Bei Gadolinium-KM liegt die Exkretionsrate unter 0,04 % der maternalen Dosis, die enterale Resorptionsquote des Säuglings beträgt ebenfalls unter 1 % dieser Fraktion.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
