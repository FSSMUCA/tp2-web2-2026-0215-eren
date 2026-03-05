const val = [[0, ""], [0, "0"], [0, false], ["", false], [null, undefined], [null, false], [NaN, NaN], [1, "1"], ["\t\n", 0]];

let count = 0;

for (let i = 0; i < val.length; i++) {
    const left = val[i][0];
    const right = val[i][1];

    const equal1 = (left == right);
    const equal2 = (left === right);

    let leftStr;
    switch (typeof left) {
        case 'string':
            leftStr = `"${left}"`;
            break;
        default:
            leftStr = String(left);
    }

    let rightStr;
    switch (typeof right) {
        case 'string':
            rightStr = `"${right}"`;
            break;
        default:
            rightStr = String(right);
    }  

    console.log(`${leftStr} == ${rightStr} -> ${equal1}    |    ${leftStr} === ${rightStr} -> ${equal2}`);

    if (equal1) {
        if (equal2 === false) {
            count++;
        }
    }
}

console.log("---");
console.log(`${count} paire(s) où == et === donnent des résultats différents`);
