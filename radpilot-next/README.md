# RadPilot – Setup Guide

## Schritt 1: Node.js installieren
Gehe zu https://nodejs.org und lade die **LTS-Version** herunter und installiere sie.

## Schritt 2: GitHub Account erstellen
Gehe zu https://github.com und erstelle ein kostenloses Konto.

## Schritt 3: Diesen Ordner hochladen
1. Gehe zu https://github.com/new
2. Repository-Name: `radpilot`
3. Auf "Create repository" klicken
4. Dann "uploading an existing file" klicken
5. Den gesamten Inhalt dieses Ordners hochladen

## Schritt 4: Vercel verbinden
1. Gehe zu https://vercel.com und melde dich mit GitHub an
2. "New Project" → dein `radpilot` Repository auswählen
3. "Deploy" klicken → fertig! Du bekommst sofort eine URL

## Schritt 5: Eigene Domain verknüpfen
1. Domain kaufen (z.B. https://namecheap.com)
2. In Vercel: Projekt → Settings → Domains
3. Deine Domain eingeben und den DNS-Anweisungen folgen

## Lokale Entwicklung
```bash
npm install
npm run dev
# → öffne http://localhost:3000
```

## Neue Seite hinzufügen (z.B. Neuroradiologie)
Erstelle einfach: `app/fachgebiete/neuroradiologie/page.js`
→ Claude hilft dir dabei!

## Projektstruktur
```
radpilot/
├── app/
│   ├── layout.js          # HTML-Rahmen & Fonts
│   ├── page.js            # Startseite
│   └── globals.css        # Globale Styles
├── components/
│   ├── Hero.jsx           # Hero-Bereich
│   ├── LernPfade.jsx      # 3 Lernpfade
│   ├── Fachgebiete.jsx    # 8 Fachgebiete
│   └── Footer.jsx         # Footer
└── public/
    └── hero.png           # Hintergrundbild
```
