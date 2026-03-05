let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// Partie A
console.log(` nom ?? "valeur par défaut" -> ${nom ?? "valeur par défaut"}`);
console.log(`age ?? "valeur par défaut" -> ${age ?? "valeur par défaut"}`);
console.log(`ville ?? "valeur par défaut" -> ${ville ?? "valeur par défaut"}`);
console.log(`score ?? "valeur par défaut" -> ${score ?? "valeur par défaut"}`);
console.log(`actif ?? "valeur par défaut" -> ${actif ?? "valeur par défaut"}`);

// Partie B
console.log(`nom || "valeur par défaut" -> ${nom || "valeur par défaut"}`);
console.log(`age || "valeur par défaut" -> ${age || "valeur par défaut"}`);
console.log(`ville || "valeur par défaut" -> ${ville || "valeur par défaut"}`);
console.log(`score || "valeur par défaut" -> ${score || "valeur par défaut"}`);
console.log(`actif || "valeur par défaut" -> ${actif || "valeur par défaut"}`);

// Partie C
function comparer(nomVar, val) {
  const resNull = val ?? "valeur par défaut";
  const resOu = val || "valeur par défaut";
  let resMem;
  if (resNull === resOu) {
    resMem = "même résultat";
  } else {
    resMem = "résultat différent";
  }
  console.log(`${nomVar} : ?? et || -> ${resMem}`);
}

comparer("nom", nom);
comparer("age", age);
comparer("ville", ville);
comparer("score", score);
comparer("actif", actif);
