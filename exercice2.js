const val = [0 , 1 , "" , "0" , null , undefined , NaN , false , [] , {}];

for (let i = 0; i < val.length; i++){
	let valStr = String(val[i]);
        if (valStr === ""){i
		valStr = "(chaine vide)";
	}
	let truthy;
	if (val[i]){
		truthy = "truthy";
	}
	else {
		truthy = "falsy";
	}
        console.log (`${valStr} -> ${truthy}`) ; 
}
