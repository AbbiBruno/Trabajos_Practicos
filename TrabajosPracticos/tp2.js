// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
// si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad = parseInt(prompt("Ingrese su edad:"));

switch (true){

    case edad >= 18: console.log("Puedes conducir!");
    break;
    
    default: console.log (`${edad} No es un número valido. Intente nuevamente.`)
  }


//   2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

let calificacion = parseInt(prompt("Ingrese su calificación:"))

if (isNaN(calificacion)){
  alert("El número ingresado no es valido")
} else{
  if(calificacion <=2 ){
    alert ("Muy deficiente")
  }
  else if(calificacion <=4 ){
    alert ("Insuficiente")
  }
  else if(calificacion <=6 ){
    alert ("Suficiente")
  }
  else if(calificacion ==7 ){
    alert ("Bien")
  }
  else if(calificacion <=9 ){
    alert ("Notable")
  }
  else if (calificacion ==10 ){
    alert ("Sobresaliente")
  }
  else {
    (calificacion >10)
    alert("número erróneo")
  }
}

  
// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.


 let texto = prompt("Ingrese su texto")
 let resultado = ""

 while (texto){
   resultado = resultado + '-' + texto;

   texto = prompt("Ingrese su texto")
 } 
 console.log(resultado)




// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let numero = 0;

do {
	numero = prompt('Ingresa un numero:');
	
	if (!isNaN(parseInt(numero)) && numero !=null) {
	
        suma = suma + parseInt(numero);
        console.log('suma ' + suma);
	} else {
		
		if (numero != null) {
			alert("el valor ingresado no es un numero! intenta nuevamente!");
		}
	}
	
} while (numero != null);

document.write('Total: '+ suma);



    



// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// Ejemplo: 



// Input:  40773821 
// Output: ‘L’



let resto = 0;
let letra = "";
do {
    let numero = prompt("Ingrese su dni");
    if (!isNaN(numero) && numero !=null) {  
        numero= parseInt(numero);
        if (numero >= 0 && numero <= 99999999) {
            
            resto = numero % 23;
            console.log(resto);
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
               
                    alert('Ingrese un numero valido');
                }
                alert("Numero: " + numero + ", Letra: " + letra);
        }
    }else{
        alert('Ingrese un numero valido');
    }
} while(confirm('¿Desea continuar?'))