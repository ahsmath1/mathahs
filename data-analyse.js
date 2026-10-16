const ANALYSE_TREE = {
  chapters: [
    {n:1,title:"Nombres réels",page:1,sections:["L'ensemble Q","Propriétés de R","Densité de Q dans R","Borne supérieure"],notions:["analyse.reels.q","analyse.reels.proprietes","analyse.reels.densite","analyse.reels.borne-sup"]},
    {n:2,title:"Suites",page:15,sections:["Définitions","Limites","Exemples remarquables","Théorème de convergence","Suites récurrentes"],notions:["analyse.suites.definition","analyse.suites.limites","analyse.suites.geometriques","analyse.suites.convergence","analyse.suites.recurrentes"]},
    {n:3,title:"Limites et fonctions continues",page:37,sections:["Notions de fonction","Limites","Continuité en un point","Continuité sur un intervalle","Fonctions monotones et bijections"],notions:["analyse.fonctions.notions","analyse.fonctions.limites","analyse.fonctions.continuite","analyse.fonctions.tvi","analyse.fonctions.bijection"]},
    {n:4,title:"Fonctions usuelles",page:59,sections:["Logarithme et exponentielle","Fonctions circulaires inverses","Fonctions hyperboliques"],notions:["analyse.usuelles.log-exp","analyse.usuelles.arcsin-arccos-arctan","analyse.usuelles.hyperboliques"]},
    {n:5,title:"Dérivée",page:69,sections:["Dérivée","Calcul des dérivées","Extremum local, Rolle","Accroissements finis"],notions:["analyse.derivee.definition","analyse.derivee.calcul","analyse.derivee.rolle","analyse.derivee.taf"]},
    {n:6,title:"Intégrales",page:85,sections:["Intégrale de Riemann","Propriétés","Primitive","IPP – Changement de variable","Fractions rationnelles"],notions:["analyse.integrales.riemann","analyse.integrales.proprietes","analyse.integrales.primitives","analyse.integrales.ipp","analyse.integrales.fractions"]},
    {n:7,title:"Développements limités",page:109,sections:["Formules de Taylor","DL au voisinage d'un point","Opérations sur les DL","Applications"],notions:["analyse.dl.taylor","analyse.dl.definition","analyse.dl.operations","analyse.dl.applications"]},
    {n:8,title:"Courbes paramétrées",page:127,sections:["Notions de base","Tangente","Points singuliers – Branches infinies","Plan d'étude","Polaires : théorie","Polaires : exemples"],notions:["analyse.courbes.parametrees","analyse.courbes.tangente","analyse.courbes.singuliers","analyse.courbes.polaires"]},
    {n:9,title:"Équations différentielles",page:165,sections:["Définition","Linéaire du 1er ordre","Linéaire du 2nd ordre à coefficients constants","Problèmes conduisant à des EDO"],notions:["analyse.edo.definition","analyse.edo.premier-ordre","analyse.edo.second-ordre"]}
  ]
};

const ANALYSE_LESSONS = [
  {
    id:"analyse.suites.convergence",domain:"analyse",chapter:"Suites",section:"Théorème de convergence",
    title:"Suite monotone bornée",source:{type:"exo7",book:"Analyse",chapter:2,section:"Théorème de convergence"},
    prerequisites:["analyse.reels.borne-sup"],
    q:"Une suite bornée converge-t-elle toujours ?",
    intu:"Si une suite ne fait que monter et ne peut pas dépasser un plafond, elle s'accumule vers une limite.",
    def:"Une suite croissante et majorée converge. Idem décroissante et minorée.",
    ex:"uₙ = 1 − 1/n (n ≥ 1) est croissante et majorée par 1 : elle converge (vers 1).",
    cex:"uₙ = (−1)ⁿ est bornée mais ne converge pas : la monotonie manque.",
    why:"Pourquoi ce théorème est-il faux dans ℚ ?",recall:"Sans regarder : énonce le théorème de convergence monotone.",
    exercises:[
      {q:"uₙ = (−1)ⁿ, bornée : converge-t-elle ?",dim:"reasoning",options:[
        ["Oui, car bornée","confusion entre deux concepts","Bornée n'implique pas convergente."],
        ["Non : valeurs 1 et −1 alternent",null,""]],ok:1,
        hints:["Regarde les termes pairs puis impairs.","Y a-t-il une seule limite possible ?","Deux sous-suites aux limites différentes."],sol:"u₂ₙ → 1 et u₂ₙ₊₁ → −1, donc pas de limite."},
      {q:"uₙ = 1 − 1/n (n ≥ 1) : le théorème s'applique-t-il ?",dim:"transfer",options:[
        ["Oui : croissante et majorée par 1",null,""],
        ["Non : elle n'est pas décroissante","erreur de définition","Il suffit d'être monotone."],
        ["Non : elle n'est pas minorée","erreur de définition","Il faut un majorant pour une suite croissante."]],ok:0,
        hints:["Vérifie le sens de variation.","Calcule uₙ₊₁ − uₙ.","1/n − 1/(n+1) > 0 ; et 1 − 1/n < 1."],sol:"Croissante et majorée par 1, donc convergente."}
    ]
  },
  {
    id:"analyse.fonctions.continuite",domain:"analyse",chapter:"Limites et fonctions continues",section:"Continuité en un point",
    title:"Continuité en un point",source:{type:"exo7",book:"Analyse",chapter:3,section:"Continuité en un point"},
    prerequisites:["analyse.suites.limites"],
    q:"Comment définir précisément « tracer sans lever le crayon » ?",intu:"Quand x est très proche de a, f(x) doit être très proche de f(a).",
    def:"f est continue en a si ∀ε>0 ∃δ>0 ∀x∈I, |x − a| < δ ⇒ |f(x) − f(a)| < ε.",
    ex:"x ↦ x² est continue en tout point.",
    cex:"La partie entière E est discontinue en 1 : E(1) = 1 mais E(x) = 0 pour x un peu inférieur à 1.",
    why:"Pourquoi δ dépend-il de ε ?",recall:"Sans regarder : écris la définition ε-δ de la continuité en a.",
    exercises:[
      {q:"Quelle est la bonne définition de la continuité en a ?",dim:"comprehension",options:[
        ["∃δ>0 ∀ε>0, …","erreur logique","Ordre des quantificateurs inversé."],
        ["∀ε>0 ∃δ>0 ∀x, |x−a|<δ ⇒ |f(x)−f(a)|<ε",null,""],
        ["∀δ>0 ∃ε>0, …","erreur logique","Les rôles sont inversés."]],ok:1,
        hints:["Qui est donné en premier ?","On se donne ε, on cherche δ.","∀ε ∃δ ∀x."],sol:"∀ε>0 ∃δ>0 ∀x, |x−a|<δ ⇒ |f(x)−f(a)|<ε."},
      {q:"La partie entière E est-elle continue en 1 ?",dim:"reasoning",options:[
        ["Oui, car E(1) = 1","erreur logique","Il faut comparer avec la limite à gauche."],
        ["Oui, car E est croissante","confusion entre deux concepts","Monotone n'implique pas continue."],
        ["Non : limite à gauche 0, à droite 1",null,""]],ok:2,
        hints:["Calcule E(0,99).","Limite à gauche en 1 ?","Gauche = 0, droite = 1 = E(1)."],sol:"lim₁⁻ E = 0 ≠ E(1) = 1."}
    ]
  }
];
