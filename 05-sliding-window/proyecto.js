
// Proyecto del Algoritmo Sliding Window

/* La técnica de Sliding Window es poderosa y eficiente para resolver problemas donde 
se analizan subconjuntos continuos de datos. */

//Objetivo
/*Usar la técnica Sliding Window para identificar la palabra más larga en una cadena de texto. */

/* 
Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
Devuelve la palabra más larga al final del proceso.
*/

function findLongestWord(text) {
    const palabras = text.split(" ");
    let longestWord = ''; // Inicializar la palabra más larga
    let aux; 
    for (let i = 0 ; i < palabras.length; i++){
        aux = palabras[i] // guarda cada una de las palabras según la posición en la que vayamos haciéndolo
        console.log(palabras[i].length) // Imprime la cantidad de cada una de las palabras
        if(aux.length > longestWord.length){
            longestWord = aux; 
        }
    }
    return longestWord;
}
const text = "JavaScript es un lenguaje de programación increíble para aprender";
console.log(findLongestWord(text));

// Salida en consola

/*
10
2
2
8
2
12
9
4
8
programación
*/