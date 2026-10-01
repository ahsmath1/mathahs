const COUNTEREXAMPLES = [
  {s:"Toute application surjective est injective.",options:["f : {1,2} → {1}, constante","f : ℝ → ℝ, x ↦ x","f : {1} → {1}"],ok:0,
   explain:"f est surjective (1 est atteint) mais f(1) = f(2) : pas injective.",
   reformulate:"Si E et F sont finis de même cardinal, alors f surjective ⇔ f injective."},
  {s:"Toute suite bornée converge.",options:["uₙ = 1/n","uₙ = (−1)ⁿ","uₙ = 2ⁿ"],ok:1,
   explain:"(−1)ⁿ est bornée, ses sous-suites paire et impaire ont des limites différentes.",
   reformulate:"Toute suite monotone et bornée converge."},
  {s:"Si f∘g est injective, alors f et g sont injectives.",options:[
    "g : {1} → {1,2}, f : {1,2} → {1} (constante)","g = f = id","g : ℝ → ℝ, x ↦ x²"],ok:0,
    explain:"Ici f∘g est injective mais f n'est pas injective. En revanche g est forcément injective.",
    reformulate:"Si f∘g est injective, alors g est injective."},
  {s:"Toute fonction continue sur ℝ est dérivable en tout point.",options:["x ↦ x²","x ↦ |x| en 0","x ↦ eˣ"],ok:1,
   explain:"|x| est continue en 0, mais les taux d'accroissement valent −1 à gauche et 1 à droite.",
   reformulate:"Toute fonction dérivable en a est continue en a (réciproque fausse)."}
];
