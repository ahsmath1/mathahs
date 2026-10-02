# Compagnon Maths V3 — Algèbre & Analyse

Plateforme web locale, offline-first, destinée à l'étude progressive des mathématiques de niveau supérieur.

## Périmètre

### Algèbre
1. Logique et raisonnements
2. Ensembles et applications
3. Nombres complexes
4. Arithmétique
5. Polynômes
6. Groupes
7. Systèmes linéaires
8. Matrices
9. L'espace vectoriel R^n
10. Espaces vectoriels
11. Dimension finie
12. Matrices et applications linéaires
13. Déterminants

### Analyse
1. Nombres réels
2. Suites
3. Limites et fonctions continues
4. Fonctions usuelles
5. Dérivée
6. Intégrales
7. Développements limités
8. Courbes paramétrées
9. Équations différentielles

La V3 conserve la carte structurée de la V2 et ajoute un corpus pédagogique supplémentaire couvrant les chapitres précédemment « structure seule ».

## Architecture pédagogique

Prérequis → découverte → intuition → définition rigoureuse → exemple → contre-exemple → question « pourquoi ? » → exercices → indices → correction → suivi multidimensionnel → révision espacée.

Les dimensions suivies sont :
- compréhension
- calcul
- raisonnement
- démonstration
- transfert

## Fonctionnalités

- Parcours par notions et prérequis
- Carte Algèbre / Analyse
- Corpus de leçons enrichi
- Exercices à choix avec erreurs typées
- Indices progressifs
- Corrections explicatives
- Carnet d'erreurs
- Contre-exemples
- Diagnostic
- Maîtrise en 5 dimensions
- Révision espacée
- Recherche dans le corpus pédagogique
- Statistiques locales
- Export/import JSON
- PWA et fonctionnement hors connexion après mise en cache
- Interface responsive

## Important

La V3 est nettement plus riche que la V2, mais elle ne prétend pas constituer à elle seule un manuel universitaire exhaustif. La carte complète peut contenir davantage de notions que celles qui possèdent déjà une séquence pédagogique détaillée. L'interface distingue donc implicitement le corpus réellement étudiable de la simple structure de programme.

## Lancer

python -m http.server 8000

Puis :
http://localhost:8000

Le service worker nécessite HTTP(S), pas file://.
