// Carte de connaissances Algèbre issue du cahier fourni.
const ALGEBRA_TREE = {
  chapters: [
    {n:1,title:"Logique et raisonnements",page:1,sections:["Logique","Raisonnements"],
      notions:["algebre.logique.implication","algebre.logique.quantificateurs","logique.raisonnement-direct","logique.contraposée","logique.absurde","logique.recurrence","logique.contre-exemple"]},
    {n:2,title:"Ensembles et applications",page:11,sections:["Ensembles","Applications","Injection, surjection, bijection","Ensembles finis","Relation d'équivalence"],
      notions:["ensembles.operations","applications.definition","algebre.applications.injection","applications.surjection","applications.bijection","ensembles.cardinal","relations.equivalence"]},
    {n:3,title:"Nombres complexes",page:31,sections:["Les nombres complexes","Racines carrées, équation du second degré","Argument et trigonométrie","Nombres complexes et géométrie"],
      notions:["complexes.definition","algebre.complexes.module","complexes.argument","complexes.racines","complexes.geometrie"]},
    {n:4,title:"Arithmétique",page:45,sections:["Division euclidienne et pgcd","Théorème de Bézout","Nombres premiers","Congruences"],
      notions:["arithmetique.divisibilite","arithmetique.pgcd","arithmetique.bezout","arithmetique.premiers","arithmetique.congruences"]},
    {n:5,title:"Polynômes",page:59,sections:["Définitions","Arithmétique des polynômes","Racine d'un polynôme, factorisation","Fractions rationnelles"],
      notions:["polynomes.definition","polynomes.division","polynomes.racines","polynomes.factorisation","polynomes.fractions"]},
    {n:6,title:"Groupes",page:71,sections:["Groupe","Sous-groupes","Morphismes de groupes","Le groupe Z/nZ","Le groupe des permutations Sn"],
      notions:["groupes.definition","groupes.sous-groupes","groupes.morphismes","groupes.znz","groupes.permutations"]},
    {n:7,title:"Systèmes linéaires",page:87,sections:["Introduction aux systèmes","Théorie des systèmes linéaires","Méthode du pivot de Gauss"],
      notions:["systemes.definition","systemes.pivot"]},
    {n:8,title:"Matrices",page:99,sections:["Définition","Multiplication","Inverse : définition","Inverse : calcul","Inverse : matrices élémentaires","Triangulaires, transposition, trace, symétriques"],
      notions:["matrices.definition","matrices.produit","matrices.inverse","matrices.transposee","matrices.trace"]},
    {n:9,title:"L'espace vectoriel R^n",page:123,sections:["Vecteurs de R^n","Exemples d'applications linéaires","Propriétés des applications linéaires"],
      notions:["rn.vecteurs","rn.applications-lineaires"]},
    {n:10,title:"Espaces vectoriels",page:137,sections:["Espace vectoriel","Sous-espace vectoriel","Application linéaire"],
      notions:["ev.definition","ev.sous-espace","ev.application-lineaire"]},
    {n:11,title:"Dimension finie",page:167,sections:["Famille libre","Famille génératrice","Base","Dimension"],
      notions:["dim.famille-libre","dim.famille-generatrice","dim.base","dim.dimension","dim.sous-espaces"]},
    {n:12,title:"Matrices et applications linéaires",page:187,sections:["Rang d'une famille de vecteurs","Applications linéaires en dimension finie","Matrice d'une application linéaire","Changement de bases"],
      notions:["matrices.rang","matrices.application-lineaire","matrices.changement-base"]},
    {n:13,title:"Déterminants",page:211,sections:["Déterminant en dimension 2 et 3","Définition du déterminant","Propriétés","Calculs","Applications"],
      notions:["determinants.definition","determinants.proprietes","determinants.calculs"]}
  ]
};

