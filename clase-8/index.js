// Obtener elementos por id
let div = document.getElementById("app")
let parrafo = document.getElementById("parrafo1")

console.log(div.innerHTML);
console.log(parrafo.innerHTML);



// Obtener elementos por class name
let paises = document.getElementsByClassName("paises")
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);



// Obtener elementos por tag name
let contenedores = document.getElementsByTagName("div")
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);
console.log(contenedores[3].innerHTML);



// Recorrer HTML con for…of
for (const pais of paises) {
    console.log(pais.innerHTML);
}

for (const div of contenedores) {
    console.log(div.innerHTML);
}



// Modificar el texto de un nodo con .innerText
let titulo = document.getElementById("titulo")
console.log(titulo.innerText);

titulo.innerText = "Hola Coder!"
console.log(titulo.innerText);

// Ejemplo
let html = document.getElementById(`usuario`)
let usuario = prompt(`Ingresá tu usuario`)

html.innerText = `Hola ${usuario}`



// Modificar la estructura con .innerHTML
let container = document.getElementById("contenedor")

container.innerHTML = `<h2>Hola Crackss!</h2><p>Lorem</p>`

container.className = "container row"



// Crear elementos desde JS
let parrafoo = document.createElement(`p`)

parrafoo.innerHTML = `<h2>Hola Wachín!</h2>`

document.body.append(parrafoo)



// Eliminr nodos desde JS
let parrafe = document.getElementById(`parrafo1`)

console.log(parrafe);

parrafe.remove()

console.log(parrafe);

let paisess = document.getElementsByClassName(`paises`)

console.log(paisess);

paisess[0].remove()



// Obtener datos de inputs
document.getElementById(`nombre`).value = "HOMERO"
document.getElementById(`edad`).value = "39"

// Ejemplo
let padre = document.getElementById(`personas`)

let personas = [`HOMERO`, `MARGE`, `LISA`, `BART`, `MAGGIE`]

for (const persona of personas) {
    let li = document.createElement(`li`)
    li.innerHTML = persona
    padre.appendChild(li)
}



/* Las plantillas literales usan las back tips en cambio de las comillas dobles, 
esto permite concatenar variables o constantes son el signo pesos sin tener que 
cerrar comillas y agregar el signo mas*/
const productos = [{ id: 1, nombre: `Arroz`, precio: 125 },
{ id: 2, nombre: `Fideo`, precio: 70 },
{ id: 3, nombre: `Pan`, precio: 50 },
{ id: 4, nombre: `Flan`, precio: 100 }]

for (const producto of productos) {
    let contenedor = document.createElement(`div`)
    contenedor.innerHTML = `<h3>ID: ${producto.id}</h3>
                            <p>Nombre: ${producto.nombre}</p>
                            <b>Precio: $${producto.precio}<b>`
    document.body.appendChild(contenedor)
}



// Obtener elementos por query selector
let parrafee = document.querySelector(`#contenedor p`)
console.log(parrafee);

let contenedor = document.querySelector(`#contenedor`)
console.log(contenedor);

let contenedoress = document.querySelectorAll(`div`)
console.log(contenedoress);



// Modificar el CSS desde JS
parrafee = document.querySelector(`.texto`)
console.log(parrafee);