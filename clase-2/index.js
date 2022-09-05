let nombre = prompt("Ingresa tu nombre")
let anioNacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
const ANIOACTUAL = 2022;
let edad = ANIOACTUAL - anioNacimiento;

if (edad >= 18) {
    alert(nombre + ", puedes beber alcohol")
} else {
    alert(nombre + ", no puedes beber alcohol")
};

// Act. 1
let name = prompt("Ingrese un nombre")
let nameIn = "Pedro"

if (name == nameIn) {
    alert("Fui yo")
} else {
    alert("Yo no fui")
}

// Act. 2
let letter = prompt("Ingrese una letra")

if (letter == "y" || letter == "Y") {
    alert("Correcto")
} else {
    alert("Error")
}

// Act. 3
let number = prompt("Ingresa un número")

if (number == 1) {
    alert("Elegiste a Homero")
} else if (number == 2) {
    alert("Elegiste a Marge")
} else if (number == 3) {
    alert("Elegiste a Bart")
} else if ( number == 4) {
    alert("Elegiste a Lisa")
} else {
    alert("Ingresá un número!!")
}

// Act. 4
let valor = parseInt(prompt("Ingresá un número"))

if (valor >= 0 && valor <= 1000) {
    alert("Presupuesto bajo")
} else if (valor >= 1001 && valor <= 3000) {
    alert("Presupuesto medio")
} else if (valor > 3000) {
    alert("Presupuesto alto")
} else {
    alert("Error")
}

// Act. 5
let itemOne = prompt("Ingrese el item 1")
let itemTwo = prompt("Ingrese el item 2")
let itemThree = prompt("Ingrese el item 3")
let itemFour = prompt("Ingrese el item 4")

if (itemOne != "" && itemTwo != "" && itemThree != "" && itemFour != "") {
    alert("Item 1: " + itemOne + "\nItem 2: " + itemTwo + "\nItem 3: " + itemThree + "\nItem 4: " + itemFour)
} else {
    alert("Error")
}