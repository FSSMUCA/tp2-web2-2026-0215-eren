const nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
  const val = nombres[i];
  let label;

  switch (true) {
    case Number.isNaN(val):
      label = "INVALIDE";
      break;
    case val === Infinity || val === -Infinity:
      label = "INFINI";
      break;
    case 1 / val === -Infinity:
      label = "ZERO NEGATIF";
      break;
    case val % 1 === 0 && val >= -Number.MAX_SAFE_INTEGER && val <= Number.MAX_SAFE_INTEGER:
      label = "ENTIER SUR";
      break;
    case val % 1 === 0:
      label = "ENTIER HORS LIMITES";
      break;
    default:
      label = "DECIMAL";
  }

  console.log(`${val} -> ${label}`);
}
