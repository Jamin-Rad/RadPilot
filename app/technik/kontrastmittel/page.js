import Link from 'next/link';
import styles from './page.module.css';

export default function KontrastmittelPage() {
  return (
    <div className={styles.pageLayout}>
      
      {/* LINKES FIXED VERZEICHNIS (SIDEBAR) */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarStickyWrapper}>
          <nav className={styles.breadcrumbContainer}>
            <Link href="/" className={styles.breadcrumbLink}>RadYar</Link> 
            <span className={styles.breadcrumbSeparator}>&rsaquo;</span>{' '}
            <Link href="/technik-physik" className={styles.breadcrumbLink}>Technik & Physik</Link>
          </nav>

          <h2 className={styles.sidebarTitle}>Inhaltsverzeichnis</h2>
          <nav className={styles.verticalNav}>
            <a href="#roentgen" className={styles.navItem}>1. Röntgen-KM</a>
            <a href="#applikation" className={styles.navItem}>2. Applikation & Ausscheidung</a>
            <a href="#paravasat" className={styles.navItem}>3. Paravasat-Management</a>
            <a href="#nebenwirkungen" className={styles.navItem}>4. Nebenwirkungen & Allergien</a>
            <a href="#pc-aki" className={styles.navItem}>5. PC-AKI & Nierenschutz</a>
            <a href="#hyperthyreose" className={styles.navItem}>6. Hyperthyreose-Management</a>
            <a href="#gastro" className={styles.navItem}>7. Gastrointestinale Diagnostik</a>
            <a href="#mrt" className={styles.navItem}>8. MRT-Kontrastmittel (Gadolinium)</a>
            <a href="#schwangerschaft" className={styles.navItem}>9. Schwangerschaft & Stillzeit</a>
          </nav>
        </div>
      </aside>

      {/* HAUPTINHALT (RECHTS) */}
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Kontrastmittel-Leitfaden</h1>

        {/* --- 1. RÖNTGEN-KONTRASTMITTEL --- */}
        <section id="roentgen" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>1. Röntgen-Kontrastmittel</h2>
          
          <div className={styles.infoCard}>
            <div className={styles.cardHeaderArea}>
              <div className={styles.iconNegative}>&minus;</div>
              <h3 className={styles.cardMainTitle}>Röntgennegative Kontrastmittel</h3>
            </div>
            <p className={styles.cardParagraphText}>
              Zeigen aufgrund ihrer geringen oder fehlenden Absorptionsfähigkeit eine ungehinderte Durchlässigkeit der Röntgenstrahlung[cite: 1].
            </p>
            <div className={styles.badgeFlexRow}>
              <span className={styles.customBadge}>Wasser [cite: 2]</span>
              <span className={styles.customBadge}>Luft (oder Gas z. B. CO₂) [cite: 2]</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardHeaderArea}>
              <div className={styles.iconPositive}>&plus;</div>
              <h3 className={styles.cardMainTitle}>Röntgenpositive Kontrastmittel</h3>
            </div>
            <p className={styles.cardParagraphText}>
              Führen zu einer vermehrten Absorption der eintretenden Röntgenstrahlen im Vergleich zum umgebenden Gewebe[cite: 2]. Ursache hierfür ist ihre höhere Ordnungszahl gegenüber dem biologischen Gewebe[cite: 3].
            </p>
            
            <div className={styles.chemicalStructureVisual}>
              <div className={styles.benzeneRingGraphic}>
                <span className={styles.ringCenterText}>Benzol</span>
                <span className={styles.jodAtomLabel} style={{top: '-15px'}}>Jod (Z=53)</span>
                <span className={styles.jodAtomLabel} style={{bottom: '-15px', left: '-10px'}}>Jod</span>
                <span className={styles.jodAtomLabel} style={{bottom: '-15px', right: '-10px'}}>Jod</span>
              </div>
              <div className={styles.structureExplanationBlock}>
                <p className={styles.structureTitleText}>Trijodbenzolring [cite: 4]</p>
                <p className={styles.structureSubtext}>Gemeinsame Grundstruktur aller wasserlöslichen jodhaltigen Kontrastmittel. Das Jod ist die eigentliche kontrastgebende Substanz[cite: 4, 5].</p>
              </div>
            </div>

            <h4 className={styles.elementSubHeading}>Wasserlösliche Kontrastmittel[cite: 4]:</h4>
            <ul className={styles.customBulletList}>
              <li className={styles.bulletListItem}>
                <strong className={styles.accentTextHighlight}>Nicht-ionische Kontrastmittel (z. B. Imeron®, Ultravist®) [cite: 6]:</strong> Standard für die intravasale Anwendung, besser verträglich[cite: 6]. Sie tragen keine elektrische Ladung, sind hydrophiler und besitzen eine deutlich niedrigere Osmolarität als ionische Kontrastmittel[cite: 6].
              </li>
              <li className={styles.bulletListItem}>
                <strong className={styles.accentTextHighlight}>Ionische Kontrastmittel (z. B. Gastrografin®) [cite: 7]:</strong> Für die enterale Anwendung und nicht mehr für die intravasale Anwendung zugelassen[cite: 7]. Weisen eine höhere Osmolarität und ein höheres Nebenwirkungsprofil auf, sind jedoch preisgünstiger als nicht-ionische KM[cite: 7, 8].
              </li>
            </ul>

            <h4 className={styles.elementSubHeading}>Wasserunlösliche Kontrastmittel[cite: 8]:</h4>
            <ul className={styles.customBulletList}>
              <li className={styles.bulletListItem}><strong>Bariumsulfat:</strong> Für die enterale Bildgebung[cite: 8].</li>
              <li className={styles.bulletListItem}><strong>Jodhaltige Öle:</strong> Zur Darstellung der Lymphbahnen (Lymphangiographie) – werden heute nur noch selten verwendet[cite: 8].</li>
            </ul>
          </div>
        </section>

        {/* --- 2. APPLIKATION UND AUSSCHEIDUNG --- */}
        <section id="applikation" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>2. Kontrastmittel-Applikation und -Ausscheidung</h2>
          
          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Jodkonzentration & Volumenrichtwerte</h3>
            <p className={styles.cardParagraphText}>
              Für die meisten intravenösen CT-Untersuchungen ist eine Jodkonzentration von <strong>etwa 300 mg/ml</strong> ausreichend[cite: 9]. Bei CT-Angiographien wird häufig ein höher konzentriertes KM mit <strong>350–375 mg/ml</strong> eingesetzt, um eine stärkere intravasale Kontrastierung zu erreichen[cite: 10].
            </p>

            <div className={styles.volumeTimelineVisual}>
              <div className={styles.timelineHorizontalBar}></div>
              <div className={styles.timelineNodePoint} style={{left: '15%'}}>
                <span className={styles.nodeTopLabel}>LAE-CT [cite: 11]</span>
                <span className={styles.nodeBottomValue}>50–70 ml [cite: 11]</span>
              </div>
              <div className={styles.timelineNodePoint} style={{left: '45%'}}>
                <span className={styles.nodeTopLabel}>CTA-Aorta [cite: 12]</span>
                <span className={styles.nodeBottomValue}>60–80 ml [cite: 12]</span>
              </div>
              <div className={styles.timelineNodePoint} style={{left: '75%'}}>
                <span className={styles.nodeTopLabel}>Abdomen (PV) [cite: 12]</span>
                <span className={styles.nodeBottomValue}>80–120 ml [cite: 12]</span>
              </div>
              <div className={styles.timelineNodePoint} style={{left: '95%'}}>
                <span className={styles.nodeTopLabel}>Biphasisch [cite: 13]</span>
                <span className={styles.nodeBottomValue}>100–140 ml [cite: 13]</span>
              </div>
            </div>

            <p className={styles.cardParagraphTextMuted}>
              <strong>Kinetik-Regel:</strong> Je schneller ein Gefäß maximalkontrastiert werden soll, desto kleiner ist das benötigte Kontrastmittelvolumen; je länger ein Organ homogen kontrastiert werden muss, desto größer ist das Volumen[cite: 13, 14].
            </p>

            <h4 className={styles.elementSubHeading}>Einflussfaktoren auf das benötigte Kontrastmittelvolumen[cite: 15]:</h4>
            <div className={styles.factorsGridContainer}>
              <div className={styles.factorMiniCard}>
                <span className={styles.factorTitle}>Art der Untersuchung [cite: 15]</span>
                <p className={styles.factorDescription}>CTs parenchymatöser Organe (Kopf, Thorax, Abdomen, Becken) benötigen meist größere Volumina und werden langsamer injiziert als CT-Angiographien[cite: 15].</p>
              </div>
              <div className={styles.factorMiniCard}>
                <span className={styles.factorTitle}>Körpergewicht [cite: 16]</span>
                <p className={styles.factorDescription}>Höheres Körpergewicht der Patient*innen erfordert häufig ein höheres Volumen zur ausreichenden Kontrastierung[cite: 16].</p>
              </div>
              <div className={styles.factorMiniCard}>
                <span className={styles.factorTitle}>CA-AKI Risikoprofil [cite: 17]</span>
                <p className={styles.factorDescription}>Bei eingeschränkter Nierenfunktion wird das Volumen angepasst und entsprechend reduziert[cite: 17].</p>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Injektionsrate & Zugangskompatibilität</h3>
            <div className={styles.flowRateGrid}>
              <div className={styles.flowRateCard} style={{borderColor: '#22c55e'}}>
                <span className={styles.gaugeColorBadge} style={{backgroundColor: '#22c55e'}}>18G (Grün) [cite: 18]</span>
                <p className={styles.flowCardDescription}><strong>3–5 ml/s [cite: 18]:</strong> Standard-Injektionsrate für Routine-Untersuchungen und CT-Angiographien[cite: 18].</p>
              </div>
              <div className={styles.flowRateCard} style={{borderColor: '#ec4899'}}>
                <span className={styles.gaugeColorBadge} style={{backgroundColor: '#ec4899'}}>20G (Rosa) [cite: 18]</span>
                <p className={styles.flowCardDescription}><strong>3–4 ml/s[cite: 18]:</strong> Falls 18G nicht möglich ist. Für Untersuchungen mit ausschließlich portalvenöser Phase vollkommen ausreichend[cite: 18, 19].</p>
              </div>
              <div className={styles.flowRateCard} style={{borderColor: '#ef4444'}}>
                <span className={styles.gaugeColorBadge} style={{backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', border: '1px solid #ef4444'}}>Spezial-Indikation [cite: 20]</span>
                <p className={styles.flowCardDescription}><strong>Hohe Rate (5 ml/s) [cite: 20]:</strong> Empfohlen zum Ausschluss einer Lungenarterienembolie (LAE) sowie zur Charakterisierung hyper- oder hypovaskularisierter Tumoren[cite: 20].</p>
              </div>
            </div>
            
            <div className={styles.dangerWarningCallout}>
              <strong>Niedrige Injektionsraten (2,5 ml/s):</strong> Über eine 22G-Braunüle (blau) oder über einen ZVK sollte – wenn möglich – vermieden werden, da sie die Kontrastmittelqualität und die arterielle Abgrenzbarkeit deutlich reduziert[cite: 21].
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Elimination & Umweltrelevanz</h3>
            <p className={styles.cardParagraphText}>
              <strong>Renale Elimination (ca. 90 % über die Niere) [cite: 21]:</strong> Die Plasmahalbwertzeit beträgt 1–3 Stunden[cite: 21]. Nach ca. 2 h sind 50 % ausgeschieden, nach ca. 4 h 75 % und nahezu vollständig nach 24 h[cite: 21].
            </p>
            <p className={styles.cardParagraphText}>
              <strong>Extra-renale Ausscheidung:</strong> Ein geringer Anteil wird über Leber-Galle, Darm und die Speicheldrüsen eliminiert[cite: 21].
            </p>
            <div className={styles.environmentalNoticeBox}>
              <strong>Umweltaspekt [cite: 21]:</strong> Da jodhaltige CT-KM und gadoliniumhaltige MRT-KM in Kläranlagen kaum filtriert werden können, gelangen sie über den Urin direkt ins Abwassersystem und sind im Trinkwasser nachweisbar[cite: 21]. Derzeit existieren keine effektiven Gegenmaßnahmen[cite: 22].
            </div>
          </div>
        </section>

        {/* --- 3. PARAVASAT MANAGEMENT --- */}
        <section id="paravasat" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>3. Paravasat-Management</h2>
          
          <div className={styles.infoCard}>
            <div className={styles.splitEmergencyLayout}>
              <div className={styles.emergencyStepsColumn}>
                <h3 className={styles.cardMainTitle}>Sofortmaßnahmen [cite: 22]</h3>
                <ol className={styles.customOrderedList}>
                  <li className={styles.orderedListItemText}>Injektion sofort stoppen, Zugang belassen und ggf. Aspiration versuchen[cite: 22].</li>
                  <li className={styles.orderedListItemText}>Kanüle entfernen: Erst <strong>nach</strong> erfolgter Aspiration[cite: 23].</li>
                  <li className={styles.orderedListItemText}>Die betroffene Extremität hochlagern[cite: 23].</li>
                  <li className={styles.orderedListItemText}>Kalte Kompresse applizieren (20 min, mehrfach wiederholen)[cite: 23].</li>
                  <li className={styles.orderedListItemText}>Umfang der betroffenen Stelle dokumentieren und mit Stift markieren[cite: 23].</li>
                </ol>
              </div>

              <div className={styles.monitoringFokusColumn}>
                <h4 className={styles.elementSubHeading}>Klinische Überwachung[cite: 23]:</h4>
                <div className={styles.monitoringCheckRow}>
                  <span className={styles.checkIndicator}>&raquo;</span>
                  <p className={styles.checkDetails}><strong>Durchblutung [cite: 23]:</strong> Kapillarfüllzeit (Rekap-Zeit) und Pulse distal der Einstichstelle prüfen[cite: 24].</p>
                </div>
                <div className={styles.monitoringCheckRow}>
                  <span className={styles.checkIndicator}>&raquo;</span>
                  <p className={styles.checkDetails}><strong>Motorik & Sensorik [cite: 24]:</strong> Prüfung auf Parästhesien (Kribbeln) oder motorische Ausfälle[cite: 24].</p>
                </div>
                <div className={styles.monitoringCheckRow}>
                  <span className={styles.checkIndicator}>&raquo;</span>
                  <p className={styles.checkDetails}><strong>Gewebe-Spannung [cite: 24]:</strong> Zunehmende Ödembildung oder livide Verfärbung signalisieren die Gefahr eines Kompartmentsyndroms[cite: 24].</p>
                </div>
                <div className={styles.monitoringCheckRow}>
                  <span className={styles.checkIndicator}>&raquo;</span>
                  <p className={styles.checkDetails}><strong>Hautzustand [cite: 24]:</strong> Engmaschige Kontrolle auf Blasenbildung oder beginnende Nekrosen[cite: 25].</p>
                </div>
              </div>
            </div>

            <div className={styles.patientInstructionBox}>
              <strong>Patientenaufklärung [cite: 25]:</strong> Dem Patienten ist mitzuteilen, dass Schwellung, Rötung und Wärme in den nächsten Stunden zu erwarten und normal sind[cite: 25, 26]. Bei einer Zunahme der Beschwerden, Bläschenbildung, Taubheitsgefühl, Hautverfärbung oder starken Schmerzen muss der Patient <strong>sofort die Notaufnahme</strong> aufsuchen[cite: 26].
            </div>

            <div className={styles.documentationFooterRow}>
              <strong>Verpflichtende Dokumentation [cite: 26]:</strong> Menge, KM-Typ, klinischer Befund und alle eingeleiteten Maßnahmen müssen zwingend schriftlich festgehalten werden[cite: 26].
            </div>
          </div>
        </section>

        {/* --- 4. NEBENWIRKUNGEN --- */}
        <section id="nebenwirkungen" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>4. Nebenwirkungen jodhaltiger KM</h2>
          
          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Chemotoxische Reaktionen [cite: 26]</h3>
            <p className={styles.cardParagraphText}>
              <strong>Definition:</strong> Direkte Wirkung des Kontrastmittels durch die chemischen Eigenschaften der Substanz, rein nicht-immunologisch[cite: 27].
            </p>
            <div className={styles.badgeFlexRow}>
              <span className={styles.symptomBadge}>Wärmegefühl [cite: 27]</span>
              <span className={styles.symptomBadge}>Übelkeit, Erbrechen [cite: 27]</span>
              <span className={styles.symptomBadge}>Vasovagale Reaktion, Arrhythmien [cite: 27]</span>
              <span className={styles.symptomBadge}>Zerebraler Krampfanfall [cite: 27]</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Allergieartige Reaktionen (Pseudoallergie) [cite: 27]</h3>
            <p className={styles.cardParagraphText}>
              Diese Reaktionen ähneln klinisch einer echten Allergie, sind jedoch <strong>nicht IgE-vermittelt</strong>[cite: 28]. Der zugrundeliegende Mechanismus ist eine unspezifische Mastzellaktivierung mit Histaminausschüttung[cite: 28].
            </p>

            {/* Vertikales Stufenmodell der Schweregrade */}
            <div className={styles.severityStairsStructure}>
              <div className={styles.stairTierRow}>
                <div className={styles.stairTierHeader} style={{backgroundColor: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24'}}>Grad 1 (Mild) [cite: 28]</div>
                <div className={styles.stairTierBodyContent}>Juckreiz, leichte Urtikaria, Erythem [cite: 28]</div>
              </div>
              <div className={styles.stairTierRow}>
                <div className={styles.stairTierHeader} style={{backgroundColor: 'rgba(249, 115, 22, 0.2)', color: '#f97316'}}>Grad 2 (Moderat) [cite: 28]</div>
                <div className={styles.stairTierBodyContent}>Deutliche Urtikaria, Bronchospasmus, Larynxödem [cite: 28]</div>
              </div>
              <div className={styles.stairTierRow}>
                <div className={styles.stairTierHeader} style={{backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444'}}>Grad 3 (Schwer) [cite: 28]</div>
                <div className={styles.stairTierBodyContent}>Hypotonie, anaphylaktischer Schock. <em>Sehr selten (0,01 bis 0,04 %)</em>[cite: 28].</div>
              </div>
              <div className={styles.stairTierRow}>
                <div className={styles.stairTierHeader} style={{backgroundColor: '#ef4444', color: '#060708'}}>Grad 4 (Vital) [cite: 28]</div>
                <div className={styles.stairTierBodyContent}>Atemstillstand, Herzstillstand[cite: 28].</div>
              </div>
            </div>

            <h4 className={styles.elementSubHeading}>Management bei anamnestischer Reaktion[cite: 28]:</h4>
            <p className={styles.cardParagraphText}>
              Indiziert ist entweder ein alternatives Bildgebungsverfahren oder die Verwendung einer anderen Substanz (konsequenter <strong>Substanzwechsel!</strong>)[cite: 29].
            </p>
            
            <div className={styles.studyHighlightGraphBox}>
              <p className={styles.studyTitle}>Wirksamkeit des Substanzwechsels (Studie Park et al. 2018)[cite: 29]:</p>
              <div className={styles.barComparisonFlex}>
                <div className={styles.barItemUnit}>
                  <span className={styles.barItemLabel}>Gleiche Substanz wiederholt [cite: 29]</span>
                  <div className={styles.barGraphicTrack}><div className={styles.barGraphicFill} style={{width: '31%', backgroundColor: '#ef4444'}}>31 % erneute Reaktion [cite: 29]</div></div>
                </div>
                <div className={styles.barItemUnit}>
                  <span className={styles.barItemLabel}>Konsequenter Substanzwechsel [cite: 29]</span>
                  <div className={styles.barGraphicTrack}><div className={styles.barGraphicFill} style={{width: '12%', backgroundColor: '#22c55e'}}>12 % Risiko [cite: 29]</div></div>
                </div>
              </div>
            </div>

            <h4 className={styles.elementSubHeading}>Prämedikation (H1-/H2-Blocker & Cortison)[cite: 29]:</h4>
            <p className={styles.cardParagraphText}>
              Die präventive Gabe wird im radiologischen Alltag bei Patient*innen mit früherer allergieartiger Reaktion häufig durchgeführt und wurde bis zur Version 9.0 der ESUR-Leitlinie empfohlen[cite: 30, 31]. In den <strong>aktuellen Leitlinien</strong> wird sie jedoch nicht mehr standardmäßig empfohlen[cite: 29]. Statistische Evidenz: Eine erneute Reaktion tritt trotz zusätzlichem H1-Blocker in 8 % bis 24 % der Fälle auf[cite: 30].
            </p>

            <div className={styles.mythBusterCalloutBox}>
              <strong>Wichtiger Hinweis [cite: 31]:</strong> Die oft genannte „Jodallergie“ existiert nicht[cite: 32]. Jod ist als kleines Molekül nicht allergen – die pseudoallergische Reaktion richtet sich gegen andere Molekülbestandteile des Trägersubstrats[cite: 32].
            </div>
          </div>
        </section>

        {/* --- 5. PC-AKI --- */}
        <section id="pc-aki" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>5. Kontrastmittelassoziierte akute Nierenschädigung (PC-AKI)</h2>
          
          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Terminologie & Definition</h3>
            <p className={styles.cardParagraphText}>
              Der alte Begriff lautete <strong>CIN</strong> (Kontrastmittelinduzierte Nephropathie)[cite: 32, 33]. Der aktuelle Begriff lautet <strong>PC-AKI</strong> (Post-Contrast Acute Kidney Injury / Postkontrastinduzierte akute Nierenschädigung)[cite: 33]. Die Umbenennung erfolgte aufgrund neuer kontrollierter Studien, die belegen, dass ein akutes Nierenversagen gleich häufig nach nativer und nach KM-verstärkter CT auftritt – der Kausalzusammenhang ist daher oft fraglich[cite: 33].
            </p>
            <div className={styles.definitionBorderBox}>
              <strong>ESUR-Definition der PC-AKI [cite: 33, 34]:</strong> Anstieg des Serumkreatinins innerhalb von 48–72 Stunden nach intravaskulärer Kontrastmittelgabe um <strong>&ge;0,3 mg/dl</strong> oder auf das <strong>&ge;1,5-fache</strong>[cite: 34].
            </div>

            <h4 className={styles.elementSubHeading}>Patientenbezogene Risikofaktoren[cite: 34]:</h4>
            <div className={styles.renalPassVisualContainer}>
              <div className={styles.renalPassBox} style={{borderLeftColor: '#ef4444'}}>
                <span className={styles.renalPassBadge} style={{backgroundColor: '#ef4444'}}>First-Pass-Effekt [cite: 34]</span>
                <p className={styles.renalPassDescription}>
                  <strong>eGFR &lt; 45 ml/min/1,73 m² [cite: 34]:</strong> Bei intraarterieller Gabe proximal der Nierenarterien oder bei Intensivpatient*innen[cite: 34]. Das KM gelangt direkt und in maximaler Konzentration in die Nierenstrombahn[cite: 34].
                </p>
              </div>
              <div className={styles.renalPassBox} style={{borderLeftColor: '#fbbf24'}}>
                <span className={styles.renalPassBadge} style={{backgroundColor: '#fbbf24', color: '#060708'}}>Second-Pass-Effekt [cite: 35]</span>
                <p className={styles.renalPassDescription}>
                  <strong>eGFR &lt; 30 ml/min/1,73 m² [cite: 35]:</strong> Bei intravenöser Gabe oder intraarterieller Gabe distal der Nierenarterien[cite: 35, 36]. Das Kontrastmittel wird zunächst im gesamten Körperkreislauf verteilt und erreicht die Niere erst nach erheblicher Verdünnung[cite: 36].
                </p>
              </div>
            </div>
            <p className={styles.cardParagraphText}>
              Ein weiterer patientenbezogener Risikofaktor ist ein bereits bekanntes oder vermutetes akutes Nierenversagen[cite: 36].
            </p>

            <h4 className={styles.elementSubHeading}>Untersuchungsbezogene Risikofaktoren[cite: 36, 37]:</h4>
            <div className={styles.badgeFlexRow}>
              <span className={styles.customBadge}>Intraarterielle Gabe (First-Pass) [cite: 37]</span>
              <span className={styles.customBadge}>Große KM-Mengen [cite: 37]</span>
              <span className={styles.customBadge}>Hochosmolares Röntgen-KM [cite: 37]</span>
              <span className={styles.customBadge}>Mehrfach-Gaben innerhalb von 48–72h [cite: 37]</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Hydrierung, Dialyse & Medikation</h3>
            <p className={styles.cardParagraphText}>
              Eine volumenschonende Hydrierung wird bei einer <strong>eGFR &lt; 30 ml/min/1,73 m²</strong> empfohlen [cite: 37, 38], vorzugsweise intravenös (z. B. 0,9% Kochsalz)[cite: 38, 39]. 
              <br />
              <em>Gängiges Schema [cite: 39]:</em> <strong>100 ml/h</strong> für jeweils 4 Stunden vor und nach der Untersuchung[cite: 39]. Strikte Vorsicht gilt bei manifester Herzinsuffizienz (NYHA 3-4) oder akutem Lungenödem[cite: 39].
            </p>

            <div className={styles.dialysisComparisonGrid}>
              <div className={styles.dialysisBlock}>
                <h4>Jodhaltige KM (CT) [cite: 40]</h4>
                <p><strong>Keine zeitliche Abstimmung</strong> der Dialyse erforderlich[cite: 40]. Da die Niere ohnehin keine Restfunktion zeigt, kann das KM das Organ nicht mehr nennenswert weiter schädigen[cite: 40, 41].</p>
              </div>
              <div className={styles.dialysisBlock} style={{borderColor: '#fbbf24'}}>
                <h4>Gadolinium-KM (MRT) [cite: 41]</h4>
                <p>Die Dialyse sollte <strong>zeitnah nach der Untersuchung</strong> erfolgen, um das Metall rasch aus dem Körper zu eliminieren und das Risiko für eine NSF oder Gewebeablagerung zu minimieren[cite: 42].</p>
              </div>
            </div>

            <p className={styles.cardParagraphText}>
              <strong>Medikamentöse Prophylaxe [cite: 42]:</strong> Es gibt keine nachgewiesene medikamentöse Prophylaxe[cite: 42, 43]. Die frühere klinische Praxis, Acetylcystein (ACC) als Nierenschutz zu verabreichen, ist wissenschaftlich widerlegt[cite: 43].
            </p>

            <h4 className={styles.elementSubHeading}>Metformin-Management[cite: 43]:</h4>
            <ul className={styles.customBulletList}>
              <li className={styles.bulletListItem}><strong>eGFR &gt; 30 [cite: 43]:</strong> Metformin kann uneingeschränkt normal weitergenommen werden[cite: 44].</li>
              <li className={styles.bulletListItem}><strong>eGFR &lt; 30 oder akutes Nierenversagen [cite: 44]:</strong> Absetzen zum Zeitpunkt der Untersuchung für <strong>48 Stunden</strong>[cite: 44]. <em>Hinweis[cite: 44]:</em> Eigentlich ist Metformin bei Patient*innen mit einer eGFR &lt; 30 ohnehin absolut kontraindiziert[cite: 45].</li>
            </ul>
          </div>
        </section>

        {/* --- 6. HYPERTHYREOSE --- */}
        <section id="hyperthyreose" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>6. Hyperthyreose und jodhaltiges KM</h2>
          
          <div className={styles.infoCard}>
            <p className={styles.cardParagraphText}>
              Jodhaltige KM können eine präexistente Hyperthyreose massiv verstärken oder im schlimmsten Fall eine thyreotoxische Krise auslösen, vor allem bei Morbus Basedow, Struma multinodosa oder funktioneller Autonomie[cite: 45, 47].
            </p>
            <p className={styles.cardParagraphTextMuted}>
              <strong>Epidemiologie [cite: 47]:</strong> Tritt meistens frühestens eine Woche nach der KM-Gabe auf[cite: 47, 48]. Es handelt sich um ein extrem seltenes Ereignis (ca. 100 Fälle auf 5 Millionen KM-Gaben)[cite: 48].
            </p>

            <div className={styles.thyroidManagementGrid}>
              <div className={styles.thyroidActionCard}>
                <h5>Latente Hyperthyreose [cite: 48]</h5>
                <p>Gabe von Natriumperchlorat (Irenat®) vor der Untersuchung, gefolgt von einer Fortführung für 7–10 Tage[cite: 48]. Natriumperchlorat blockiert kompetitiv die Jodaufnahme in die Schilddrüsenzellen.</p>
              </div>
              <div className={styles.thyroidActionCard} style={{borderColor: '#ef4444'}}>
                <h5 style={{color: '#ef4444'}}>Manifeste Hyperthyreose [cite: 49]</h5>
                <p>Stellt eine <strong>absolute Kontraindikation</strong> dar[cite: 49]. Einzige Ausnahme sind lebensbedrohliche Notfallsituationen (z. B. Aortendissektion, Polytrauma, Stroke)[cite: 49]. Bei zwingender Notwendigkeit erfolgt eine Kombinationsprophylaxe aus Irenat® und Thiamazol/Carbimazol[cite: 49].</p>
              </div>
            </div>

            <div className={styles.dangerWarningCallout} style={{marginTop: '20px'}}>
              <strong>Schilddrüsenkarzinome (papillär/follikulär) [cite: 49]:</strong> Die Gabe von jodhaltigem KM ist hier strikt verboten, da die massive Jodsättigung der Schilddrüsenzellen eine nachfolgend notwendige Radiojodtherapie über Monate hinweg blockiert und unmöglich macht[cite: 49].
            </div>
          </div>
        </section>

        {/* --- 7. GASTROINTESTINALE DIAGNOSTIK --- */}
        <section id="gastro" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>7. Gastrointestinale Diagnostik</h2>
          
          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Bariumsulfat [cite: 49]</h3>
            <p className={styles.cardParagraphText}>
              Die Applikation erfolgt entweder oral (als Becher zum Trinken) oder rektal (als Einlauf)[cite: 50]. Bariumsulfat wird physiologisch nicht resorbiert und führt nach der Passage zu einem charakteristischen "weißen Stuhl"[cite: 50].
            </p>
            <p className={styles.cardParagraphText}>
              <strong>Die Doppelkontrast-Methode [cite: 50, 51]:</strong> Kombination aus positivem Kontrast (Bariumsulfat benetzt als Schleimhautbeschlag die Wand) und negativem Kontrast (CO₂ / Methylzellulose bläht das Lumen auf und sorgt für Distension)[cite: 51, 52]. Das Ziel ist die optimale Beurteilung des feinen Schleimhautreliefs (z. B. Detektion früher Erosionen oder kleiner Polypen)[cite: 52]. Wird heutzutage nur noch sehr selten eingesetzt[cite: 52].
            </p>

            <h4 className={styles.elementSubHeading} style={{color: '#ef4444'}}>Absolute Kontraindikationen für Bariumsulfat:</h4>
            <ul className={styles.customBulletList}>
              <li className={styles.bulletListItem}>
                <strong>Verdacht auf Perforation oder Anastomoseninsuffizienz [cite: 53]:</strong> Der Austritt von Bariumsulfat in die freie Bauchhöhle verursacht eine lebensbedrohliche, chemische Barium-Peritonitis[cite: 53].
              </li>
              <li className={styles.bulletListItem}>
                <strong>Aspirationsgefahr [cite: 53]:</strong> Bariumsulfat ist nicht lungengängig[cite: 54]. Es löst bei intratrachealer Passage eine fatale Fremdkörperreaktion und ein schweres Lungenödem aus[cite: 54].
              </li>
              <li className={styles.bulletListItem}>
                <strong>Verdacht auf Ileus [cite: 54, 55]:</strong> Barium entzieht dem Darminhalt aktiv Wasser, da es hypoosmolar zum Blut ist[cite: 55]. Das KM kann sich dadurch im stauenden Darm zu steinharten "Barium-Steinen" verdicken, was eine bestehende Obstruktion oder einen Ileus dramatisch verschlimmert[cite: 55, 56].
              </li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Wasserlösliche gastrointestinale KM (z. B. Gastrografin®) [cite: 56]</h3>
            <ul className={styles.customBulletList}>
              <li className={styles.bulletListItem}>
                <strong>Vorteil bei Perforation [cite: 57]:</strong> Verursacht im Falle eines Austritts keine Peritonitis, da die Substanz problemlos direkt vom Bauchfell resorbiert wird[cite: 57].
              </li>
              <li className={styles.bulletListItem}>
                <strong>Therapeutischer Effekt [cite: 58]:</strong> Gastrografin® ist stark hyperosmolar und entzieht der Darmwand Flüssigkeit[cite: 58]. Dies wirkt stark abführend, was bei einem funktionellen Subileus oder Ileus einen therapeutischen, darmentleerenden Effekt erzielen kann[cite: 58].
              </li>
            </ul>
          </div>
        </section>

        {/* --- 8. MRT KONTRASTMITTEL --- */}
        <section id="mrt" className={styles.sectionArea}>
          <h2 className={styles.sectionHeading}>8. MRT-Kontrastmittel (Gadolinium)</h2>
          
          <div className={styles.infoCard}>
            <p className={styles.cardParagraphText}>
              Gadolinium ist ein paramagnetisches Metall[cite: 59]. Da freie Gadolinium-Ionen (Gd³⁺) hochgradig toxisch sind, müssen sie zwingend stabil in einem organischen "Käfig" (Chelat) verpackt sein[cite: 59].
            </p>

            <div className={styles.chelatFormenGrid}>
              <div className={styles.chelatFormCard} style={{borderColor: '#ef4444'}}>
                <span className={styles.statusRuheBadge}>Zulassungsruhen (2018) [cite: 60, 61]</span>
                <h4>Lineare Chelate [cite: 59, 60]</h4>
                <p className={styles.cardParagraphText}>
                  Besitzen eine offenkettige Struktur[cite: 60]. Das Gadolinium-Ion wird weniger fest umschlossen, weshalb eine geringere Stabilität und ein höheres Risiko für freie Gadolinium-Ablagerungen im Gewebe bestehen[cite: 60].
                </p>
                <div className={styles.exceptionBox}>
                  <strong>Ausnahmen [cite: 61]:</strong> Gadoxetsäure (Primovist®) und Gadobensäure (Multihance®) sind vom Zulassungsruhen ausgenommen und dürfen weiterhin für die Leber-MRT eingesetzt werden, da makrozyklische Wirkstoffe dort funktionell weniger geeignet sind[cite: 61]. Primovist® wird mit nur ¼ der üblichen Dosis appliziert (0,025 mmol/kg) und zeichnet sich durch eine schnelle, hälftige biliäre und renale Elimination aus[cite: 61, 62, 63].
                </div>
              </div>

              <div className={styles.chelatFormCard} style={{borderColor: '#22c55e'}}>
                <span className={styles.statusStandardBadge}>Heutiger Standard [cite: 63]</span>
                <h4>Makrozyklische Chelate [cite: 63]</h4>
                <p className={styles.cardParagraphText}>
                  Weisen eine ringförmige Struktur ("Käfig") auf, in der das Ion fest umschlossen ist[cite: 63]. Sie besitzen eine sehr hohe Stabilität und sind der absolute Standard in der heutigen radiologischen Routine (z. B. Gadovist®, Dotarem®)[cite: 63].
                </p>
              </div>
            </div>

            <p className={styles.cardParagraphText} style={{marginTop: '20px'}}>
              <strong>Wirkmechanismus [cite: 63]:</strong> Primär ein T1-Effekt, welcher zu einer Verkürzung der T1-Relaxation und damit zu einem Signalanstieg führt[cite: 64]. Ein T2-Effekt (Verkürzung der T2-Zeit mit Signalabfall) ist in der Regel nur bei einer Hochdosis relevant[cite: 64].
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Gadolinium-assoziierte Nebenwirkungen & Geweberetention</h3>
            
            <h4 className={styles.elementSubHeading}>Nephrogene Systemische Fibrose (NSF)[cite: 64]:</h4>
            <p className={styles.cardParagraphText}>
              Eine schwere, fibrosierende Erkrankung der Haut und inneren Organe[cite: 64]. Der Pathomechanismus beruht auf der Ablagerung von freiem Gadolinium, was zu einer Aktivierung von Fibroblasten und nachfolgend zu einer massiven Kollagenablagerung führt[cite: 65]. Die NSF trat nahezu ausschließlich bei Patienten mit schwerer Niereninsuffizienz (GFR &lt; 30) nach der Anwendung linearer KM auf [cite: 66] und ist im heutigen Status dank makrozyklischer KM extrem selten geworden[cite: 66, 67].
            </p>
            <div className={styles.definitionBorderBox} style={{borderColor: 'rgba(240, 236, 232, 0.2)'}}>
              <strong>ESUR-Leitlinie zur GFR-Bestimmung[cite: 67, 68]:</strong> Eine präoperative Kreatinin-/eGFR-Bestimmung ist indiziert bei bekannter Nierenerkrankung, Diabetes mellitus, arterieller Hypertonie, einem Alter &gt; 70 Jahren oder anderen spezifischen Risikofaktoren – sie ist nicht zwingend bei jedem beschwerdefreien Patienten erforderlich[cite: 68].
            </div>

            <h4 className={styles.elementSubHeading}>Gadolinium-Retention im Gehirn[cite: 68, 69]:</h4>
            <p className={styles.cardParagraphText}>
              Nach mehrfacher Applikation ausschließlich linearer KM können signifikante Hyperintensitäten im nativen T1-Signal in spezifischen Hirnarealen nachgewiesen werden[cite: 69]. Die klinische Relevanz ist bisher vollkommen unbekannt, ein funktionelles Korrelat existiert nicht[cite: 69].
            </p>
            <div className={styles.anatomyLocalizationFlex}>
              <div className={styles.anatomyCard}>
                <span className={styles.anatomyTitle}>Nucleus dentatus [cite: 69, 70]</span>
                <p className={styles.anatomyDescription}>Lokalisiert im tiefen Marklager der Kleinhirnhemisphäre, lateral der übrigen Kleinhirnkerne[cite: 70].</p>
              </div>
              <div className={styles.anatomyCard}>
                <span className={styles.anatomyTitle}>Globus pallidus [cite: 69, 71]</span>
                <p className={styles.anatomyDescription}>Das mediale Segment des Linsenkerns, gelegen lateral der Capsula interna und medial des Putamens[cite: 71].</p>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Leberspezifische KM & Hepatobiliäre Phase</h3>
            <p className={styles.cardParagraphText}>
              Leberspezifische Kontrastmittel werden aktiv über spezifische Transporter von funktionstüchtigen Hepatozyten aufgenommen und anschließend biliär ausgeschieden[cite: 71, 72]. Funktionstüchtiges Leberparenchym zeigt dabei ein kräftiges Enhancement, während alle pathologischen, hepatozytenfreien Läsionen hypointens ausgespart bleiben[cite: 72]. <strong>Primovist® ist das einzige rein hepatozytenspezifische Gd-KM[cite: 72, 73].</strong>
            </p>

            <table className={styles.customDashboardTable}>
              <thead>
                <tr>
                  <th className={styles.tableThCell}>Spezifikation [cite: 73]</th>
                  <th className={styles.tableThCell}>Primovist® [cite: 73]</th>
                  <th className={styles.tableThCell}>Multihance® [cite: 73]</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableTdCell}><strong>Hepatozyten-Aufnahme [cite: 73]</strong></td>
                  <td className={styles.tableTdCell} style={{color: '#22c55e', fontWeight: 'bold'}}>~ 50 % [cite: 73]</td>
                  <td className={styles.tableTdCell}>~ 3–5 % [cite: 73]</td>
                </tr>
                <tr>
                  <td className={styles.tableTdCell}><strong>Spätphase (Hepatobiliär) [cite: 73]</strong></td>
                  <td className={styles.tableTdCell}>nach ~ 20 min [cite: 73]</td>
                  <td className={styles.tableTdCell}>nach ~ 40–120 min [cite: 73]</td>
                </tr>
              </tbody>
            </table>

            <h4 className={styles.elementSubHeading}>Spezifische Indikationen für leberspezifische KM[cite: 74]:</h4>
            <ul className={styles.customBulletList}>
              <li className={styles.bulletListItem}><strong>FNH vs. Adenom:</strong> Die fokale noduläre Hyperplasie (FNH) enthält funktionelle Gallengänge/Hepatozyten und nimmt KM auf, Adenome tun dies meistens nicht[cite: 74].</li>
              <li className={styles.bulletListItem}><strong>HCC-Detektion in der Zirrhose:</strong> Ein gut differenziertes hepatozelluläres Karzinom kann partiell KM aufnehmen[cite: 74].</li>
              <li className={styles.bulletListItem}><strong>Nachweis winziger Metastasen (&lt; 1 cm) [cite: 75]:</strong> In der hepatobiliären Spätphase stellen sich Metastasen als randscharfe, hypointense Läsionen gegenüber dem kontrastreichen Leberparenchym dar, was die Sensitivität dramatisch erhöht[cite: 75].</li>
              <li className={styles.bulletListItem}><strong>Gallengangs-Darstellung:</strong> Zum exakten Nachweis von Gallengangsleckagen[cite: 76].</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Begleitmedikation: Buscopan® [cite: 76]</h3>
            <p className={styles.cardParagraphText}>
              Buscopan® wirkt als kompetitives Parasympatholytikum und lähmt vorübergehend die glatte Muskulatur im Magen-Darm-Trakt[cite: 77]. Das primäre Ziel in der MRT-Bildgebung ist die effektive **Artefaktreduktion** durch Unterdrückung der Darmperistaltik[cite: 77].
            </p>
            <h4 className={styles.elementSubHeading} style={{color: '#ef4444'}}>Absolute Kontraindikationen für Buscopan®[cite: 78]:</h4>
            <div className={styles.badgeFlexRow}>
              <span className={styles.contraBadge}>Glaukom (Alternative: Glucagon) [cite: 78]</span>
              <span className={styles.contraBadge}>Prostatahyperplasie [cite: 78]</span>
              <span className={styles.contraBadge}>Tachyarrhythmie [cite: 78]</span>
              <span className={styles.contraBadge}>Mechanischer Ileus [cite: 78]</span>
            </div>
            <div className={styles.dangerWarningCallout} style={{marginTop: '16px'}}>
              <strong>Wichtige Nebenwirkung & Fahrverbot [cite: 78]:</strong> Die Pupille erweitert sich medikamentös bedingt (Mydriasis) und die Linse verliert die Fähigkeit zur Nah-Akkommodation ("Scharfstellen")[cite: 78]. Es besteht ein striktes **Fahrverbot und Verbot der Bedienung von Maschinen für 1–2 Stunden**[cite: 78].
            </div>
          </div>
        </section>

        {/* --- 9. SCHWANGERSCHAFT UND STILLZEIT --- */}
        <section id="schwangerschaft" className={styles.sectionArea} style={{marginBottom: '0'}}>
          <h2 className={styles.sectionHeading}>9. Umgang mit Schwangeren und Stillenden</h2>
          
          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Schwangerschaft – Grundprinzipien [cite: 78]</h3>
            <p className={styles.cardParagraphText}>
              Es gilt eine **strenge Indikationsstellung**[cite: 79]. Ein KM sollte ausschließlich dann verabreicht werden, wenn die Untersuchung keinesfalls auf die Zeit nach der Entbindung verschoben werden kann, eine KM-freie Alternative (z. B. nativer Ultraschall/MRT) nicht ausreicht und eine detaillierte Aufklärung sowie Dokumentation der Indikationsstellung erfolgt ist[cite: 79].
            </p>

            <div className={styles.pregnancyDoubleGrid}>
              <div className={styles.pregnancyClassCard}>
                <h4>Jodhaltige KM (CT / Angio) [cite: 79]</h4>
                <p><strong>Plazentagängigkeit:</strong> Jodhaltige KM sind vollständig plazentagängig[cite: 79]. Die fetale Schilddrüse kann ab der 10.–12. SSW aktiv Jod aufnehmen[cite: 79].</p>
                <p><strong>Risiko:</strong> Fetale oder neonatale Hypothyreose (theoretisch fundiert, klinisch jedoch selten relevant)[cite: 80]. Ein hoher Jodanteil kann über den **Wolff-Chaikoff-Effekt** die Hormonbildung der Schilddrüse beim Fetus hemmen[cite: 80, 81]. Während Erwachsene diesem Blockade-Effekt über das „Escape-Phänomen“ entkommen, gelingt dies dem Fetus häufig nicht, was zu einer vorübergehenden Entwicklungsstörung führen kann[cite: 81, 82].</p>
                <div className={styles.actionRequiredBadge}>Maßnahme: Neugeborenes nach der Geburt zwingend mittels TSH-Wert auf Schilddrüsenfunktion kontrollieren! [cite: 83]</div>
              </div>

              <div className={styles.pregnancyClassCard}>
                <h4>Gadolinium-haltige KM (MRT) [cite: 83]</h4>
                <p><strong>Plazentagängigkeit:</strong> Passieren ungehindert die Plazentabarriere[cite: 83]. Es erfolgt eine renale Ausscheidung des Fetus direkt in das Fruchtwasser, gefolgt von einer oralen Resorption durch den Fetus zurück in den Kreislauf[cite: 83]. Freies Gadolinium im Fruchtwasser ist potenziell teratogen und toxisch, das genaue Risiko ist jedoch unbekannt[cite: 84].</p>
                <p><strong>Empfehlung:</strong> Nach Möglichkeit vollständig vermeiden, insbesondere im kritischen 1. Trimester[cite: 84, 85]. Wenn eine Applikation unumgänglich ist, sind makrozyklische Gadolinium-KM aufgrund der geringeren Dissoziationsrate zwingend zu bevorzugen[cite: 85].</p>
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardMainTitle}>Stillzeit [cite: 85]</h3>
            <p className={styles.cardParagraphText} style={{color: '#22c55e', fontWeight: 'bold', fontSize: '1.1rem'}}>
              Eine Stillpause ist aus medizinischer Sicht nicht nötig[cite: 85].
            </p>
            <p className={styles.cardParagraphText}>
              Falls die Mutter stark besorgt ist und eine zusätzliche Sicherheit wünscht, kann das Stillen für 24 h pausiert und die abgepumpte Milch verworfen werden[cite: 85].
            </p>
            <div className={styles.lactationStatsContainer}>
              <div className={styles.lactationStatItem}>
                <strong>Jodhaltige KM [cite: 86]</strong>
                <p>Geringe Ausscheidung in die Muttermilch (~0,5 % der maternalen Dosis) bei gleichzeitig minimaler oraler Bioverfügbarkeit des Säuglings[cite: 86].</p>
              </div>
              <div className={styles.lactationStatItem}>
                <strong>Gadolinium-KM [cite: 86]</strong>
                <p>Die Ausscheidung in die Muttermilch ist verschwindend gering (&lt;0,04 % der Dosis), die orale Resorption durch den Säugling ist minimal[cite: 86].</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
