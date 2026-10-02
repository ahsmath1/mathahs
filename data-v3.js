const V3_LESSONS=[
  {
    "id": "v3.ensembles.operations",
    "domain": "algèbre",
    "chapter": "Ensembles et applications",
    "section": "Opérations sur les ensembles",
    "title": "Opérations sur les ensembles",
    "prerequisites": [
      "algebre.logique.implication"
    ],
    "q": "Que signifie x ∈ A ∩ B ?",
    "intu": "Une intersection garde seulement les éléments communs aux deux ensembles.",
    "def": "A ∩ B = {x | x∈A et x∈B}. A ∪ B = {x | x∈A ou x∈B}. Le complémentaire dépend de l'ensemble de référence.",
    "ex": "Si A={1,2,3} et B={2,3,4}, alors A∩B={2,3} et A∪B={1,2,3,4}.",
    "cex": "A∪B n'est pas constitué uniquement des éléments communs : ce serait A∩B.",
    "why": "Pourquoi le « et » correspond-il à l'intersection alors que le « ou » correspond-il à l'union ?",
    "recall": "Donne une caractérisation de x∈A∩B.",
    "exercises": [
      {
        "q": "A={1,2,3}, B={2,3,4}. A∩B vaut :",
        "dim": "comprehension",
        "options": [
          [
            "{1,2,3,4}",
            "confusion union/intersection",
            "L'union rassemble tous les éléments."
          ],
          [
            "{2,3}",
            null,
            ""
          ],
          [
            "{1,4}",
            "erreur de représentation",
            "Ce sont les éléments exclusifs."
          ]
        ],
        "ok": 1,
        "hints": [
          "Cherche les éléments présents dans les deux.",
          "2 et 3 apparaissent dans A et B.",
          "L'intersection est {2,3}."
        ],
        "sol": "A∩B={2,3}."
      }
    ]
  },
  {
    "id": "v3.applications.bijection",
    "domain": "algèbre",
    "chapter": "Ensembles et applications",
    "section": "Injection, surjection, bijection",
    "title": "Injection, surjection et bijection",
    "prerequisites": [
      "algebre.applications.injection"
    ],
    "q": "Quelle différence entre injection et surjection ?",
    "intu": "Injection : deux antécédents différents ne donnent pas la même image. Surjection : chaque élément d'arrivée possède au moins un antécédent.",
    "def": "f:E→F est injective si f(x)=f(y)⇒x=y. Elle est surjective si ∀y∈F, ∃x∈E tel que f(x)=y. Bijection = injection et surjection.",
    "ex": "f:R→R, f(x)=2x+1 est bijective.",
    "cex": "f:R→R, f(x)=x² n'est pas injective car f(1)=f(-1).",
    "why": "Pourquoi une bijection permet-elle de définir une application réciproque ?",
    "recall": "Énonce la définition d'une injection.",
    "exercises": [
      {
        "q": "f:R→R, f(x)=x² est-elle injective ?",
        "dim": "reasoning",
        "options": [
          [
            "Oui",
            "confusion",
            "1 et -1 ont la même image."
          ],
          [
            "Non : f(1)=f(-1)",
            "",
            ""
          ]
        ],
        "ok": 1,
        "hints": [
          "Cherche deux nombres différents ayant la même image.",
          "Compare 1 et -1.",
          "Les deux images valent 1."
        ],
        "sol": "Non, car f(1)=f(-1)=1 alors que 1≠-1."
      }
    ]
  },
  {
    "id": "v3.complexes.definition",
    "domain": "algèbre",
    "chapter": "Nombres complexes",
    "section": "Les nombres complexes",
    "title": "Forme algébrique d'un complexe",
    "prerequisites": [
      "algebre.logique.implication"
    ],
    "q": "Pourquoi introduire un nombre i tel que i²=-1 ?",
    "intu": "Cela permet de résoudre des équations comme x²+1=0 qui n'ont pas de solution réelle.",
    "def": "Un complexe s'écrit z=a+bi avec a,b∈R et i²=-1. a est sa partie réelle et b sa partie imaginaire.",
    "ex": "z=3-2i a pour partie réelle 3 et partie imaginaire -2.",
    "cex": "La partie imaginaire de 3-2i est -2, pas -2i.",
    "why": "Comment additionner et multiplier deux complexes en utilisant i²=-1 ?",
    "recall": "Écris la forme algébrique générale d'un complexe.",
    "exercises": [
      {
        "q": "Partie réelle de z=4-3i ?",
        "dim": "comprehension",
        "options": [
          [
            "4",
            null,
            ""
          ],
          [
            "-3",
            "erreur",
            "-3 est la partie imaginaire."
          ],
          [
            "3i",
            "erreur",
            "La partie imaginaire est un réel."
          ]
        ],
        "ok": 0,
        "hints": [
          "Repère le coefficient sans i.",
          "a+bi : a est la partie réelle.",
          "Ici a=4."
        ],
        "sol": "Re(z)=4."
      }
    ]
  },
  {
    "id": "v3.arithmetique.pgcd",
    "domain": "algèbre",
    "chapter": "Arithmétique",
    "section": "Division euclidienne et pgcd",
    "title": "PGCD et algorithme d'Euclide",
    "prerequisites": [
      "algebre.logique.implication"
    ],
    "q": "À quoi sert le PGCD ?",
    "intu": "Il donne le plus grand diviseur commun et permet notamment de simplifier une fraction.",
    "def": "Le PGCD de a et b est le plus grand entier positif qui divise à la fois a et b. L'algorithme d'Euclide utilise les divisions euclidiennes successives.",
    "ex": "PGCD(84,30): 84=2×30+24, 30=1×24+6, 24=4×6, donc PGCD=6.",
    "cex": "Le reste final non nul n'est pas le PGCD : c'est le dernier reste non nul.",
    "why": "Pourquoi peut-on remplacer PGCD(a,b) par PGCD(b,r) lorsque a=bq+r ?",
    "recall": "Quel est le principe de l'algorithme d'Euclide ?",
    "exercises": [
      {
        "q": "PGCD(18,12) vaut :",
        "dim": "calculation",
        "options": [
          [
            "2",
            "erreur",
            "2 est un diviseur commun mais pas le plus grand."
          ],
          [
            "6",
            null,
            ""
          ],
          [
            "12",
            "erreur",
            "12 ne divise pas 18."
          ],
          [
            "36",
            "erreur",
            "Le PGCD ne peut pas dépasser le plus petit nombre non nul."
          ]
        ],
        "ok": 1,
        "hints": [
          "Liste les diviseurs communs.",
          "6 divise 18 et 12.",
          "Aucun diviseur commun supérieur à 6 ne convient."
        ],
        "sol": "PGCD(18,12)=6."
      }
    ]
  },
  {
    "id": "v3.polynomes.division",
    "domain": "algèbre",
    "chapter": "Polynômes",
    "section": "Arithmétique des polynômes",
    "title": "Division euclidienne des polynômes",
    "prerequisites": [
      "algebre.logique.implication"
    ],
    "q": "Que cherche-t-on dans une division euclidienne de polynômes ?",
    "intu": "Comme pour les entiers, on cherche quotient et reste avec un degré du reste strictement inférieur à celui du diviseur.",
    "def": "Pour A et B non nuls, il existe un unique couple (Q,R) tel que A=BQ+R et deg(R)<deg(B).",
    "ex": "Pour diviser x²-1 par x-1, on obtient Q=x+1 et R=0.",
    "cex": "Le reste ne peut pas avoir un degré supérieur ou égal à celui du diviseur.",
    "why": "Pourquoi un reste nul signifie-t-il que B divise A ?",
    "recall": "Énonce la condition sur le degré du reste.",
    "exercises": [
      {
        "q": "Si A=BQ+R avec R=0, alors :",
        "dim": "comprehension",
        "options": [
          [
            "B ne divise pas A",
            "erreur",
            "R=0 signifie exactement A=BQ."
          ],
          [
            "B divise A",
            null,
            ""
          ],
          [
            "A divise B",
            "inversion",
            "Le quotient est construit pour A par B."
          ]
        ],
        "ok": 1,
        "hints": [
          "Remplace R par 0.",
          "On obtient A=BQ.",
          "C'est précisément la divisibilité."
        ],
        "sol": "R=0 équivaut à A=BQ, donc B divise A."
      }
    ]
  },
  {
    "id": "v3.groupes.definition",
    "domain": "algèbre",
    "chapter": "Groupes",
    "section": "Groupe",
    "title": "Définition d'un groupe",
    "prerequisites": [
      "algebre.logique.implication"
    ],
    "q": "Quelles propriétés faut-il vérifier pour montrer qu'un ensemble muni d'une loi est un groupe ?",
    "intu": "Il faut pouvoir combiner trois éléments sans ambiguïté, disposer d'un neutre et d'un inverse pour chaque élément.",
    "def": "Un groupe (G,*) vérifie fermeture, associativité, existence d'un élément neutre e et existence d'un inverse pour chaque élément.",
    "ex": "(Z,+) est un groupe : neutre 0 et inverse de n égal à -n.",
    "cex": "(N,+) n'est pas un groupe car 1 n'a pas d'opposé dans N.",
    "why": "Pourquoi l'associativité ne signifie-t-elle pas commutativité ?",
    "recall": "Cite les quatre axiomes d'un groupe.",
    "exercises": [
      {
        "q": "(N,+) est-il un groupe ?",
        "dim": "reasoning",
        "options": [
          [
            "Oui",
            "oubli des inverses",
            "L'opposé de 1 n'est pas dans N."
          ],
          [
            "Non",
            "",
            ""
          ]
        ],
        "ok": 1,
        "hints": [
          "Cherche l'inverse de 1 pour l'addition.",
          "Il faudrait un entier naturel x tel que 1+x=0.",
          "Aucun x∈N ne convient."
        ],
        "sol": "Non : les inverses additifs ne sont pas tous dans N."
      }
    ]
  },
  {
    "id": "v3.systemes.gauss",
    "domain": "algèbre",
    "chapter": "Systèmes linéaires",
    "section": "Méthode du pivot de Gauss",
    "title": "Pivot de Gauss",
    "prerequisites": [
      "algebre.logique.implication"
    ],
    "q": "Pourquoi transformer un système sans changer son ensemble de solutions ?",
    "intu": "Les opérations élémentaires sur les lignes produisent des systèmes équivalents.",
    "def": "Échanger deux lignes, multiplier une ligne par un scalaire non nul ou ajouter à une ligne un multiple d'une autre préserve l'ensemble des solutions.",
    "ex": "Pour x+y=5 et x-y=1, additionner les deux équations donne 2x=6, donc x=3 puis y=2.",
    "cex": "Multiplier une ligne par 0 détruit l'information et n'est pas une opération équivalente.",
    "why": "Pourquoi le pivot doit-il être non nul pour normaliser une ligne ?",
    "recall": "Cite les trois opérations élémentaires sur les lignes.",
    "exercises": [
      {
        "q": "Quelle opération est interdite si l'on veut conserver l'équivalence ?",
        "dim": "reasoning",
        "options": [
          [
            "Échanger deux lignes",
            "erreur",
            "C'est autorisé."
          ],
          [
            "Ajouter 3 fois une ligne à une autre",
            "erreur",
            "C'est autorisé."
          ],
          [
            "Multiplier une ligne par 0",
            null,
            ""
          ],
          [
            "Multiplier une ligne par 2",
            "erreur",
            "Un scalaire non nul est autorisé."
          ]
        ],
        "ok": 2,
        "hints": [
          "Une opération doit être réversible.",
          "Multiplier par 0 efface la ligne.",
          "On ne peut plus retrouver la ligne précédente."
        ],
        "sol": "Multiplier une ligne par 0 n'est pas une transformation réversible."
      }
    ]
  },
  {
    "id": "v3.matrices.produit",
    "domain": "algèbre",
    "chapter": "Matrices",
    "section": "Multiplication",
    "title": "Produit de matrices",
    "prerequisites": [
      "v3.systemes.gauss"
    ],
    "q": "Quand le produit AB est-il défini ?",
    "intu": "Le nombre de colonnes de A doit correspondre au nombre de lignes de B.",
    "def": "Si A est m×n et B est n×p, alors AB est défini et est une matrice m×p. L'entrée (i,j) est le produit scalaire de la ligne i de A par la colonne j de B.",
    "ex": "Une matrice 2×3 multipliée par une matrice 3×4 donne une matrice 2×4.",
    "cex": "Deux matrices 2×3 et 2×3 ne sont pas multipliables dans cet ordre.",
    "why": "Pourquoi AB et BA ne sont-ils généralement pas tous deux définis, ni égaux ?",
    "recall": "Donne la condition dimensionnelle pour AB.",
    "exercises": [
      {
        "q": "A est 2×3 et B est 3×5. Quelle est la taille de AB ?",
        "dim": "calculation",
        "options": [
          [
            "2×5",
            null,
            ""
          ],
          [
            "3×3",
            "erreur",
            "Le résultat garde les lignes de A et les colonnes de B."
          ],
          [
            "5×2",
            "inversion",
            "L'ordre est A puis B."
          ],
          [
            "2×3",
            "erreur",
            "Ce sont les dimensions de A."
          ]
        ],
        "ok": 0,
        "hints": [
          "L'intérieur 3 correspond.",
          "La dimension extérieure donne le résultat.",
          "2×3 fois 3×5 donne 2×5."
        ],
        "sol": "AB est une matrice 2×5."
      }
    ]
  },
  {
    "id": "v3.ev.definition",
    "domain": "algèbre",
    "chapter": "Espaces vectoriels",
    "section": "Espace vectoriel",
    "title": "Espace vectoriel et sous-espace",
    "prerequisites": [
      "v3.matrices.produit"
    ],
    "q": "Comment reconnaître rapidement un sous-espace vectoriel ?",
    "intu": "Il faut notamment que 0 appartienne à l'ensemble et que l'ensemble soit stable par combinaisons linéaires.",
    "def": "Un sous-ensemble F d'un espace vectoriel E est un sous-espace si 0∈F et si pour tous u,v∈F et λ,μ∈K, λu+μv∈F.",
    "ex": "Dans R², une droite passant par l'origine est un sous-espace vectoriel.",
    "cex": "Une droite ne passant pas par l'origine n'est pas un sous-espace.",
    "why": "Pourquoi la présence du vecteur nul est-elle indispensable ?",
    "recall": "Donne le critère de stabilité par combinaison linéaire.",
    "exercises": [
      {
        "q": "La droite y=2x dans R² est-elle un sous-espace ?",
        "dim": "reasoning",
        "options": [
          [
            "Oui",
            null,
            ""
          ],
          [
            "Non",
            "oubli du vecteur nul",
            "(0,0) vérifie 0=2×0."
          ]
        ],
        "ok": 0,
        "hints": [
          "Teste le vecteur nul.",
          "(0,0) appartient à la droite.",
          "La droite est aussi stable par combinaison linéaire."
        ],
        "sol": "Oui, elle est le noyau de (x,y)↦y−2x."
      }
    ]
  },
  {
    "id": "v3.dimension.base",
    "domain": "algèbre",
    "chapter": "Dimension finie",
    "section": "Base",
    "title": "Base, liberté et génération",
    "prerequisites": [
      "v3.ev.definition"
    ],
    "q": "Qu'est-ce qu'une base ?",
    "intu": "Une base donne exactement les briques nécessaires pour écrire chaque vecteur, sans redondance.",
    "def": "Une famille est une base si elle est libre et génératrice. Dans un espace de dimension n, toute base possède n vecteurs.",
    "ex": "((1,0),(0,1)) est la base canonique de R².",
    "cex": "((1,0),(0,1),(1,1)) n'est pas libre dans R².",
    "why": "Pourquoi une famille libre ne peut-elle pas contenir plus de n vecteurs dans un espace de dimension n ?",
    "recall": "Une base combine quelles deux propriétés ?",
    "exercises": [
      {
        "q": "Dans R², une base possède combien de vecteurs ?",
        "dim": "comprehension",
        "options": [
          [
            "1",
            "erreur",
            "Un seul vecteur ne peut pas engendrer R²."
          ],
          [
            "2",
            null,
            ""
          ],
          [
            "3",
            "erreur",
            "Trois vecteurs dans R² sont nécessairement liés."
          ],
          [
            "Cela dépend",
            "erreur",
            "La dimension de R² est fixée."
          ]
        ],
        "ok": 1,
        "hints": [
          "La dimension de R² vaut 2.",
          "Toute base a autant de vecteurs que la dimension.",
          "Donc 2."
        ],
        "sol": "Toute base de R² contient exactement 2 vecteurs."
      }
    ]
  },
  {
    "id": "v3.matrices.rang",
    "domain": "algèbre",
    "chapter": "Matrices et applications linéaires",
    "section": "Rang",
    "title": "Rang d'une matrice",
    "prerequisites": [
      "v3.dimension.base"
    ],
    "q": "Que mesure le rang ?",
    "intu": "Le rang mesure le nombre de directions indépendantes produites par les colonnes ou les lignes.",
    "def": "Le rang d'une matrice est la dimension de l'espace engendré par ses colonnes, égale à celle engendrée par ses lignes.",
    "ex": "Une matrice 2×3 de rang 1 produit une image de dimension 1.",
    "cex": "Le nombre de colonnes n'est pas nécessairement le rang.",
    "why": "Pourquoi les opérations élémentaires permettent-elles de calculer le rang ?",
    "recall": "Donne une interprétation géométrique du rang.",
    "exercises": [
      {
        "q": "Une matrice 3×5 a-t-elle nécessairement le rang 5 ?",
        "dim": "reasoning",
        "options": [
          [
            "Oui",
            "confusion dimensionnelle",
            "Le rang est au plus min(3,5)=3."
          ],
          [
            "Non",
            null,
            ""
          ]
        ],
        "ok": 1,
        "hints": [
          "Le rang ne peut pas dépasser le nombre de lignes.",
          "Ici il est au plus 3.",
          "Donc 5 est impossible."
        ],
        "sol": "Non : rg(A)≤min(3,5)=3."
      }
    ]
  },
  {
    "id": "v3.det.definition",
    "domain": "algèbre",
    "chapter": "Déterminants",
    "section": "Définition et propriétés",
    "title": "Déterminant et inversibilité",
    "prerequisites": [
      "v3.matrices.rang"
    ],
    "q": "Que signifie det(A)≠0 pour une matrice carrée ?",
    "intu": "La matrice ne comprime aucune direction jusqu'à perdre de dimension et elle possède une inverse.",
    "def": "Pour A carrée, det(A)≠0 équivaut à A inversible, à rg(A)=n et à ker(A)={0}.",
    "ex": "Pour [[a,b],[c,d]], det(A)=ad−bc.",
    "cex": "det(A)=0 ne signifie pas que A est la matrice nulle ; elle peut être non nulle mais non inversible.",
    "why": "Pourquoi un déterminant nul empêche-t-il l'inversibilité ?",
    "recall": "Donne une équivalence fondamentale avec det(A).",
    "exercises": [
      {
        "q": "Pour A=[[1,2],[2,4]], det(A) vaut :",
        "dim": "calculation",
        "options": [
          [
            "0",
            null,
            ""
          ],
          [
            "4",
            "erreur",
            "2×2=4 mais il faut soustraire 2×2."
          ],
          [
            "-4",
            "erreur de signe",
            "1×4−2×2=0."
          ]
        ],
        "ok": 0,
        "hints": [
          "Utilise ad−bc.",
          "1×4−2×2.",
          "4−4=0."
        ],
        "sol": "det(A)=0, donc A n'est pas inversible."
      }
    ]
  },
  {
    "id": "v3.fonctions.uselles",
    "domain": "analyse",
    "chapter": "Fonctions usuelles",
    "section": "Logarithme et exponentielle",
    "title": "Exponentielle et logarithme",
    "prerequisites": [
      "analyse.fonctions.continuite"
    ],
    "q": "Pourquoi ln est-elle la fonction réciproque de exp ?",
    "intu": "exp transforme x en e^x ; ln permet de revenir au nombre x.",
    "def": "Sur R, exp est strictement croissante et bijective de R vers ]0,+∞[. Sa réciproque est ln, définie sur ]0,+∞[.",
    "ex": "ln(e^3)=3 et e^(ln 5)=5.",
    "cex": "ln(x) n'est pas défini pour x≤0 dans R.",
    "why": "Pourquoi exp(x)>0 pour tout réel x ?",
    "recall": "Quel est l'ensemble de définition de ln ?",
    "exercises": [
      {
        "q": "ln(e²) vaut :",
        "dim": "calculation",
        "options": [
          [
            "2",
            null,
            ""
          ],
          [
            "e²",
            "confusion",
            "ln annule exp."
          ],
          [
            "0",
            "erreur",
            "ln(1)=0."
          ]
        ],
        "ok": 0,
        "hints": [
          "ln et exp sont réciproques.",
          "ln(e^x)=x.",
          "Ici x=2."
        ],
        "sol": "ln(e²)=2."
      }
    ]
  },
  {
    "id": "v3.derivee.definition",
    "domain": "analyse",
    "chapter": "Dérivée",
    "section": "Définition",
    "title": "Dérivée et nombre dérivé",
    "prerequisites": [
      "analyse.fonctions.continuite"
    ],
    "q": "Que mesure f'(a) ?",
    "intu": "C'est le coefficient directeur de la tangente à la courbe au point d'abscisse a.",
    "def": "f'(a)=lim_{h→0}[f(a+h)−f(a)]/h lorsque cette limite existe.",
    "ex": "Pour f(x)=x², f'(a)=2a.",
    "cex": "Être continue en a n'implique pas être dérivable en a : |x| est continue mais non dérivable en 0.",
    "why": "Pourquoi une pente moyenne devient-elle une pente instantanée quand h→0 ?",
    "recall": "Écris la définition du nombre dérivé.",
    "exercises": [
      {
        "q": "f(x)=x². f'(3) vaut :",
        "dim": "calculation",
        "options": [
          [
            "3",
            "erreur",
            "3 n'est pas 2a."
          ],
          [
            "6",
            null,
            ""
          ],
          [
            "9",
            "confusion image/dérivée",
            "9=f(3)."
          ]
        ],
        "ok": 1,
        "hints": [
          "f'(x)=2x.",
          "Remplace x par 3.",
          "2×3=6."
        ],
        "sol": "f'(3)=6."
      }
    ]
  },
  {
    "id": "v3.derivee.taf",
    "domain": "analyse",
    "chapter": "Dérivée",
    "section": "Accroissements finis",
    "title": "Théorème des accroissements finis",
    "prerequisites": [
      "v3.derivee.definition"
    ],
    "q": "À quoi sert le TAF ?",
    "intu": "Il relie une variation globale sur un intervalle à une dérivée prise en un point intermédiaire.",
    "def": "Si f est continue sur [a,b] et dérivable sur ]a,b[, il existe c∈]a,b[ tel que f'(c)=(f(b)-f(a))/(b-a).",
    "ex": "Pour f(x)=x² sur [1,3], une pente instantanée égale à la pente moyenne existe : 2c=4, donc c=2.",
    "cex": "Sans continuité sur [a,b] et dérivabilité sur ]a,b[, le théorème ne peut pas être appliqué tel quel.",
    "why": "Pourquoi les hypothèses sont-elles indispensables ?",
    "recall": "Énonce le TAF avec ses hypothèses.",
    "exercises": [
      {
        "q": "Pour f(x)=x² sur [1,3], quelle valeur de c donnée par le TAF ?",
        "dim": "calculation",
        "options": [
          [
            "1",
            "erreur",
            "Le point doit être intérieur."
          ],
          [
            "2",
            null,
            ""
          ],
          [
            "3",
            "erreur",
            "3 est une extrémité."
          ],
          [
            "4",
            "erreur de calcul",
            "2c=4 donne c=2."
          ]
        ],
        "ok": 1,
        "hints": [
          "Pente moyenne=(9−1)/(3−1)=4.",
          "f'(c)=2c.",
          "2c=4."
        ],
        "sol": "c=2."
      }
    ]
  },
  {
    "id": "v3.integrales.riemann",
    "domain": "analyse",
    "chapter": "Intégrales",
    "section": "Intégrale de Riemann",
    "title": "Intégrale et aire",
    "prerequisites": [
      "v3.derivee.definition"
    ],
    "q": "Que représente une intégrale définie dans le cas d'une fonction positive ?",
    "intu": "Elle mesure l'aire algébrique sous la courbe entre deux abscisses.",
    "def": "L'intégrale de Riemann ∫_a^b f(x)dx est définie comme limite de sommes de Riemann lorsque le pas tend vers 0, sous les hypothèses usuelles.",
    "ex": "∫_0^1 x dx = 1/2.",
    "cex": "Une intégrale n'est pas toujours une aire géométrique positive : si f<0, elle est négative.",
    "why": "Pourquoi une primitive permet-elle de calculer une intégrale ?",
    "recall": "Quelle relation fondamentale lie dérivation et intégration ?",
    "exercises": [
      {
        "q": "∫_0^1 x dx vaut :",
        "dim": "calculation",
        "options": [
          [
            "0",
            "erreur",
            "La fonction est positive et non nulle."
          ],
          [
            "1/2",
            null,
            ""
          ],
          [
            "1",
            "oubli du facteur 1/2",
            "Une primitive est x²/2."
          ],
          [
            "2",
            "erreur",
            "Le résultat dépasse l'aire du rectangle unité."
          ]
        ],
        "ok": 1,
        "hints": [
          "Une primitive de x est x²/2.",
          "Évalue en 1 puis en 0.",
          "1/2−0=1/2."
        ],
        "sol": "∫_0^1 x dx=1/2."
      }
    ]
  },
  {
    "id": "v3.integrales.ipp",
    "domain": "analyse",
    "chapter": "Intégrales",
    "section": "IPP",
    "title": "Intégration par parties",
    "prerequisites": [
      "v3.integrales.riemann"
    ],
    "q": "Quelle identité permet l'intégration par parties ?",
    "intu": "Elle vient de la dérivée d'un produit.",
    "def": "∫_a^b u(x)v'(x)dx=[u(x)v(x)]_a^b−∫_a^b u'(x)v(x)dx.",
    "ex": "Pour ∫ x e^x dx, choisir u=x et v'=e^x réduit le degré du facteur polynomial.",
    "cex": "Il ne faut pas dériver et intégrer au hasard : le choix de u et v' doit simplifier le nouvel intégrale.",
    "why": "Pourquoi dériver x plutôt que e^x dans l'exemple ?",
    "recall": "Écris la formule d'IPP.",
    "exercises": [
      {
        "q": "Dans une IPP, quelle formule est correcte ?",
        "dim": "comprehension",
        "options": [
          [
            "∫u v' = uv + ∫u'v",
            "erreur de signe",
            "Le second terme est soustrait."
          ],
          [
            "∫u v' = uv − ∫u'v",
            null,
            ""
          ],
          [
            "∫u v' = u'v'",
            "erreur",
            "Ce n'est pas une règle d'intégration."
          ]
        ],
        "ok": 1,
        "hints": [
          "Pars de (uv)'=u'v+uv'.",
          "Isole uv'.",
          "Le terme ∫u'v passe de l'autre côté avec un signe −."
        ],
        "sol": "∫u v'=uv−∫u'v, avec les bornes adaptées."
      }
    ]
  },
  {
    "id": "v3.dl.definition",
    "domain": "analyse",
    "chapter": "Développements limités",
    "section": "DL au voisinage d'un point",
    "title": "Développement limité",
    "prerequisites": [
      "v3.derivee.taf"
    ],
    "q": "Que décrit un développement limité ?",
    "intu": "Il remplace localement une fonction par un polynôme plus un reste contrôlé.",
    "def": "Au voisinage de a, f(x)=P_n(x)+o((x-a)^n) lorsque P_n est le polynôme de Taylor d'ordre n dans les cas où les dérivées nécessaires existent.",
    "ex": "e^x=1+x+x²/2+o(x²) au voisinage de 0.",
    "cex": "Un DL est local : il ne dit pas que le polynôme égale exactement la fonction partout.",
    "why": "Pourquoi le terme o((x-a)^n) est-il essentiel ?",
    "recall": "Que signifie le symbole o(x^n) ?",
    "exercises": [
      {
        "q": "Le DL e^x=1+x+o(x) près de 0 signifie :",
        "dim": "comprehension",
        "options": [
          [
            "e^x=1+x pour tout x",
            "erreur de portée",
            "C'est seulement une approximation locale."
          ],
          [
            "e^x−1−x est négligeable devant x",
            "",
            ""
          ],
          [
            "e^x−1−x=0",
            "erreur",
            "Négligeable ne signifie pas nul."
          ]
        ],
        "ok": 1,
        "hints": [
          "Rappelle la définition de o(x).",
          "Le quotient par x tend vers 0.",
          "Donc le reste est négligeable devant x."
        ],
        "sol": "(e^x−1−x)/x→0 quand x→0."
      }
    ]
  },
  {
    "id": "v3.courbes.parametrees",
    "domain": "analyse",
    "chapter": "Courbes paramétrées",
    "section": "Notions de base",
    "title": "Courbe paramétrée",
    "prerequisites": [
      "v3.derivee.definition"
    ],
    "q": "Que signifie x=x(t), y=y(t) ?",
    "intu": "Un point du plan se déplace quand le paramètre t varie.",
    "def": "Une courbe paramétrée est donnée par M(t)=(x(t),y(t)) pour t dans un intervalle. Le vecteur vitesse est M'(t)=(x'(t),y'(t)).",
    "ex": "x(t)=t, y(t)=t² décrit la parabole y=x².",
    "cex": "Le paramètre t n'est pas nécessairement une longueur ni une abscisse.",
    "why": "Comment obtenir une équation cartésienne quand c'est possible ?",
    "recall": "Quel est le vecteur dérivé d'une courbe paramétrée ?",
    "exercises": [
      {
        "q": "Pour x(t)=t et y(t)=t², quelle équation vérifie la courbe ?",
        "dim": "transfer",
        "options": [
          [
            "y=x²",
            null,
            ""
          ],
          [
            "y=t² seulement",
            "erreur",
            "Il faut éliminer t."
          ],
          [
            "x=y²",
            "inversion",
            "Ce n'est pas l'équation générale."
          ]
        ],
        "ok": 0,
        "hints": [
          "x=t.",
          "Remplace t par x dans y=t².",
          "Donc y=x²."
        ],
        "sol": "y=x²."
      }
    ]
  },
  {
    "id": "v3.edo.premier",
    "domain": "analyse",
    "chapter": "Équations différentielles",
    "section": "Linéaire du 1er ordre",
    "title": "Équation différentielle linéaire du premier ordre",
    "prerequisites": [
      "v3.derivee.definition",
      "v3.integrales.riemann"
    ],
    "q": "Comment vérifier une solution d'une équation différentielle ?",
    "intu": "On dérive la fonction proposée puis on remplace dans l'équation.",
    "def": "Une équation y'+a(x)y=b(x) est linéaire du premier ordre. Pour l'homogène y'+ay=0 avec a constant, les solutions sont y=Ce^{-ax}.",
    "ex": "y'+2y=0 a pour solutions y=Ce^{-2x}.",
    "cex": "Une seule solution n'est pas obtenue sans condition initiale : C reste arbitraire.",
    "why": "Pourquoi une condition initiale fixe-t-elle C ?",
    "recall": "Quelle forme ont les solutions de y'+ay=0 pour a constant ?",
    "exercises": [
      {
        "q": "Les solutions de y'+2y=0 sont :",
        "dim": "comprehension",
        "options": [
          [
            "y=Ce^{-2x}",
            null,
            ""
          ],
          [
            "y=Ce^{2x}",
            "erreur de signe",
            "La dérivée de e^{-2x} donne -2."
          ],
          [
            "y=2x+C",
            "confusion",
            "Ce n'est pas la forme de l'homogène."
          ]
        ],
        "ok": 0,
        "hints": [
          "Teste y=e^{kx}.",
          "k+2=0.",
          "Donc k=-2."
        ],
        "sol": "y=Ce^{-2x}."
      }
    ]
  },
  {
    "id": "v3.reels.borne",
    "domain": "analyse",
    "chapter": "Nombres réels",
    "section": "Borne supérieure",
    "title": "Majorants, minorants et borne supérieure",
    "prerequisites": [
      "algebre.logique.quantificateurs"
    ],
    "q": "Quelle différence entre un majorant et un maximum ?",
    "intu": "Un majorant peut être extérieur à l'ensemble ; un maximum doit appartenir à l'ensemble.",
    "def": "M est un majorant de A si x≤M pour tout x∈A. Le maximum est un élément de A qui est supérieur ou égal à tous les éléments de A. La borne supérieure est le plus petit des majorants lorsqu'elle existe.",
    "ex": "A=]0,1[ a pour borne supérieure 1, mais n'a pas de maximum car 1∉A.",
    "cex": "Dire que 1 est le maximum de ]0,1[ est faux : 1 n'appartient pas à l'ensemble.",
    "why": "Pourquoi la borne supérieure n'a-t-elle pas besoin d'appartenir à l'ensemble ?",
    "recall": "Donne un exemple d'ensemble ayant une borne supérieure mais pas de maximum.",
    "exercises": [
      {
        "q": "Pour A=]0,1[, 1 est :",
        "dim": "comprehension",
        "options": [
          [
            "un maximum",
            "erreur d'appartenance",
            "1 n'appartient pas à A."
          ],
          [
            "une borne supérieure",
            null,
            ""
          ],
          [
            "un minorant seulement",
            "erreur",
            "Tous les éléments sont ≤1."
          ]
        ],
        "ok": 1,
        "hints": [
          "Vérifie si 1 appartient à A.",
          "Il est plus grand que tous les éléments.",
          "Mais il n'appartient pas à A."
        ],
        "sol": "1 est la borne supérieure de ]0,1[, pas son maximum."
      }
    ]
  },
  {
    "id": "v3.limites.definition",
    "domain": "analyse",
    "chapter": "Limites et fonctions continues",
    "section": "Limites",
    "title": "Limite d'une fonction en un point",
    "prerequisites": [
      "v3.reels.borne"
    ],
    "q": "Que signifie intuitivement lim f(x)=L quand x→a ?",
    "intu": "On peut rendre f(x) aussi proche que l'on veut de L en prenant x suffisamment proche de a.",
    "def": "lim_{x→a}f(x)=L signifie : pour tout ε>0, il existe δ>0 tel que 0<|x-a|<δ implique |f(x)-L|<ε.",
    "ex": "lim_{x→2}(3x+1)=7.",
    "cex": "La valeur f(a) n'est pas nécessairement égale à L pour que la limite existe.",
    "why": "Pourquoi impose-t-on 0<|x-a| et non simplement |x-a| ?",
    "recall": "Écris la définition ε-δ d'une limite finie.",
    "exercises": [
      {
        "q": "Dans la définition d'une limite, pourquoi 0<|x-a| ?",
        "dim": "reasoning",
        "options": [
          [
            "Pour exclure le point a",
            null,
            ""
          ],
          [
            "Pour imposer x=a",
            "erreur",
            "Ce serait l'inverse."
          ],
          [
            "Parce que f(a) doit exister",
            "erreur",
            "La limite peut exister même si f(a) n'est pas définie."
          ]
        ],
        "ok": 0,
        "hints": [
          "La limite étudie le comportement autour de a.",
          "La valeur exacte au point peut être différente ou absente.",
          "On exclut donc x=a."
        ],
        "sol": "On étudie le voisinage de a sans imposer la valeur de f(a)."
      }
    ]
  }
];
