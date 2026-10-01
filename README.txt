# Compagnon Maths V2

Application web locale d'étude en Algèbre & Analyse L1.

## Contenu

- `index.html` : point d'entrée
- `styles.css` : interface responsive
- `app.js` : moteur de progression, maîtrise 5D, révisions, erreurs, diagnostic, export/import
- `data-algebra.js` : carte Algèbre + notions développées fournies
- `data-analyse.js` : carte Analyse + notions développées fournies
- `data-exercises.js` : exercices Exo7 référencés
- `data-counterexamples.js` : contre-exemples interactifs
- `manifest.json` + `sw.js` : base PWA/offline

## Lancer

### Méthode recommandée
Avec Python installé, dans ce dossier :

    python -m http.server 8000

Puis ouvrir :

    http://localhost:8000

Le service worker/PWA ne fonctionne pas correctement avec `file://`; utilisez donc un petit serveur local.

### Sur téléphone
Le dossier peut être publié sur GitHub Pages ou un autre hébergement statique HTTPS. Ensuite, ouvrir le site avec Safari/Chrome et l'ajouter à l'écran d'accueil.

## Important

La carte des 22 chapitres est présente, mais le texte fourni dans la réponse source ne contenait pas réellement tout le contenu pédagogique annoncé. Cette archive n'invente donc pas les chapitres manquants : les entrées non développées apparaissent comme « structure seule ».

Le ZIP contient une version fonctionnelle du prototype avec export/import JSON et base PWA ajoutés pour rendre l'ensemble plus utilisable.
