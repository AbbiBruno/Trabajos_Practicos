// Escribe un programa que pida una frase, devuelva la cantidad de 
// vocales que tiene la frase y muestre en consola cuales son.

let frase= prompt("Ingrese su frase:");
let vocales= ["a", "e", "i","o","u","á","é","í", "ó", "ú"];
let totalVocales = [];

let letras = frase.toLocaleLowerCase().split("");
if(!isNaN(frase)){
	alert ("Introduzca una frase valida.");
}
for (let i = 0; i < letras.length; i++ ) {
	
	
	if(vocales.includes(letras[i])) {
		totalVocales.push(letras[i]);
	}
	
}


console.log(`Su frase tiene: ${totalVocales.length} vocales y son: ${totalVocales}`)





