// Reto Campus

// Proyecto Algoritmo de Los 2 Punteros

/** El algoritmo de los dos punteros es un concepto fundamental en algoritmos 
 y estructuras de datos que se utiliza comúnmente en problemas que requieren recorrer 
 un arreglo de manera eficiente. Este algoritmo se utiliza en diversas situaciones, 
 como en la búsqueda de pares de números que cumplan ciertas condiciones, 
 en la fusión de listas ordenadas, o para resolver problemas relacionados 
 con secuencias y cadenas. */

// Objetivo
/* Usar el algoritmo de los dos punteros para identificar rápidamente el primer par de 
invitados cuyos nombres comienzan con la misma letra.*/

// Encontrar los Invitados que Pueden Sentarse Juntos

/* Se tiene una lista de invitados ordenada alfabéticamente, 
y la tarea es organizar la mesa para una cena. 
Sin embargo, algunos invitados prefieren sentarse junto a personas 
cuyo nombre empieza con la misma letra que el suyo. 
El objetivo es encontrar el primer par de invitados consecutivos 
que puedan sentarse juntos según este criterio. */

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    // Usa un puntero al inicio del arreglo y otro al siguiente elemento.
    let inicio = 0;
    let siguiente = 1;

        while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
        // ...

        // TODO: Avanza los punteros si no coinciden
        // ...
           
            const inicial1 = arr[inicio][0].toLowerCase(); // Obtenemos la inicial del nombre en 'inicio'
            const inicial2 = arr[siguiente][0].toLowerCase(); // Obtenemos la inicial del nombre en 'siguiente'
         // Compara las iniciales de los nombres en las posiciones de ambos punteros.
        if (inicial1 === inicial2) {
            return [arr[inicio], arr[siguiente]]; // Devuelve el primer par que coincida
        }

        // Avanzamos ambos punteros
        inicio++;
        siguiente++;
    }
    
    return null; // Si no se encuentra ningún par, devolvemos null
}

console.log(encontrarPareja(invitados));

// Salida en consola
/*
[ 'Carlos', 'Cecilia' ]
   */