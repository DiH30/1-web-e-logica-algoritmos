import {add, imprimir } from './math.js';

console.log( add(2, 3)); //5

//Forma1
function saludo (nombre, color){
    let mensaje = `Hola ${nombre} tu color es ${color}`
    return mensaje
}

//Forma2
let mensaje = (nombre, color) => {
    let mensaje = `Hola ${nombre} tu color es ${color}`
    return mensaje
}

//Forma 3
let llamada = (nombre, color) => `Hola ${nombre} tu color es ${color}`

//Forma 4
let despedida = nombre => `Adios ${nombre} `

//Forma 5
let otraFuncion = () => `Mensaje random `

//Destucturing
let user = {
    nombre: "",
    ciudad: "medellin",
    color: "verde",
    estatura: ""

}

//console.log(llamada("pepe", "verde"))

let {nombre, ciudad, color, estatura} = user

console.log(ciudad,color)

/*if(true){
     let f = 3 //let tiene alcance de bloque y funcion (Function Scope, Block Scope)

}
//console.log(n)
console.log(f)*/


/* let obj = {
     nombre: "pepe",
     saludo: (nombre) => {
        console.log(`Hola $(nombre)`)
        }
}*/

//console.log( obj.saludo("luis") )

//obj.saludo("luis")

// ES6 Arrow Function (aka Fat Arrow Function)

/*var sum = (a, b)  => {
    return a + b;
}

sum(4, 12) // returns 16*/