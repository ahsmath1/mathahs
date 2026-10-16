COMPAGNON MATHS V4 — PRÉPARATION CONCOURS / EXAMEN L1

OBJECTIF
Application web locale pour travailler l’algèbre et l’analyse de L1 avec une routine quotidienne d’une heure, un suivi multidimensionnel et des révisions espacées.

CONTENU
- Parcours de notions, prérequis et carte des chapitres.
- Cours guidé : intuition, définition rigoureuse, exemple, contre-exemple, question de réflexion.
- Exercices à choix, indices progressifs et correction explicative.
- Rappel actif, diagnostic, carnet d’erreurs et statistiques.
- Répétition espacée J+1, J+3, J+7, J+14, J+30.
- Nouveau plan quotidien de 60 minutes avec cases à cocher et notes.
- Sauvegarde/restauration JSON, thème clair/sombre, interface responsive.
- Deux PDF de référence dans ressources/ : livre-algebre-1.pdf et livre-analyse-1.pdf.

DÉMARRAGE
1. Extraire le ZIP dans un dossier.
2. Ouvrir un terminal dans le dossier compagnon_maths_v2.
3. Exécuter : python -m http.server 8000
4. Ouvrir http://localhost:8000 dans le navigateur.
Le service worker et le mode PWA exigent HTTP(S), pas file://.

UTILISATION SUR TÉLÉPHONE
Pour l’installation PWA et le mode hors ligne, héberger le dossier sur un site HTTPS (par exemple GitHub Pages), puis ajouter le site à l’écran d’accueil.

IMPORTANT SUR LA FIDÉLITÉ AU COURS
Les PDF sont inclus comme sources de référence. Le corpus interactif est une couche pédagogique partielle : il ne remplace pas la lecture systématique des cours originaux ni leurs séries complètes d’exercices. Pour chaque séance, travaillez également un énoncé original du chapitre étudié. Les contenus générés ou simplifiés dans l’application ne doivent pas être confondus avec le texte exact du manuel.

DONNÉES ET SAUVEGARDE
Les progrès sont enregistrés dans le stockage local du navigateur. Exportez régulièrement le JSON depuis « Données » pour transférer ou restaurer vos progrès sur un autre appareil.
