# Portfolio UX/UI Designer — Fatou Thiam

Portfolio professionnel minimaliste, responsive et accessible développé en **HTML5**, **CSS3** et **JavaScript vanilla**, pensé pour être ouvert et personnalisé directement dans **Visual Studio Code**.

## Organisation des fichiers

```text
portfolio-fatou/
├── index.html          # Structure sémantique complète du portfolio
├── style.css           # Design system, typographie, grilles responsive et animations
├── script.js           # Données centralisées (projets, certifications, contact) et interactions
├── assets/
│   ├── images/         # Photo de profil et visuels de projets (remplaçables)
│   ├── certifications/ # Emplacement pour vos certificats scannés / exportés
│   └── cv/             # Emplacement pour votre CV au format PDF
└── README.md           # Guide de personnalisation dans Visual Studio Code
```

## Ouvrir et tester dans Visual Studio Code

1. Ouvrez le dossier du projet dans **Visual Studio Code**.
2. Option rapide : faites un clic droit sur `index.html` puis cliquez sur **Open with Live Server** (extension gratuite *Live Server* de Ritwick Dey).
3. Vous pouvez aussi simplement double-cliquer sur `index.html` dans votre explorateur de fichiers pour l'ouvrir dans Chrome, Edge, Firefox ou Safari.

## Guide de personnalisation rapide

### 1. Remplacer votre photo de profil et vos visuels Figma
- **Photo de profil** : remplacez le fichier `assets/images/portrait-fatou.jpg` par votre propre photo (format portrait 3:4 recommandé).
- **Couvertures des projets** : remplacez :
  - `assets/images/projet-senegal-vide-dressing.jpg`
  - `assets/images/projet-moytu-net.jpg`
  - `assets/images/projet-mairie-connect.jpg`
- **Écrans Figma détaillés dans les études de cas** : ouvrez `script.js`, repérez le tableau `PROJECTS` et ajoutez les chemins de vos exports Figma dans `figmaFrames` ainsi que l'URL de votre prototype dans `prototypeUrl`.

### 2. Ajouter votre CV PDF
1. Déposez votre CV dans `assets/cv/` (exemple : `CV_Fatou_Thiam_UX_UI.pdf`).
2. Dans `script.js`, modifiez `PORTFOLIO_CONFIG` :
   ```js
   cvFile: './assets/cv/CV_Fatou_Thiam_UX_UI.pdf',
   cvReady: true,
   ```

### 3. Renseigner vos vraies coordonnées (e-mail, LinkedIn, WhatsApp)
Ouvrez `script.js` et complétez l'objet `PORTFOLIO_CONFIG` tout en haut du fichier :
- `email`: votre adresse e-mail professionnelle
- `linkedinUrl`: l'URL de votre profil LinkedIn
- `whatsappNumber`: votre numéro au format international sans espaces ni `+` (ex. `221770000000`)

### 4. Intégrer vos certificats et liens de vérification
1. Déposez les images de vos certificats dans `assets/certifications/`.
2. Dans `script.js`, mettez à jour le tableau `CERTIFICATIONS` avec le chemin de chaque image (`image`) et son lien officiel (`verifyUrl`).

## Direction artistique & Accessibilité

- **Palette (signature autour du rouge carmin `#8C0410`)** : Toile porcelaine chaude `#FAF6F6`, Surfaces `#FFFFFF`, Bleu nuit `#141B2E`, Secondaires `#4A4453` / `#6E6572`, Accents carmin `#8C0410`, rubis `#C81D32` et grenat `#4A0209`.
- **Mockups haute fidélité** : `assets/images/projet-senegal-vide-dressing.jpg`, `assets/images/projet-moytu-net.jpg`, `assets/images/projet-mairie-connect.jpg` et `assets/images/mockup-design-system.jpg`.
- **Typographie** : `Manrope` (titres) et `DM Sans` (corps de texte).
- **Accessibilité** : contrastes WCAG AA, navigation complète au clavier, focus visible, modales ARIA piégeant le focus, et respect de `prefers-reduced-motion`.
