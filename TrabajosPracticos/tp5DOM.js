// 1. Cambiar el color de fondo de un elemento:
// - Crea un botón en tu HTML con un ID único.
// - Al hacer clic en el botón, cambia el color de fondo de un elemento (por 
// ejemplo, un párrafo) a un color aleatorio


let button = document.querySelector("#button");
let card1 = document.querySelector("#card1");


function cambioDeColor() {
   color = "pink";
  return color;
}


button.addEventListener("click", function() {
  card1.style.backgroundColor = cambioDeColor();
});




// let button = document.getElementById("button");

// // Obtener el elemento cuyo color de fondo se va a cambiar
// let card1 = document.getElementById("card1");

// // Crear una función para generar un color aleatorio en formato hexadecimal
// function colorAleatorio() {
//   var letras = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letras[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // Añadir un evento de clic al botón
// button.addEventListener("click", function() {
//   // Cambiar el color de fondo del elemento al color aleatorio generado
//   card1.style.backgroundColor = colorAleatorio();
// });






// 2. Contador de clics:
// - Crea un botón en tu HTML con un ID único y un párrafo para mostrar el 
// número de clics.
// - Al hacer clic en el botón, incrementa el contador y muestra el número de 
// clics en el párrafo


let contador= 0;
let boton= document.querySelector("#boton");
let clics= document.querySelector("#clics");

boton.onclick = function(){
  contador++;
  clics.innerText= contador;
}



// 3. Cambiar el estilo de un elemento con el mouse:
// - Crea un párrafo en tu HTML con un ID único.
// - Al pasar el mouse sobre el párrafo, cambia el color de fondo y el color del 
// texto del párrafo.



let parrafo = document.querySelector("#parrafo");

parrafo.addEventListener("mouseover", function() {

  parrafo.style.color = "pink";

});


parrafo.addEventListener("mouseout", function() {
  parrafo.style.color = "black";
});





// 4. Reloj digital:
// - Crea un párrafo en tu HTML con un ID único.
// - Utilizando JavaScript, actualiza el contenido del párrafo para mostrar la 
// hora actualizada cada segundo

function curretime(){
  let date = new Date();
  let hh= date.getHours();
  let mm= date.getMinutes();
  let ss= date.getSeconds();

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let tiempo = hh + ":" + mm + ":" + ss ;
  let reloj = document.querySelector("#reloj");

  reloj.innerHTML = tiempo;
}

setInterval (curretime, 1000);



// 5. Lista de tareas:
// - Crea un formulario con un campo de texto y un botón en tu HTML.
// - Al hacer clic en el botón, agrega el contenido del campo de texto como un 
// nuevo elemento de lista <li> a una lista <ul> existente en la página
let campo = document.querySelector("#campo");
let acciones = document.querySelector ("#acciones");
let listaEnPantalla = document.querySelector ("#mostrarTexto");



const guardarDatos=(event)=>{
  event.preventDefault();

  let texto = acciones.value;

  let li = document.createElement("li");
  li.textContent= texto;


  listaEnPantalla.appendChild(li);
  listaEnPantalla.value = "";

  document.querySelector("form").reset();
  acciones.focus();
};






// 6. Cambiar el tamaño de texto:
// - Crea un párrafo en tu HTML con un ID único y dos botones: "Aumentar" y 
// "Disminuir".
// - Al hacer clic en "Aumentar", aumenta el tamaño del texto en el párrafo.
// - Al hacer clic en "Disminuir", disminuye el tamaño del texto en el párrafo.




function cambioDeMedida (medida){
  let parrafoMedida = document.querySelector("#parrafoMedida");

let medidaTotal = parseInt (window.getComputedStyle(parrafoMedida).fontSize);

let nuevaMedida= medidaTotal + medida;

parrafoMedida.style.fontSize= nuevaMedida + "px";

}



// 7. Lista de tareas con eliminación:
// - Mejora el ejercicio de "Lista de tareas" del nivel medio anterior.
// - Agrega un botón "Eliminar" junto a cada elemento de la lista.
// - Al hacer clic en el botón "Eliminar", elimina el elemento correspondiente de 
// la lista.








// 9. Galería de imágenes:
// - Crea una galería de imágenes en tu HTML con miniaturas de imágenes.
// - Al hacer clic en una miniatura, muestra la imagen completa en un cuadro 
// modal.
// - Permite al usuario navegar entre las imágenes utilizando botones "Anterior" 
// y "Siguiente" en el cuadro modal