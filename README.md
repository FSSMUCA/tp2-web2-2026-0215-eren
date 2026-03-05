[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/p6CTHHRY)
# TP — JavaScript : Types, Opérateurs et Conversions

**Consignes générales**

- Ce TP contient 8 exercices à résoudre en JavaScript pur (Node.js)
- Pour chaque exercice, créez un fichier `exerciceN.js` et exécutez-le avec `node exerciceN.js`
- Vous ne devez **pas** créer de fonctions — écrivez uniquement du code direct (variables, boucles, conditions, `console.log`)
- Les résultats doivent s'afficher dans le terminal

---

## Exercice 1 —

Déclarez les variables suivantes et affichez pour chacune son **type** (`typeof`) ainsi que sa **valeur** sur une seule ligne.

Les variables à déclarer :
- `a` = `42`
- `b` = `"Bonjour"`
- `c` = `true`
- `d` = `null`
- `e` non initialisée
- `f` = `[1, 2, 3]`
- `g` = `{ nom: "Ali" }`
- `h` = `NaN`

**Sortie attendue dans le terminal :**
```
42 -> number
Bonjour -> string
true -> boolean
null -> object
undefined -> undefined
[1,2,3] -> object
[object Object] -> object
NaN -> number
```

> Remarquez que `typeof null` retourne `"object"` — c'est une particularité historique de JavaScript. `NaN` est de type `"number"`, et `undefined` est son propre type.

---

## Exercice 2

Déclarez un tableau nommé `valeurs` contenant exactement ces 10 éléments dans l'ordre :
`0`, `1`, `""`, `"0"`, `null`, `undefined`, `NaN`, `false`, `[]`, `{}`

Parcourez ce tableau avec une boucle `for` classique. Pour chaque élément, affichez sur une seule ligne :
- la valeur (convertie en string via `String()`)
- si elle est **truthy** ou **falsy**

**Format de sortie :**
```
0 -> falsy
1 -> truthy
(chaine vide) -> falsy
0 -> truthy
null -> falsy
undefined -> falsy
NaN -> falsy
false -> falsy
 -> truthy
[object Object] -> truthy
```

> Pour la chaîne vide, affichez `(chaine vide)` à la place. Utilisez une condition `if` pour tester la valeur directement sans la comparer à quoi que ce soit.

---

## Exercice 3 

Déclarez les expressions suivantes **une par une** et affichez chaque résultat avec son type.
```js
let r1 = 10 + 20
let r2 = "10" + 20
let r3 = 10 + "20"
let r4 = "10" + "20"
let r5 = 10 - "3"
let r6 = "10" - "3"
let r7 = 10 + null
let r8 = "10" + null
let r9 = 10 + undefined
let r10 = true + true
```

Pour chaque variable, affichez : `rN = <valeur> (<type>)`

**Sortie attendue :**
```
r1 = 30 (number)
r2 = 1020 (string)
r3 = 1020 (string)
r4 = 1020 (string)
r5 = 7 (number)
r6 = 7 (number)
r7 = 10 (number)
r8 = 10null (string)
r9 = NaN (number)
r10 = 2 (number)
```

---

## Exercice 4 

Déclarez les paires de valeurs ci-dessous et affichez pour chacune le résultat de `==` et de `===`.

Paires à tester :
```
0        et  ""
0        et  "0"
0        et  false
""       et  false
null     et  undefined
null     et  false
NaN      et  NaN
1        et  "1"
" \t\n " et  0
```

**Format de sortie pour chaque ligne :**
```
0 == ""         -> true    |   0 === ""         -> false
```

Ensuite, après les 9 lignes, affichez une ligne séparatrice `---` puis cette conclusion dynamique :

Comptez combien de paires donnent `true` avec `==` mais `false` avec `===`, et affichez :
```
X paire(s) où == et === donnent des résultats différents
```
---

## Exercice 5

Déclarez un tableau `nombres` contenant :
`0`, `NaN`, `Infinity`, `-Infinity`, `42`, `3.14`, `Number.MAX_SAFE_INTEGER + 1`, `-0`

Parcourez ce tableau et, pour chaque valeur, affichez une ligne indiquant :
- la valeur
- si c'est `NaN` → afficher `INVALIDE`
- si c'est `Infinity` ou `-Infinity` → afficher `INFINI`
- si c'est `-0` → afficher `ZERO NEGATIF`
- si c'est un entier dans les limites sûres → afficher `ENTIER SUR`
- si c'est un entier hors limites → afficher `ENTIER HORS LIMITES`
- sinon → afficher `DECIMAL`

