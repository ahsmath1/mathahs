const EXO7_EXERCISES = [
  {id:"exo7.algebre.ch1.ex1",source:"Exo7 — Algèbre, Chapitre 1, Logique",notion:"algebre.logique.implication",difficulty:2,
   q:"Montrer que la somme de deux rationnels est un rationnel.",
   hints:["Écris a = p/q et b = p'/q'.","Mets au même dénominateur.","La somme est (pq' + qp')/(qq')."],
   sol:"a + b = (pq' + qp')/(qq') ∈ ℚ.",dim:"demonstration"},
  {id:"exo7.algebre.ch2.ex1",source:"Exo7 — Algèbre, Chapitre 2, Ensembles",notion:"ensembles.operations",difficulty:1,
   q:"Montrer que A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C).",
   hints:["Procède par double inclusion.","Pour x ∈ A ∩ (B ∪ C), distingue les cas x ∈ B ou x ∈ C.","Conclus."],
   sol:"Double inclusion : les deux ensembles contiennent les mêmes éléments.",dim:"demonstration"},
  {id:"exo7.analyse.ch2.ex1",source:"Exo7 — Analyse, Chapitre 2, Suites",notion:"analyse.suites.convergence",difficulty:2,
   q:"Montrer que la suite uₙ = 1 + 1/2² + … + 1/n² converge.",
   hints:["Montre qu'elle est croissante.","Majore-la par 2 − 1/n.","Conclus par le théorème de convergence monotone."],
   sol:"Croissante et majorée, donc convergente (la valeur de la limite est un résultat supplémentaire).",dim:"demonstration"}
];
