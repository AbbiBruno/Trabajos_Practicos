
  //1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

  alert("Bienvenido al TP 1 de Javascript!")


  //2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("Hello World<br>")

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

let num1 = 3
let num2 = 5
let numerossumados = num1 + num2;

document.write (`${num1}+${num2} = ${numerossumados} <br>`)


//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

let nombre = prompt("Ingrese su nombre");

if (nombre.toLowerCase()) {
  document.write(`Hola ${nombre}!`);
}
 //ver para que quede con mayuscula el nombre

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

 let numero1 = parseInt(prompt("Ingrese el primer número de su suma:"));
 let numero2= parseInt(prompt("Ingrese el segundo número de su suma:"));
let resultadodesuma = numero1+numero2

 if (isNaN(numero1, numero2)) {
   alert(`El valor ingresado no es un número`);
   let numero1 = parseInt(prompt("Ingrese el primer número por sumar:"));
   let numero2= parseInt(prompt("Ingrese el segundo número por sumar:"));
   let resultadodesuma = numero1+numero2
 } 
 else {
   if (`${numero1}+${numero2}`) {
     document.write(`Resultado de la suma de los números ingresados: ${resultadodesuma}`);
   }
}

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


let ingresonum01 = parseFloat(prompt("Primer número"));
let ingresonum02 = parseFloat(prompt("Segundo segundo número"));
 
let numeromayor01 = (Math.max(ingresonum01 , ingresonum02)); ;

  document.write(`El número ${numeromayor01} es el más mayor. <br>`);

{

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let ingresonum1 = parseFloat(prompt("Ingrese el primer número"));
let ingresonum2 = parseFloat(prompt("Ingrese el segundo número"));
let ingresonum3 = parseFloat(prompt("Ingrese el tercer número"));
 
let numeromayor1 = (Math.max(ingresonum1 , ingresonum2 , ingresonum3)); ;
  document.write(`El número ${numeromayor1} es el más mayor`); }


//8.- Escribe un programa que pida un número y diga si es divisible por 2

let numeroUsuario = parseInt(("42"));

if (isNaN(numeroUsuario)) {
  console.warn(`El valor ${numeroUsuario} no es un número`);
} else {
  if (numeroUsuario % 2 == 0)  {
    document.write(`El número ${numeroUsuario} es divisible por 2 <br>`);
  } else {
    document.write(`El número ${numeroUsuario} no es divisible por 2 <br>`);
  }
  
}

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numDivisible = prompt("Escribe un número:")

if (isNaN(numDivisible)) {
  console.warn(`El valor ${numDivisible} no es un número`);
} else {
  if (numDivisible % 2 == 0 || numDivisible % 3 == 0 || numDivisible % 5 == 0 || numDivisible % 7 == 0) {
    console.log(`El número ${numDivisible} es divisible por 2,3,5 o 7 `);
  } 
  else{
    console.log(`El número ${numDivisible} No es divisible por 2,3,5 ni 7`);
  }
}

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


let numDivisible1 = prompt("Escribe un número:")

if (isNaN(numDivisible1)) {
  console.warn(`El valor ${numDivisible1} no es un número`);
} 
{
  if (numDivisible % 2 == 0 || numDivisible % 3 == 0 || numDivisible % 5 == 0 || numDivisible % 7 == 0){
    if (numDivisible1 % 2 == 0){
     document.write (`${numDivisible1} es divisible por 2.`)
    }
  {
    if (numDivisible1 % 3 == 0){
      document.write  (`${numDivisible1} es divisible por 3.`)
    }
  }
  if (numDivisible1 % 5 == 0){
    document.write  (`${numDivisible1} es divisible por 5.`)
  }
  if (numDivisible1 % 7 == 0){
    document.write  (`${numDivisible1} es divisible por 7.`)
  }
  }
  else{
    console.log(`El número ${numDivisible} No es divisible por 2,3,5 ni 7`);
  }
}
 
