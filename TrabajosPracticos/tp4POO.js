/*1- Crea un objeto llamado auto que tenga algunas características como el color,
 marca, modelo y si está encendido o apagado.
  Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();   auto encendido
objeto.apagar()    El auto se apagó*/


let auto= 
{
    color: "Azul",
    marca: "Ford",
    modelo:"Falcon",
    encendido: false,
    encender: function() {
       this.encendido = true
        console.log("auto encendido!")  ;
      },
      apagar: function() {
        this.encendido = false
        console.log("auto apagado!");
      }
               

}




/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho,
 mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.*/

 // class Figura {
//   constructor(alto, ancho){
//       this.lado1=alto;
//       this.lado2= ancho;
//       //propiedades
//       // perimetro
//       // area
//   }
// rectangulo(){
//   console.log("Propiedades del rectángulo:");
//   console.log(`Alto: ${this.alto}`)
//   console.log(`Ancho: ${this.ancho}`)
// }
// calcularPerimetro() {
//      return (this.alto + this.ancho) * 2;
//      }
// }

// let propiedades = new Figura(10 , 20);






class Figura {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    propiedades(){
        console.log("Propiedades del rectángulo:");
         console.log(`Alto: ${this.alto}`)
        console.log(`Ancho: ${this.ancho}`)
      }
  
  calcularPerimetro() {
    return (this.alto + this.ancho) * 2
  }
  
  calcularArea() {
       return this.alto * this.ancho;
      }
        
     }
  
  const rectangulo = new Figura(10, 20);
  
  
  
  
  
  
//   4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio,
//    además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.


class Producto{
  constructor(codigo, nombre, precio){

      this.codigo=codigo;
      this.nombre=nombre;
      this.precio=precio;
  }

  imprimeDatos(){
      document.write(`Código: ${this.codigo}<br>`);
      document.write(`Producto: ${this.nombre}<br>`);
      document.write(`Precio: ${this.precio}<br>`);
      document.write("-----------------<br>")
  }

}

let product1= new Producto("234221","Puré de tomate", "$350");

let productosGeneral= [
  new Producto("22334", "Aceite Natura", "$1200"),
  new Producto("4435", "Arroz", "$400"),
  new Producto("15543", "Mermelada de frutilla", "$480"),

]

for (let i = 0; i < productosGeneral.length; i++) {
  productosGeneral[i].imprimeDatos();

}







  // 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y 
// cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:


class Persona{
  constructor(nombre, edad, DNI, sexo, peso, altura, añoDeNacimiento){

    this.nombre=nombre;
    this.edad=edad;
    this.dni=DNI;
    this.sexo=sexo;
    this.peso=peso;
    this.altura=altura;
    this.añoDeNacimiento=añoDeNacimiento;
  }

  
  
 
  mostrarGeneracion(){
    switch (true) {
      case generaciones1.añoDeNacimiento >= "1994" && generaciones1.añoDeNacimiento <= "2010" || generaciones1.edad <=29 && generaciones1.edad >=13:
        console.log("Generación a la que pertenece: Generacion Z");
        console.log("Rasgo característico: Irreverencia")
        
        break;

        case generaciones1.añoDeNacimiento >= "1981" && generaciones1.añoDeNacimiento <= "1993" || generaciones1.edad <=41 && generaciones1.edad >=30:
        console.log("Generación a la que pertenece: Generación Y (Milennials)");
        console.log("Rasgo característico: Frustración")

        break;

        case generaciones1.añoDeNacimiento >= "1969" && generaciones1.añoDeNacimiento <= "1980" || generaciones1.edad <=54 && generaciones1.edad >=43:
          console.log("Generación a la que pertenece: Generación X");
          console.log("Rasgo característico: Obsesión por el éxito")
        break;
        
        case generaciones1.añoDeNacimiento >= "1949" && generaciones1.añoDeNacimiento <= "1968" || generaciones1.edad <=74 && generaciones1.edad >=55:
          console.log("Generación a la que pertenece: Baby Boom");
          console.log("Rasgo característico: Ambición")
          
        
        break;

        case generaciones1.añoDeNacimiento >= "1930" && generaciones1.añoDeNacimiento <= "1948" || generaciones1.edad <=93 && generaciones1.edad >=75:
          console.log("Generación a la que pertenece: Silent Generation");
          console.log("Rasgo característico: Austeridad")
        
        break;
        case generaciones1.añoDeNacimiento < "1930" && generaciones1.añoDeNacimiento > "2010" || generaciones1.edad >93 && generaciones1.edad <13:
          console.log("Verifique los datos ingresados");
    
     
        break;

        default: console.log("Ingrese un valor")
    }
  }


  esMayorDeEdad(){
    if (generaciones1.edad >=18) {
      console.log(`Usted ${this.nombre}, es mayor de edad.`)
    } else {
    console.log ("Usted es menor!")
    }
  }

  mostrarDatos(){
    console.log(`Nombre:${this.nombre}`);
    console.log(`Edad:${this.edad}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Sexo:${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Año de nacimiento: ${this.añoDeNacimiento}`);
  }
}
let generaciones1= new Persona("Paola", "23", "43963328", "M", "57kg", "1,60", "2000")



