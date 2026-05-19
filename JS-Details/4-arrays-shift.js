let frutasVermelhas = new Array();
let frutasCitrias = ["'Laranja'", "'Limão'", "'Tangerina'"];

//frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã"); 
frutasVermelhas.push("Framboesa"); 
frutasVermelhas.push("Cereja"); 
frutasVermelhas.push("Tomate"); 



console.log(frutasVermelhas);
let frutaRemovedFromFirstArray = frutasVermelhas.shift();

console.log(`${frutaRemovedFromFirstArray} foi removida da cesta!`); 
console.log(frutasVermelhas);