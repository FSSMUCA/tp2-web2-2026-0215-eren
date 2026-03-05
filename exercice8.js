let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// 1. nom
function suppr(chaine) {
    let i = 0;
    let j = chaine.length - 1;
    while (i <= j && chaine[i] === ' ') i++;
    while (j >= i && chaine[j] === ' ') j--;

    if (i > j) return "";

    let resultat = "";
    for (let k = i; k <= j; k++) {
        resultat += chaine[k];
    }
    return resultat;
}

let nomPropre = suppr(nom);
if (nomPropre === "") nomPropre = "Inconnu";

// 2. age
function convert(chaine) {
    let i = 0;
    let signe = 1;
    if (chaine[i] === '-') {
        signe = -1;
        i++;
    } else if (chaine[i] === '+') {
        i++;
    }
    let nombre = 0;
    let minNombre = false;
    while (i < chaine.length) {
        let c = chaine[i];
        if (c >= '0' && c <= '9') {
            let chiffre;
            switch (c) {
                case '0': chiffre = 0; break;
                case '1': chiffre = 1; break;
                case '2': chiffre = 2; break;
                case '3': chiffre = 3; break;
                case '4': chiffre = 4; break;
                case '5': chiffre = 5; break;
                case '6': chiffre = 6; break;
                case '7': chiffre = 7; break;
                case '8': chiffre = 8; break;
                case '9': chiffre = 9; break;
            }
            nombre = nombre * 10 + chiffre;
            minNombre = true;
            i++;
        } else {
            break;
        }
    }
    if (!minNombre) {
        return { valeur: undefined, valide: false };
    }
    return { valeur: signe * nombre, valide: true };
}

let ageResult = convert(age);
let ageStatut;

if (!ageResult.valide || ageResult.valeur <= 0) {
    ageStatut = "valeur invalide";
} else {
    ageStatut = ageResult.valeur + " (valide)";
}

// 3. email
function position(chaine, cible) {
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] === cible) return i;
    }
    return -1;
}

let emailPropre = email;
let posArobase = position(emailPropre, '@');
let emailValide;
if (posArobase === -1) {
    emailValide = "invalide : pas de point après @";
}
else {
    let pointApres = false;
    for (let i = posArobase + 1; i < emailPropre.length; i++) {
        if (emailPropre[i] === '.') {
            pointApres = true;
            break;
        }
    }
    if (pointApres) {
        emailValide = "valide";
    }
    else {
        emailValide = "invalide : pas de point après @";
    }   
}

// 4. scoreJeu
let scoreResult = convert(scoreJeu);
let scoreNb;
if (scoreResult.valide) {
    scoreNb = scoreResult.valeur;
}
else {
    scoreNb = 0;
}

// 5. estAdmin
let adminBool = estAdmin === "true";

// 6. derniereConnexion
let connexion = derniereConnexion ?? "Jamais connecté";

// 7. nombreConnexions
let nbConnexionsResult = convert(nombreConnexions);
let nbConnexionsNb;
if (nbConnexionsResult.valide) {
    nbConnexionsNb = nbConnexionsResult.valeur;
}
else {
    nbConnexionsNb = 0;
}
let nbConnexionsMsg;
if (nbConnexionsNb === 0) {
    nbConnexionsMsg = "Aucune connexion";
} 
else {
    nbConnexionsMsg = nbConnexionsNb;
}

// 8.
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomPropre}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageStatut}`);
console.log(`email            : "${emailPropre}" (${emailValide})`);
console.log(`scoreJeu         : ${scoreNb} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${adminBool} (conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexion}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nbConnexionsMsg}" (0 après conversion)`);
console.log("================================");
