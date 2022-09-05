for(let i = 1; i <= 10; i ++) {
    alert(i)
}

let entrada = prompt("Hola")
while(entrada != "ESC") {
    alert("Ingresaste " + entrada)
    entrada = prompt("Ingresa otro dato")
}

let numero = 0;
do {
    numero = prompt("Ingresa un número")
    alert(numero)
}while (parseInt(numero))

let entry = prompt("Ingresa un nombre")
while(entrada != "ESC") {
    switch(entrada) {
        case "Ana":
            alert("Hola " + entrada)
            break
        case "Juan":
            alert("Hola " + entrada)
            break
        default:
            alert("Quien sos??")
            break
    }
    entrada = prompt("Ingresá tu nombre")
}

// Act. 1
let times = prompt("Ingresa cantidad de veces de repetición")
let text = prompt("Ingresa un texto a repetir")

for(let i = 0; i < times; i++){
    alert(i + ". " + text)
}

// Act. 2
let sides = prompt("Ingrese un número")

for(let i = 0; i < sides; i++){
    if(i > 3){
        break
    }
    alert("Lado")
}

// Act. 3
let students = " "
for(let i = 0; i < 10; i++){
    students += prompt("Ingresar nombre del alumno") + "\n"
}
alert(students)

// Act. 4
let inombrable = prompt("Ingresa un nombre")
let ingresados = ""

while(inombrable != "Voldemort"){
    ingresados += inombrable + "\n"
    inombrable = prompt("Ingresar nombre")
}
alert("ingresados")

// Act. 5
