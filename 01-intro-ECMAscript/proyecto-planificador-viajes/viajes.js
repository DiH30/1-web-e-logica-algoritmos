// RETO CAMPUS Proyecto Introducción a ECMAScript

/*Este proyecto es un planificador simple de viajes que permite a los usuarios registrar destinos y fechas,
así como calcular el costo total de un viaje.*/

/**Objetivo
El objetivo de este proyecto es practicar los conceptos básicos de JavaScript, 
y luego poder aplicar las nuevas características de ECMAScript (ES6 y posteriores) para mejorar el código */

/** Los usuarios deben poder registrar destinos de viaje, la fecha en que desean viajar, 
y calcular el costo total estimado del viaje en función de las opciones de alojamiento y transporte que elijan.
*/

// Paso 1. Array para guardar los destinos

/*Reemplaza las declaraciones de `var` por `let` o `const` cuando corresponda. Recuerda que `let` se usa para variables que pueden cambiar, y 
`const` para las que no cambiarán (como el arreglo de destinos).*/

const destinos = [];

// Función para registrar un destino de viaje
/*function registrarDestino(destino, fecha, transporte) {
    // TODO: Crear un objeto con los datos del destino
    var nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}*/
// Paso 2. Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para agregar destinos al sistema.

//REEMPLAZAR FUNCIONES TRADICIONALES POR FUNCIONES DE FLECHA DONDE CONSIDERES NECESARIO.

// Función para registrar un destino de viaje

const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };
    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
/*function calcularCosto(destino, transporte) {
    var costoBase = 0;*/

// Pao 3. Calcular el costo: El costo se calcula con la función calcularCosto(), la cual toma el destino y el transporte como parámetros.

// Función para calcular el costo del viaje

/*Descuentos por número de personas: permitir al usuario agregar el número de personas 
y calcular un descuento dependiendo del número de viajeros.*/

const calcularCosto = (destino, transporte, numPersonas = 1) => {
    let costoBase = 0;  // Se utiliza let porque el valor de costoBase cambia

    /*// Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }*/

// Costo base por destino
switch (destino) {
    case "Paris":
        costoBase = 500;
        break;
    case "Londres":
        costoBase = 400;
        break;
    case "New York":
        costoBase = 600;
        break;
    default:
        costoBase = 300;  // Costo predeterminado en caso de un destino no reconocido
        break;
}

    /*// Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
}*/

 // Costo adicional por tipo de transporte
 switch (transporte) {
    case "Avión":
        costoBase += 200;
        break;
    case "Tren":
        costoBase += 100;
        break;
    case "Autobús":
            costoBase += 50;
            break;
    case "Avión Clase Ejecutiva":
            costoBase += 500;
            break;
    default:
        costoBase += 50;  // Costo adicional por transporte no especificado
        break;
}
// Descuento por número de personas
if (numPersonas > 3) {
    costoBase *= 0.9;  // Descuento del 10%
}

return costoBase;
};

// Función para mostrar el itinerario de los viajes registrados
/*function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (var i = 0; i < destinos.length; i++) {
        var viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}*/

// Paso 4. Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes guardados y mostrar sus detalles.

// Función para mostrar el itinerario de los viajes registrados

const mostrarItinerario = () => {
    destinos.forEach(viaje => {  // Se utiliza forEach para recorrer el arreglo de destinos
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
};

// Paso 5. Se exportan las funciones para usarlas en otros módulos

export { registrarDestino, mostrarItinerario };
