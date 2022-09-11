// let calificaciones = [10, 4, 6, 9, 8, 2, 8, 7, 10]

// function ordenar(array) {
//     return array.sort()
// }

// function ordenarMenorMayor(array) {
//     return array.sort((a, b) => a - b)
// }

// function ordenarMayorMenor(array) {
//     return array.sort((a, b) => b - a)
// }

// function aprobados(array) {
//     return array.filter(nota => nota >= 6)
// }

// function cantidad(array, calificacion) {
//     if (array.includes(calificacion)) {
//         return array.filter(nota => nota >= calificacion).length
//     }

//     return `Ninguno obtuvo la nota: ${calificacion}`
// }

// console.log(calificaciones);
// console.log(ordenar(calificaciones));
// console.log(ordenarMenorMayor(calificaciones));
// console.log(ordenarMayorMenor(calificaciones));
// console.log(aprobados(calificaciones));
// console.log(cantidad(calificaciones, 1));



// Ejemplo completo
let productos = [
    {nombre: `Calculadora`,
    precio:  20},
    {nombre: `Lapiz`,
    precio: 30},
    {nombre: `Cuaderno`,
    precio: 40},
    {nombre: `Computadora`,
        precio: 300},
    {nombre: `Zapatillas`,
        precio: 250}
]

function crearMensaje(){
    let mensaje = `Qué producto quiere comprar?`
    let count = 1

    for (const producto of productos){
        mensaje += `\n${count}. ${producto.nombre} - $${producto.precio}`
        count++
    }

    // mensaje += `\n${count}. Agregar producto`
    // count++

    mensaje += `\n${count}. Salir`

    return mensaje
}

function cantidad(producto) {
    return prompt(`Cuántas cantidades de ${producto.nombre} querés comprar?`)
}

function calcularSubtotal(cantidad, producto) {
    alert(`Estás comprando ${cantidad} unidades de ${producto.nombre} por $${cantidad * producto.precio}`)
    return cantidad * producto.precio
}

function calcularTotal(array) {
    return array.reduce((acumulador, elemento) => acumulador + elemento, 0)
}

let opcion = 0
let total = []

do {
    opcion = parseInt(prompt(crearMensaje()))

    if (opcion === productos.length + 1) {
        alert(`El total es de $${calcularTotal(total)}. \nGracias por visitarnos`)
        break
    }

    total.push(calcularSubtotal(cantidad(productos[opcion - 1]), productos[opcion - 1]))
} while (true   );

// prompt(crearMensaje())