const ALGEBRA_LESSONS = [
  {
    id:"algebre.logique.implication",domain:"algèbre",chapter:"Logique et raisonnements",section:"Logique",
    title:"Implication P ⇒ Q",source:{type:"exo7",book:"Algèbre",chapter:1,section:"Logique"},prerequisites:[],
    q:"Quand peut-on affirmer qu'une phrase « si P alors Q » est fausse ?",
    intu:"« P ⇒ Q » est une promesse : chaque fois que P est vrai, Q doit l'être. Elle n'est brisée que par un cas où P est vrai et Q faux.",
    def:"P ⇒ Q est fausse exactement lorsque P est vraie et Q est fausse. Elle est équivalente à (non P) ou Q.",
    ex:"« x > 2 ⇒ x² > 4 » est vraie pour tout réel x. Et « 1 = 2 ⇒ 0 = 5 » est vraie : la promesse n'est jamais mise à l'épreuve.",
    cex:"« x² > 4 ⇒ x > 2 » est fausse : x = −3 vérifie x² = 9 > 4 mais pas x > 2.",
    why:"Pourquoi la négation de P ⇒ Q est-elle « P et non Q » ? Pense au seul cas où la promesse est brisée.",
    recall:"Sans regarder le cours : quand P ⇒ Q est-elle fausse ?",
    exercises:[
      {q:"Quelle est la négation de « P ⇒ Q » ?",dim:"reasoning",options:[
        ["P ⇒ non Q","erreur logique","Une implication n'a pas pour négation une autre implication."],
        ["P et non Q",null,""],
        ["non P ⇒ non Q","confusion entre deux concepts","C'est la contraposée de la réciproque."],
        ["non P et Q","erreur logique","Ce cas ne contredit pas la promesse."]],ok:1,
        hints:["Quand la promesse est-elle brisée ?","Il faut P vrai. Que doit-on avoir pour Q ?","Négation de (non P) ou Q : applique De Morgan."],
        sol:"P ⇒ Q ≡ (non P) ou Q ; sa négation est P et (non Q)."},
      {q:"« x² > 4 ⇒ x > 2 » (x réel) : vrai ou faux ?",dim:"reasoning",options:[
        ["Vrai","erreur logique","Teste x = −3 : x² = 9 > 4 mais −3 > 2 est faux."],
        ["Faux : contre-exemple x = −3",null,""]],ok:1,
        hints:["Pour réfuter une implication, que cherche-t-on ?","Cherche x avec x² > 4 mais x ≤ 2.","Essaie un nombre négatif."],sol:"x = −3 est un contre-exemple."},
      {q:"Contraposée de « P ⇒ Q » ?",dim:"comprehension",options:[
        ["Q ⇒ P","confusion entre deux concepts","C'est la réciproque."],
        ["non P ⇒ non Q","confusion entre deux concepts","Ce n'est pas la contraposée."],
        ["non Q ⇒ non P",null,""]],ok:2,
        hints:["Elle est équivalente à P ⇒ Q.","On inverse ET on nie.","Inverse l'ordre et nie chaque terme."],sol:"non Q ⇒ non P est logiquement équivalente à P ⇒ Q."}
    ]
  },
  {
    id:"algebre.logique.quantificateurs",domain:"algèbre",chapter:"Logique et raisonnements",section:"Logique",
    title:"Quantificateurs ∀ ∃ et leur ordre",source:{type:"exo7",book:"Algèbre",chapter:1,section:"Logique"},
    prerequisites:["algebre.logique.implication"],
    q:"∀x ∃y et ∃y ∀x disent-ils la même chose ?",
    intu:"∀x ∃y : « pour chaque x, je peux choisir un y (qui dépend de x) ». ∃y ∀x : « un même y marche pour tous les x ». ",
    def:"∀x∈E, P(x) : P(x) vraie pour tout x de E. ∃x∈E, P(x) : il existe au moins un x de E tel que P(x). Négation : non(∀x P) = ∃x non P ; non(∃x P) = ∀x non P.",
    ex:"∀x∈ℝ ∃y∈ℝ, y > x est vraie (prendre y = x + 1).",
    cex:"∃y∈ℝ ∀x∈ℝ, y > x est fausse : pour x = y on a y > y, faux.",
    why:"Pourquoi y peut-il dépendre de x dans ∀x ∃y, mais pas dans ∃y ∀x ?",
    recall:"Sans regarder : donne la négation de ∀x ∃y P(x,y).",
    exercises:[
      {q:"Négation de « ∀x∈ℝ ∃y∈ℝ, y > x » ?",dim:"reasoning",options:[
        ["∃x ∀y, y ≤ x",null,""],["∀x ∃y, y ≤ x","erreur logique","Tu as nié le contenu sans changer les quantificateurs."],
        ["∃x ∃y, y ≤ x","erreur logique","Le ∃y doit devenir ∀y."]],ok:0,
        hints:["Nie quantificateur par quantificateur.","∀ devient ∃, ∃ devient ∀.","Puis nie « y > x »."],sol:"∃x ∀y, y ≤ x."},
      {q:"« ∃y∈ℝ ∀x∈ℝ, y > x » est :",dim:"transfer",options:[
        ["Vraie (ℝ est infini)","confusion entre deux concepts","Le même y ne peut pas dépasser tous les x."],
        ["Fausse : prendre x = y",null,""]],ok:1,
        hints:["Que se passe-t-il pour x = y ?","y > y est-il possible ?","Il n'existe pas de plus grand réel."],sol:"Pour x = y, y > y est faux."}
    ]
  },
  {
    id:"algebre.applications.injection",domain:"algèbre",chapter:"Ensembles et applications",section:"Applications",
    title:"Application injective",source:{type:"exo7",book:"Algèbre",chapter:2,section:"Applications"},
    prerequisites:["algebre.logique.quantificateurs"],
    q:"Comment dire qu'une application ne « confond » jamais deux éléments ?",
    intu:"Chaque élément d'arrivée est atteint au plus une fois.",
    def:"f : E → F est injective si ∀x,x'∈E, f(x) = f(x') ⇒ x = x'.",
    ex:"exp : ℝ → ℝ est injective. f : ℝ → ℝ, x ↦ 2x+1 aussi.",
    cex:"x ↦ x² sur ℝ n'est pas injective : f(−1) = f(1) avec −1 ≠ 1.",
    why:"Pourquoi montre-t-on l'injectivité en partant de f(x) = f(x') ?",
    recall:"Sans regarder : définis une application injective.",
    exercises:[
      {q:"Quelle est la définition de l'injectivité ?",dim:"comprehension",options:[
        ["∀x,x', x = x' ⇒ f(x) = f(x')","erreur de définition","C'est une propriété générale d'une application."],
        ["∀x,x', f(x) = f(x') ⇒ x = x'",null,""],
        ["∀y ∃x, f(x) = y","confusion entre deux concepts","C'est la surjectivité."]],ok:1,
        hints:["Deux images égales imposent quoi ?","Ne confonds pas avec « tout y est atteint ».","Lis : mêmes images ⇒ mêmes antécédents."],sol:"f(x) = f(x') ⇒ x = x'."},
      {q:"f : ℝ → ℝ, f(x) = x² − x est-elle injective ?",dim:"calculation",options:[
        ["Oui","erreur logique","f(0) = 0 et f(1) = 0."],
        ["Non : f(0) = f(1) = 0",null,""]],ok:1,
        hints:["Cherche deux valeurs distinctes de même image.","Résous x² − x = 0.","x = 0 et x = 1."],sol:"f(0) = f(1) = 0 avec 0 ≠ 1."}
    ]
  },
  {
    id:"algebre.complexes.module",domain:"algèbre",chapter:"Nombres complexes",section:"Les nombres complexes",
    title:"Module et conjugué",source:{type:"exo7",book:"Algèbre",chapter:3,section:"Les nombres complexes"},prerequisites:[],
    q:"Comment mesurer la « taille » d'un nombre complexe ?",intu:"z = a + ib est le point (a, b) du plan ; son module est la distance à l'origine.",
    def:"Si z = a + ib, z̄ = a − ib et |z| = √(a² + b²). On a z·z̄ = |z|².",
    ex:"|3 + 4i| = 5. Et (3+4i)(3−4i) = 25.",
    cex:"|a + ib| n'est pas |a| + |b| : |1 + i| = √2 ≠ 2.",
    why:"Pourquoi z·z̄ est-il toujours un réel positif ?",recall:"Sans regarder : que vaut z·z̄ ?",
    exercises:[
      {q:"|3 + 4i| = ?",dim:"calculation",options:[
        ["7","confusion entre deux concepts","Tu as additionné |a| + |b|."],
        ["25","erreur de calcul","Il manque la racine carrée."],
        ["5",null,""]],ok:2,hints:["Pense à la distance à l'origine.","√(a² + b²).","9 + 16 = 25."],sol:"√25 = 5."},
      {q:"(1 + i)² = ?",dim:"calculation",options:[
        ["2","erreur de calcul","Tu as oublié le double produit."],
        ["2i",null,""],
        ["1 + 2i","erreur de calcul","N'oublie pas i² = −1."]],ok:1,
        hints:["Développe.","1 + 2i + i².","i² = −1."],sol:"1 + 2i − 1 = 2i."}
    ]
  }
];
