// // Declarar un Array (o Arreglo)
// let arrayCiudades = [];

// let arrayPalabras = ["Hola", "mundo", "desde", "JavaScript"];
// let arrayNumeros = [1, 2, 3, 4];
// let arrayBooleanos = [true, false, false];
// let arrayMixto = ["Hola", false, 5];



// // Acceder a los elementos de un Arreglo (o Array)
// let arrayPaises = ["Argentina", "Colombia", "Mexico", "Peru"];

// console.log(arrayPaises[2]);

// console.log(arrayPaises[0] + arrayPaises[2]);



// // Imprimir todos los elementos de un Array
// for(let index = 0; index < arrayPaises.length; index++) {
//     console.log("Índice: " + index + " : " + arrayPaises[index]);
// };



// // Agregar un elemento a un Array
// let arrayNombres = ["Pedro", "Juan", "Gaston"];
// console.log(arrayNombres);

// let nombre = "Alan";
// arrayNombres.push(nombre);
// console.log(arrayNombres);

// let nombre = "Pepito";
// arrayNombres.unshift(nombre);
// console.log(arrayNombres);



// // Quitar elementos de un Array
// let arrayNombres = ["Pedro", "Juan", "Gaston"];
// console.log(arrayNombres);

// arrayNombres.pop();
// console.log(arrayNombres);

// arrayNombres.shift();
// console.log(arrayNombres);



// // Quitar varios elementos de un Array
// let arrayNombres = ["Pedro", "Juan", "Gaston"];
// arrayNombres.splice(0, 2)
// console.log(arrayNombres);



// // Concatenar 2 Arrays
// let arrayNombres = ["Pedro", "Juan", "Gaston"];
// let arrayPalabras = ["Hola", "mundo", "desde", "JavaScript"];

// let arrayCombinado = arrayNombres.concat(arrayPalabras)

// console.log(arrayNombres);
// console.log(arrayPalabras);
// console.log(arrayCombinado);



// // Concatenar todos los Arrays
// let arrayNombres = ["Pedro", "Juan", "Gaston"];
// let arrayPalabras = ["Hola", "mundo", "desde", "JavaScript"];

// let arrayConcatenado = arrayNombres.join("-")

// console.log(arrayConcatenado);



// // Copiar una parte del Array
// let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];

// let porcionArray = arrayNombres.slice(1, 3)

// console.log(porcionArray);



// // Conocer el index de un elemento en el Array
// let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
// console.log(arrayNombres.indexOf("Melina"));



// // Conocer si el elemento existe
// let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
// console.log(arrayNombres.includes("Melina"));



// // Invierte un arreglo
// let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
// console.log(arrayNombres.reverse());



// // For of
// let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
// for(let nombre of arrayNombres) {
//     console.log(nombre);
// }



// // Modificar elemento existente
// let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
// console.log(arrayNombres);

// arrayNombres[0] = "Pepe"
// console.log(arrayNombres);



// // Eliminar elemento específico
// let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];

// function eliminarElemento(nombre) {
//     let index = arrayNombres.indexOf(nombre)
//     if (index != -1) {
//         arrayNombres.splice(index, 1)
//     } else {
//         alert("Nombre no encontrado")
//     };
// };

// let valorAEliminar = prompt("Ingresá un nombre");
// eliminarElemento(valorAEliminar);
// console.log(arrayNombres);



// // Ejemplo completo (Array de objetos)
// class Producto {
//     constructor (nombre, precioCompra, precioVenta, cantidad) {
//         this.nombre = nombre.toUpperCase();
//         this.precioCompra = precioCompra;
//         this.precioVenta = precioVenta;
//         this.cantidad = cantidad;
//     }
//     calcularCosto = () => this.cantidad * this.precioCompra;
// }

// function agregarProductos() {
//     let productos = [];
//     let numeroProductos = parseInt(prompt("Cuántos productos se van a registrar?"));
//     for (let index = 0; index < numeroProductos; index++) {
//         let nombre = prompt("Ingrese el nombre del producto");
//         let precioCompra = parseFloat(prompt("Ingrese el precio de compra"));
//         let precioVenta = parseFloat(prompt("Ingrese el precio de venta"));
//         let cantidad = parseInt(prompt("Ingrese la cantidad"));

//         let productoARegistrar = new Producto(nombre, precioCompra, precioVenta, cantidad);

//         productos.push(productoARegistrar)
//     }

//     return productos
// }

// function mostrarProductos(productos) {
//     for (let producto of productos) {
//         console.log(producto);
//         console.log(producto.nombre);

//     }
    
// }

// function calcularCosto(productos) {
//     let sumatoriaCosto = 0;
//     for (let producto of productos) {
//         sumatoriaCosto = sumatoriaCosto + producto.calcularCosto()
//     }
//     return sumatoriaCosto
// }

// function main() {
//     let productos = agregarProductos()
//     mostrarProductos(productos)
//     console.log(productos)
//     let costoAlmacen = calcularCosto(productos)
//     alert("El costo total del almacen es: " + costoAlmacen)
// }

// main()



// Act. 1