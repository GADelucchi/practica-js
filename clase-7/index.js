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



// Filter