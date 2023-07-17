// Escribe un programa que pida una frase, devuelva la cantidad de 
// vocales que tiene la frase y muestre en consola cuales son.

let frase= prompt("Ingrese su frase:");
fraseMinuscula = frase.toLocaleLowerCase();
let vocales= ["a", "e", "i","o","u","á","é","í", "ó", "ú"];
let totalVocales = [];

if(!isNaN(frase)){
	alert ("Introduzca una frase valida.");
}
for (let i = 0; i < fraseMinuscula.length; i++ ) {
	let letra = fraseMinuscula[i];
	
	if(vocales.includes(letra)) {
		
	
	if(!totalVocales.includes(letra)){
		totalVocales.push(letra);
	}
	}
}


console.log("Su frase tiene:",length)



