function pedirNombre() {
    let nombre = prompt("Ingresá tu nombre")
    alert("Ingresaste " + nombre)
}

pedirNombre()



function conParametros(parametroUno, parametroDos) {
    console.log(parametroUno + " " + parametroDos);
}

conParametros("Hola", "gil")



let resultado = 0
function sumar(numeroUno, numeroDos) {
    resultado = numeroUno + numeroDos
}

function mostrar(mensaje) {
    console.log(mensaje);
}

sumar(5,6)
mostrar(resultado)



// Calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero
            break
        case "-":
            return primerNumero - segundoNumero
            break
        case "*":
            return primerNumero * segundoNumero
            break
        case "/":
            return primerNumero / segundoNumero
            break
        default:
            return 0
            break
    }
}

console.log(calculadora(70000,30,"/"));



const SUMA = function (a,b) {return a + b}
const RESTA = function (a,b) {return a - b}

console.log(SUMA(3,65))
console.log(RESTA(7,5))
