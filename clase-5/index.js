// const PERSONA = {
//     nombre: "Juan",
//     apelido: "Perez",
//     edad: 25,
//     pais: "Mexico",
//     ciudad: "Monterrey",
//     esDesarrollador: true,
// }

// // Se puede iniciar un Objeto vacío, aunque no es lo normal o no tiene sentido

// console.log(PERSONA);

// // alert(PERSONA)  // no funcionará porque en alewrt se saca texto

// console.log("Nombre persona " + PERSONA.nombre)  // Estatico o Hardcode
// console.log("Edad persona " + PERSONA["edad"])  // Forma más dinámica

// personalbar.edad = 40  // Agregando un valor nuevo a la propiedad de un Oobjeto

// console.log("Nueva edad persona " + PERSONA["edad"])  // Forma más dinámica

// let propiedadDinamica = "edad"
// console.log("Edad persona con variable " + PERSONA[propiedadDinamica]);


// function persona(nombre, apellido, edad, pais, ciudad, esDesarrollador) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.pais = pais
//     this.ciudad = ciudad
//     this.esDesarrollador = esDesarrollador
//     this.saludar = function() {
//         console.log("Hola, mi nombre es " + this.nombre);
//     }
//     this.nombreCompleto = () => this.nombre + " " + this.apellido
// }

// const PERSONAUNO = new persona("Juan", "Rodriguez", 30, "Argentina", "La Plata", true)

// console.log(PERSONAUNO);


// function crearPersona() {
//     let nombre = prompt("Ingresá tu nombre")
//     let apellido = prompt("Ingresá tu apellido")
//     let edad = parseInt(prompt("Ingresá tu edad"))
//     let pais = prompt("Ingresá tu pais")
//     let ciudad = prompt("Ingresá tu ciudad")
//     let esDesarrollador = prompt("Sos desarrollador? (Si/No)")

//     let esDesarrolladorBool = false

//     if(esDesarrollador.toLocaleLowerCase() == "si") {
//         esDesarrolladorBool = true
//     }

//     const OBJETOPERSONA = new persona(nombre, apellido, edad, pais, ciudad, esDesarrolladorBool)
//     return OBJETOPERSONA
// }

// let personaUno = crearPersona()
// console.log(personaUno);

// let personaDos = crearPersona()
// console.log(personaDos);


// function crearPersona() {
//     let nombre = prompt("Ingresá tu nombre")
//     let apellido = prompt("Ingresá tu apellido")
//     let edad = parseInt(prompt("Ingresá tu edad"))
//     let pais = prompt("Ingresá tu pais")
//     let ciudad = prompt("Ingresá tu ciudad")
//     let esDesarrollador = prompt("Sos desarrollador? (Si/No)")


//     let esDesarrolladorBool = false

//     if(esDesarrollador.toLocaleLowerCase() == "si") {
//         esDesarrolladorBool = true
//     }

//     const OBJETOPERSONA = new persona(nombre, apellido, edad, pais, ciudad, esDesarrolladorBool)
//     return OBJETOPERSONA
// }

// let personaUno = crearPersona()
// personaUno.saludar()


// function persona(nombre, apellido, edad, pais, ciudad, esDesarrollador) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.pais = pais
//     this.ciudad = ciudad
//     this.esDesarrollador = esDesarrollador
//     this.saludar = function() {
//         console.log("Hola, mi nombre es " + this.nombre);
//     }
//     this.nombreCompleto = () => this.nombre + " " + this.apellido
// }

// const PERSONAUNO = new persona("Juan", "Rodriguez", 30, "Argentina", "La Plata", true)

// PERSONAUNO.saludar()
// console.log(PERSONAUNO.nombreCompleto);


// JS es orientado a prototipos, no a objetos

// class persona {
//     constructor(nombre, apellido, edad, pais, ciudad, esDesarrollador) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         this.pais = pais
//         this.ciudad = ciudad
//         this.esDesarrollador = esDesarrollador
//         this.saludar = function () {
//             console.log("Hola, mi nombre es " + this.nombre)
//         }
//         this.nombreCompleto = () => this.nombre + " " + this.apellido
//     }
// }

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.vendido = false
    }
    
    aumentarPrecio = (precioAAumentar) => this.precio = this.precio + precioAAumentar

    disminuirPrecio = (precioADisminuir) => this.precio = this.precio - precioADisminuir
}

let nombreProducto = "Macbook Pro 2018"
let precioCompra = 950
let precioVenta = 10
let cantidad = 8

const macbook = new Producto(nombreProducto, precioCompra, cantidad)

// console.log(MACBOOK.aumentarPrecio(100));
// console.log(MACBOOK.disminuirPrecio(10));

// let isPrecioVentaEnObjeto = "precioVenta" in macbook
// let isCantidad = "cantidad" in macbook

// console.log(isPrecioVentaEnObjeto);
// console.log(isCantidad);

for(let propiedadesDeObjetos in macbook) {
    console.log(propiedadesDeObjetos + " " + macbook[propiedadesDeObjetos]);
}