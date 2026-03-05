let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1. sous-total
const sousTotal = prix * quantite;
console.log(`Sous-total: ${sousTotal.toFixed(2)} MAD`);

// 2.
const promo = codePromo ?? null;
const reductionApplique = estMembre;
let reduction;
if (reductionApplique){
    reduction = sousTotal * (reductionPourcentage / 100);
}
else {
    reduction = 0;
}
console.log(`Réduction: ${reduction === 0 ? "0 MAD" : reduction.toFixed(3) + " MAD"}`);

// 3.
const totalFinal = sousTotal - reduction;
console.log(`Total final: ${totalFinal.toFixed(3)} MAD`);

// 4.
let statut;
if (soldeCompte >= totalFinal) {
  statut = "Paiement accepté";
  console.log(statut);
} else {
  statut = "Solde insuffisant";
  console.log(statut);
}

// 5.
let nouveauSolde = soldeCompte;
if (statut === "Paiement accepté") {
  nouveauSolde = soldeCompte - totalFinal;
  console.log(`Nouveau solde après achat: ${nouveauSolde.toFixed(3)} MAD`);
}

// 6.
console.log("\n===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix.toFixed(2)} MAD`);
console.log(`Sous-total: ${sousTotal.toFixed(2)} MAD`);
console.log(`Réduction : ${reduction.toFixed(3)} MAS`);
console.log(`Total     : ${totalFinal.toFixed(3)} MAS`);
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${nouveauSolde.toFixed(3)} MAD`);
console.log("=========================");
