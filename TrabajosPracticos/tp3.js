// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.


const resultado =function(numero){
    if (!isNaN(numero)){
    if (numero %2==0) {
        alert("El número ingresado es par!")
    }
    else{
        alert("El resultado es impar!")
    }
    }
    } 
    

 //5- Definir una función que muestre información sobre una cadena de texto que se le pasa como 
 //argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo
 // por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

 const cadena = function (texto=prompt("Ingrese una cadena de texto:")) {
    if(!isNaN(texto)){
        return 'Ingresaste un numero! ingresa una cadena de texto.'
    }else{
        if (texto == texto.toUpperCase()) {
            return "El texto contiene sólo mayúsculas."
        } else if (texto == texto.toLowerCase()) {
            return "El texto contiene sólo minúsculas."
        } else if (texto == texto.toLowerCase().toLocaleUpperCase()) {
            return "El texto contiene mayúsculas y minúsculas."
        }
    }
    }



//  6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
//  luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//  La fórmula del perímetro  es p = 2*(a +b)
 
const calculodeperimetro = function( 
    valor1 = Number(prompt('Ingrese el primer valor del rectángulo:')),
    valor2 =Number(prompt('Ingrese el segundo valor del rectángulo:'))){
    if(isNaN(valor1,valor2)){
        return'Ingresa sólo números.'
    }else {
        let perimetro = (valor1 + valor2) * 2;
        return `Su perímetro es: ${perimetro}`
    }
}



//  7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.



function tablaMultiplicacion (numero =parseInt.prompt("Ingrese el número a multiplicar:")){

    if(isNaN(numero)){
        return alert("Ingrese un número válido.")
    }

    document.write(`Tabla del ${numero} <br>`)
for (let i = 1; i <= 10; i++) {
    
    document.write(`${numero} x ${i} = ${numero * i} <br>`)
}
}
