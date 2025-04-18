
// ventanaVariable

/*
Siempre se va a tener ciclos basados en condiciones que van a mover un entorno (la ventana) */

const array = [2, 3, 1, 2, 4, 3]
const target = 7 

function ventanaVariable(arr, target){

    let sumaActual = 0
    let inicio = 0 

    let longitudMinima = Infinity 

    // Mueve la ventana 

    for (let fin = 0; fin < array.length; fin++) { // Se expande con el fin 
        sumaActual += arr[fin]

        while(sumaActual >= target){
            longitudMinima = Math.min( longitudMinima, fin - inicio + 1 ) // Se comparan dos valores 
            sumaActual -= arr[inicio]
            inicio++ // Variable de control
        } 
    }
    
    return longitudMinima === Infinity ? 0 : longitudMinima // return debe ir fuera del for (del ciclo en general)
}

console.log( ventanaVariable(array, target) ) 

// Salida en consola
/* 2 */