**Sortie attendue :**
```
0 -> ENTIER SUR
NaN -> INVALIDE
Infinity -> INFINI
-Infinity -> INFINI
42 -> ENTIER SUR
3.14 -> DECIMAL
9007199254740992 -> ENTIER HORS LIMITES
0 -> ZERO NEGATIF
```

> Pour détecter `-0` : `1 / valeur === -Infinity`. Pour NaN : utilisez `Number.isNaN()`. Ne confondez pas `isNaN()` (global) et `Number.isNaN()` — ils ne se comportent pas pareil !

---

## Exercice 6

Déclarez les variables suivantes :
```js
let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false
```

**Partie A** — Pour chaque variable, affichez le résultat de `variable ?? "valeur par défaut"` :
```
nom ?? "valeur par défaut"    -> valeur par défaut
age ?? "valeur par défaut"    -> 0
...
```

**Partie B** — Pour les mêmes variables, affichez le résultat de `variable || "valeur par défaut"` :
```
nom || "valeur par défaut"    -> valeur par défaut
age || "valeur par défaut"    -> valeur par défaut
...
```

**Partie C** — Affichez une ligne pour chaque variable indiquant si `??` et `||` donnent le **même résultat** ou un **résultat différent** :
```
nom   : ?? et || -> même résultat
age   : ?? et || -> résultat différent
...
```

>  `??` ne considère que `null` et `undefined` comme "absents". `||` considère toutes les valeurs **falsy** (0, "", false, NaN...). C'est crucial pour les formulaires où 0 ou "" sont des valeurs valides.

---

## Exercice 7

Vous gérez un panier d'achat. Déclarez les variables suivantes :
```js
let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250
```

Écrivez le script qui effectue **dans l'ordre** les opérations suivantes et affiche chaque étape :

1. Calculez le **sous-total** (`prix * quantite`) et affichez-le
2. Appliquez la réduction **uniquement si** `codePromo` n'est pas `null` et `estMembre` est `true`. Affichez le montant de la réduction (0 sinon)
3. Calculez le **total final** (sous-total - réduction)
4. Vérifiez si le `soldeCompte` est **suffisant** pour payer. Affichez `"Paiement accepté"` ou `"Solde insuffisant"`
5. Si le paiement est accepté, calculez et affichez le **nouveau solde** après achat
6. Affichez un **récapitulatif** final sur plusieurs lignes :
```
===== RÉCAPITULATIF =====
Produit   : Clavier mécanique
Quantité  : 3
Prix unit.: 89.99 MAD
Sous-total: 269.97 MAD
Réduction : 26.997 MAS
Total     : 242.973 MAS
Statut    : Paiement accepté
Solde     : 7.027 MAD
=========================
```

>  Utilisez l'opérateur `??` pour gérer les valeurs potentiellement nulles, et `&&` pour combiner les conditions.

---

## Exercice 8 

Vous recevez des données utilisateur potentiellement incorrectes. Déclarez ces variables **exactement ainsi** (ne les corrigez pas) :
```js
let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"
```

Écrivez un script qui **analyse et corrige** chaque valeur, puis affiche un rapport. Pour chaque variable :

**Règles de traitement :**
- `nom` : supprimer les espaces au début et à la fin. Si vide après trim → `"Inconnu"`
- `age` : convertir en nombre entier. Si le résultat est `NaN` ou `<= 0` → valeur invalide
- `email` : doit contenir `"@"` ET un `"."` après le `"@"`. Valide ou invalide
- `scoreJeu` : extraire uniquement la partie numérique avec `parseInt()`. Si `NaN` → 0
- `estAdmin` : la chaîne `"false"` doit devenir le booléen `false`, `"true"` → `true`. (Attention : `Boolean("false")` vaut `true` !)
- `derniereConnexion` : utiliser `??` pour donner la valeur par défaut `"Jamais connecté"`
- `nombreConnexions` : convertir en nombre. Si c'est `0` après conversion → afficher `"Aucune connexion"`, sinon le nombre

**Sortie attendue :**
```
===== RAPPORT UTILISATEUR =====
nom              : "Fatima" (corrigé : espaces supprimés)
age              : 23 (valide)
email            : "fatima@example" (invalide : pas de point après @)
scoreJeu         : 150 (extrait depuis "150pts")
estAdmin         : false (attention : Boolean("false") = true, conversion manuelle requise)
derniereConnexion: "Jamais connecté" (valeur par défaut via ??)
nombreConnexions : "Aucune connexion" (0 après conversion)
================================
```

> Pour `estAdmin`, vous ne pouvez pas utiliser `Boolean()` directement — réfléchissez à comment comparer la chaîne à `"true"` avec `===`.

---
