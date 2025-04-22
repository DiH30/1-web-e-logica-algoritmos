// Reto Campus

/**
 * La recursión y el backtracking son herramientas poderosas para resolver problemas dividiendo tareas complejas en partes más pequeñas. 
 * Mientras que la recursión se centra en resolver problemas de manera repetitiva, el backtracking agrega una capa de toma de decisiones, 
 * probando y retrocediendo cuando es necesario.
 */
// Objetivo
/**
 * El objetivo es que se practique cómo usar recursión para buscar un objeto específico en un arreglo. 
 * Practicar cómo dividir un problema en partes más pequeñas y detener la recursión en un caso base.
 */

// Buscar un objeto en una lista de regalos

/**
 * Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. 
 * La lista puede ser bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. 
 * Este proyecto se enfoca únicamente en usar recursión para buscar un elemento en un arreglo simple.
 */

// Instrucciones
/**
 * Escribe una función recursiva que busque un regalo específico en un arreglo.
 * Si el regalo se encuentra, devuelve un mensaje indicando su posición.
 * Si no se encuentra, devuelve un mensaje diciendo que no está en la lista.
 */
// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función recursiva para buscar un regalo
function findGift(gifts, giftName, index = 0) {
     // Caso base: Si llegamos al final de la lista y no lo encontramos
     // Si index === gifts.length, el regalo no está en la lista.
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    // Caso base: Si encontramos el regalo
    // Si gifts[index] === giftName, el regalo está en esa posición.
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // Llamada recursiva para seguir buscando
    // Realiza una llamada recursiva aumentando el índice (index + 1).
    return findGift(gifts, giftName, index + 1);
 
  
}
// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida en consola:
// "Lego está en la posición 3."

giftToFind = "Rompecabezas";
console.log(findGift(gifts, giftToFind));
// Salida en consola:
// "Rompecabezas está en la posición 2."


// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));

// Salida en consola: 
//"Camión no está en la lista."

