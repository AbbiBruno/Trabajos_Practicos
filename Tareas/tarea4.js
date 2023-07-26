// Crear un objeto con datos de usuario: username, 
// state, role. Debe tener dos funciones, una que permita cambiar
//  el estado y otra que muestre información del usuario.

let usuario = {
    username: "Josefina", 
    state: true,
    role:"Scrum master",
    cambiodeEstado: function(){
   console.log(this.state =! this.state) 
 },
   detalles: function(){
    for (const propiedad in this) {
        if (propiedad != "cambiodeEstado" && propiedad != "detalles") {
            console.log (`${propiedad}:${this[propiedad]}`)
            
        }
   }
}
};


/*Crear un arreglo de objetos que contenga información de productos (por lo menos 10).
 Los datos que debe almacenar cada objeto son:

Nombre

Detalle

Stock

Precio unitario

Marca

Crear una función que muestre en pantalla una lista de los productos con nombre, detalle y precio.
Crear una función de búsqueda donde le pasemos como parámetro un termino y busque
 productos cuyo nombre coincida en parte con el termino enviado como parámetro.*/

 let productos=[
    {nombre:"Auriculares Inalámbricos", 
    detalle:"Bluetooth* 5.3 avanzado para una conexion estable", 
    stock: "43 unidades", 
    precio: "$13000", 
    marca: "Xiaomi"},

    {nombre:"Mouse Bluetooth", 
    detalle:"Resolución del sensor: 1600 dpi",
    stock: "22 unidades", 
    precio: "$8000",
     marca: "Logitech "},

    {nombre:"Notebook Bangho", 
    detalle:"Core I7 16gb Ssd 480gb",
    stock: "34 unidades",
    precio: "$300000",
    marca: "Bangho "},

    {nombre:"Tablet Samsung Galaxy",
     detalle:" 64GB silver y 4GB de memoria RAM",
     stock: "30 unidades", 
     precio: "$134000",
      marca: "Samsung"},

    {nombre:"Teclado", 
    detalle:" teclado mecánico 60%. 61 teclas.",
    stock: "21 unidades",
     precio: "$13500",
     marca: " t-dagger"},

    {nombre:"Parlante Inalámbrico", 
    detalle:"Philips Bt60bk/94 Radio Fm Negro",
    stock: "53 unidades",
    precio: "$10000",
    marca: "Philips"},

    
    {nombre:"Micrófono HyperX", 
    detalle:"Recomendado para streaming, juegos, grabaciones.",
    stock: "15 unidades",
     precio: "$42000",
     marca: "HyperX"},

    {nombre:"Silla de escritorio Baires4 Ejecutiva",
     detalle:"negra con tapizado de mesh y cuero sintético",
     stock: "22 unidades", 
     precio: "$30700",
     marca: "Baires4"},

    {nombre:"Velador Lampara De Escritorio",
     detalle:"Touch Inalambrico y luz led.",
     stock: "18 unidades",
      precio: "$5200",
      marca: "Spica"},
      
    {nombre:"Parlante JBL Go Essential",
     detalle:"Dimensiones: 8.6cm de ancho, 71.2mm de alto y 31.6mm de profundidad.",
     stock: "31 unidades",
      precio: "$18600",
      marca: "JBL"},


 ]

 const listaProductos=()=>{
document.write("Productos:<br>")
productos.forEach(function(producto){
document.write(`<ul>
<li>  Producto: ${producto.nombre}  </li>
<li>  Detalle: ${producto.detalle}  </li>
<li>  Precio: ${producto.precio}  </li>
</ul>`);

}
) 
 }

 const busqueda=(buscar)=>{
    let resultadoDeBusqueda= productos.filter(function(producto){
        return producto.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
    });
    return resultadoDeBusqueda;
 }