// Declarar un Array (o Arreglo)
let arrayCiudades = [];

let arrayPalabras = ["Hola", "mundo", "desde", "JavaScript"];
let arrayNumeros = [1, 2, 3, 4];
let arrayBooleanos = [true, false, false];
let arrayMixto = ["Hola", false, 5];



// Acceder a los elementos de un Arreglo (o Array)
let arrayPaises = ["Argentina", "Colombia", "Mexico", "Peru"];

console.log(arrayPaises[2]);

console.log(arrayPaises[0] + arrayPaises[2]);



// Imprimir todos los elementos de un Array
for(let index = 0; index < arrayPaises.length; index++) {
    console.log("Índice: " + index + " : " + arrayPaises[index]);
};



// Agregar un elemento a un Array
let arrayNombres1 = ["Pedro", "Juan", "Gaston"];
console.log(arrayNombres1);

let nombre1 = "Alan";
arrayNombres1.push(nombre1);
console.log(arrayNombres1);

let nombre2 = "Pepito";
arrayNombres1.unshift(nombre2);
console.log(arrayNombres1);



// Quitar elementos de un Array
let arrayNombres2 = ["Pedro", "Juan", "Gaston"];
console.log(arrayNombres2);

arrayNombres2.pop();
console.log(arrayNombres2);

arrayNombres2.shift();
console.log(arrayNombres2);



// Quitar varios elementos de un Array
let arrayNombres3 = ["Pedro", "Juan", "Gaston"];
arrayNombres3.splice(0, 2)
console.log(arrayNombres3);



// Concatenar 2 Arrays
let arrayNombres4 = ["Pedro", "Juan", "Gaston"];
let arrayPalabras1 = ["Hola", "mundo", "desde", "JavaScript"];

let arrayCombinado = arrayNombres4.concat(arrayPalabras1)

console.log(arrayNombres4);
console.log(arrayPalabras1);
console.log(arrayCombinado);



// Concatenar todos los Arrays
let arrayNombres5 = ["Pedro", "Juan", "Gaston"];
let arrayPalabras2 = ["Hola", "mundo", "desde", "JavaScript"];

let arrayConcatenado = arrayNombres5.join("-")

console.log(arrayConcatenado);



// Copiar una parte del Array
let arrayNombres6 = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];

let porcionArray = arrayNombres6.slice(1, 3)

console.log(porcionArray);



// Conocer el index de un elemento en el Array
let arrayNombres7 = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
console.log(arrayNombres7.indexOf("Melina"));



// Conocer si el elemento existe
let arrayNombres8 = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
console.log(arrayNombres8.includes("Melina"));



// Invierte un arreglo
let arrayNombres9 = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
console.log(arrayNombres9.reverse());



// For of
let arrayNombres10 = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
for(let nombre of arrayNombres10) {
    console.log(nombre);
}



// Modificar elemento existente
let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];
console.log(arrayNombres);

arrayNombres[0] = "Pepe"
console.log(arrayNombres);



// Eliminar elemento específico
let arrayNombres = ["Pedro", "Juan", "Gaston", "Melina", "Florencia", "Pablo"];

function eliminarElemento(nombre) {
    let index = arrayNombres.indexOf(nombre)
    if (index != -1) {
        arrayNombres.splice(index, 1)
    } else {
        alert("Nombre no encontrado")
    };
};

let valorAEliminar = prompt("Ingresá un nombre");
eliminarElemento(valorAEliminar);
console.log(arrayNombres);



// Ejemplo completo (Array de objetos)
class Producto {
    constructor (nombre, precioCompra, precioVenta, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioCompra;
}

function agregarProductos() {
    let productos = [];
    let numeroProductos = parseInt(prompt("Cuántos productos se van a registrar?"));
    for (let index = 0; index < numeroProductos; index++) {
        let nombre = prompt("Ingrese el nombre del producto");
        let precioCompra = parseFloat(prompt("Ingrese el precio de compra"));
        let precioVenta = parseFloat(prompt("Ingrese el precio de venta"));
        let cantidad = parseInt(prompt("Ingrese la cantidad"));

        let productoARegistrar = new Producto(nombre, precioCompra, precioVenta, cantidad);

        productos.push(productoARegistrar)
    }

    return productos
}

function mostrarProductos(productos) {
    for (let producto of productos) {
        console.log(producto);
        console.log(producto.nombre);

    }
    
}

function calcularCosto(productos) {
    let sumatoriaCosto = 0;
    for (let producto of productos) {
        sumatoriaCosto = sumatoriaCosto + producto.calcularCosto()
    }
    return sumatoriaCosto
}

function main() {
    let productos = agregarProductos()
    mostrarProductos(productos)
    console.log(productos)
    let costoAlmacen = calcularCosto(productos)
    alert("El costo total del almacen es: " + costoAlmacen)
}

main()



// Act. 1
const arrayNombres = ["Moe", "Homero", "Montgomery", "Apu"];

for (let index = 0; index < arrayNombres.length; index++) {
    console.log("Índice: " + index + " - " + arrayNombres[index]);
};



// Act. 2
const arrayEquipo = []

let entrada = prompt("ingresá un jugador").toUpperCase;

while (entrada != "ESC") {
    arrayEquipo.push(entrada);
    entrada = prompt("ingresá un jugador").toUpperCase;
}

for (let index = 0; index < arrayEquipo.length; index++) {
    alert("Número: " + index + " - " + arrayEquipo[index])
}



// Act. 3
class Jugador {
    constructor(nombre, camiseta, edad, lesionado) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

const jugadores = [];
jugadores.push(new Jugador("BART", 15 , 11, false));
jugadores.push(new Jugador("NELSON", 2 , 18, false));
jugadores.push(new Jugador("MILHOUSE", 68 , 12, true));
jugadores.push(new Jugador("MARTIN", 0 , 11, false));
jugadores.push(new Jugador("ROD", 98 , 12, false));
console.log(jugadores);



// Act 4
function buscarJugador(equipo, jugador){
    return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarJugador(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if(busqueda != undefined){
        alert('JUGADOR '+busqueda.nombre+' CAMISETA '+busqueda.camiseta+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
}



// Act. 5
function filtroJugadores(equipo, edad) {
    return equipo.filter(objeto => objeto.edad == parseInt(edad));
}
function listaJugadores(jugadores) {
    let lista = '';
    for (const jugador of jugadores) {
        lista += 'JUGADOR ' + jugador.nombre + ' CAMISETA ' + jugador.camiseta + ' EDAD ' + jugador.edad + '\n'
    }
    return lista;
}
for (let index = 0; index < 5; index++) {
    let filtro = filtroJugadores(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if (filtro.length > 0) {
        alert(listaJugadores(filtro));
    } else {
        alert('NO EXISTE JUGADORES CON ESA EDAD');
    }
}
