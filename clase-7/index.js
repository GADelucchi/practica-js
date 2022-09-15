// // Función de orden superior retorna otra función o tiene de parámetro a otra función

// function mayorQueUnNumero(numero) {
//     return (numeroAComparar) => numeroAComparar >= numero
// }

// let mayorQueDiez = mayorQueUnNumero(10)

// console.log(mayorQueDiez(15));
// console.log(mayorQueDiez(10));
// console.log(mayorQueDiez(6));



// const numeros = [1, 2, 3, 4]

// function porCadaUno(array, funcionAEjecutar) {
//     for (const elemento of array) {
//         funcionAEjecutar(elemento)
//     }
// }

// function imprimirEnConsola(valor) {
//     console.log(valor)
// }

// porCadaUno(numeros, imprimirEnConsola)



// // Programación Imperativa o Tradicional
// let arrayPaises = ["Argentina", "Chile", "Mexico", "Paraguay"]

// let existeArgentina = false

// for (const pais of arrayPaises) {
//     if (pais === "Argentina") {
//         existeArgentina = true;
//         break;
//     }
// }

// // Programación Declarativa o Funcional
// existeArgentina = arrayPaises.some((elemento) => elemento === "Argentina")

// console.log(existeArgentina);




// // Find
// let arrayPaises = ["Argentina", "Chile", "Mexico", "Paraguay"]

// let elementoEncontrado = arrayPaises.find((elemento) => elemento === "Argentina")

// console.log(elementoEncontrado);



// // For each
// let arrayPaises = ["Argentina", "Chile", "Mexico", "Paraguay"]

// arrayPaises.forEach((elemento) => console.log(elemento))



// // Some
// let arrayPaises = ["Argentina", "Chile", "Mexico", "Paraguay"]

// let elementoExiste = arrayPaises.some((elemento) => elemento === "Argentina")

// console.log(elementoExiste);



// // Filter
// let arrayProductos = [
//     { nombre: "Compu", precio: 1000, cantidad: 5 },
//     { nombre: "Monitor", precio: 2350, cantidad: 3 },
//     { nombre: "Celu", precio: 650, cantidad: 1 },
// ]

// let elementosEncontrados = arrayProductos.filter((elemento)  => elemento.precio >= 1000)

// console.log(elementosEncontrados);



// // Map
// let arrayProductos = [
//     { nombre: "Compu", precio: 1000, cantidad: 5 },
//     { nombre: "Monitor", precio: 2350, cantidad: 3 },
//     { nombre: "Celu", precio: 650, cantidad: 1 },
// ]

// let nuevoArray = arrayProductos.map((elemento) => ({
//     nombre: elemento.nombre,
//     precio: elemento.precio * 1.20,
//     cantidad: elemento.cantidad,
// }))

// console.log(arrayProductos);
// console.log(nuevoArray);



// // Reduce
// let arrayProductos = [
//     { nombre: "Compu", precio: 1000, cantidad: 5 },
//     { nombre: "Monitor", precio: 2350, cantidad: 3 },
//     { nombre: "Celu", precio: 650, cantidad: 1 },
// ]

// let precioTotal = arrayProductos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)

// console.log(precioTotal);



// // Sort
// const numeros = [1, 2, 3, 4, 5, 8]

// numeros.sort((a, b) => a - b)

// console.log(numeros);

// let arrayProductos = [
//     { nombre: "Compu", precio: 1000, cantidad: 5 },
//     { nombre: "Monitor", precio: 2350, cantidad: 3 },
//     { nombre: "Celu", precio: 650, cantidad: 1 },
// ]

// arrayProductos.sort((a, b) => b.precio - a.precio)

// arrayProductos.sort((a, b) => {
//     if(a.nombre.length > b.nombre.length){
//         return 1
//     }

//     if(a.nombre.length < b.nombre.length){
//         return -1
//     }

//     return 0
// })

// console.log(arrayProductos);



// // Math.min() y Math.max()
// console.log(Math.min(55, 28, 69, -39, 93));

// console.log(Math.max(55, 28, 69, -39, 93));



// // Ceil, floor y round
// const PI = Math.PI

// // Redondear hacia arriba
// console.log(Math.ceil(PI));

// // Redondear hacia abajo
// console.log(Math.floor(PI));

// // Redondear al más cercano (arriba o abajo)
// console.log(Math.round(PI));



// // Square root (raiz cuadrada)

// console.log(Math.sqrt(9))

// console.log(Math.sqrt(-1))



// // Random

// // Número aleatorio entre 0 y 1
// console.log(Math.random());

// // Para que sea entre 0 y 10
// console.log(Math.random() * 10);

// // Para que sea entre 0 y 50
// console.log(Math.random() * 50);

// // Para que sea entre 20 y 50
// console.log(Math.random() * 30 + 20);

// const generadorNumero = () => {
//     return Math.round( Math.random() * 100)
// }

// console.log(generadorNumero());



// // Clase Date

// console.log(new Date());

// console.log(new Date(2022, 11, 25, 23, 59, 59));

// console.log(new Date("December 31, 2022 23:59:59"));

// const hoy = (new Date())

// console.log(hoy.toDateString());

// console.log(hoy.toLocaleString())

// console.log(hoy.toLocaleDateString())

// console.log(hoy.toTimeString())


// const navidad = new Date("December 25, 2021")
// const hoy = new Date("December 17, 2021")

// console.log( navidad - hoy )

// const milisegundosPorDia = 86400000

// console.log( (navidad - hoy ) / milisegundosPorDia)