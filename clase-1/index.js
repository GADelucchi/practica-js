var unNumero = 30;
var otroNumero = "20";
var resultado = unNumero + otroNumero;

console.log(typeof resultado);
console.log(resultado);


let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let anioNacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
const ANIOACTUAL = 2022;
let edadActual = ANIOACTUAL - anioNacimiento;

console.log(typeof anioNacimiento);
alert("Hola " + nombre + " " + apellido + ", tienes " + edadActual + " años.");

// Ejercicios del Booklet
// Act. 1
let name = "Homero";
let lastName = "Simpson";
let age = "44";

// Act. 2
const CIUDAD1 = "La PLata";
const CIUDAD2 = "Buenos Aires";
const CIUDAD3 = "Mar del Plata";
const CIUDAD4 = "Ushuaia";
const CIUDAD5 = "Esquel";

// Act. 3
let person = "Gastón A. Delucchi";
let dateBirth = "03/07/1997";
let street = "Calle 69 n786";
let country = "Argentina";
const CODE = "ARG20405687292GAD";
let carnet = "Codigo: " + CODE + " " +
            "Nombre: " + person + " " +
            "Nacimiento: " + dateBirth + " " +
            "Domicilio: " + street + " " +
            "País: " + country;
console.log(carnet);

// Act. 4
let nameOne = prompt("Ingrese el primer nombre");
let nameTwo = prompt("Ingrese el segundo nombre");
let nameThree = prompt("Ingrese el tercer nombre");
let nameFour = prompt("Ingrese el cuarto nombre");
let nameFive = prompt("Ingrese el quito y último nombre");
const COMA = ", ";

let allNames = "Usted ingresó " + nameOne + COMA + nameTwo + COMA + nameThree + COMA + nameFour + " y " + nameFive
alert(allNames)

// Act. 5
