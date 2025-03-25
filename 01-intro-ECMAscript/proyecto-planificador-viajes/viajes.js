
// viajes.js

// Array para guardar los destinos

/*Reemplaza las declaraciones de `var` por `let` o `const` cuando corresponda. Recuerda que `let` se usa para variables que pueden cambiar, y 
`const` para las que no cambiarán (como el arreglo de destinos).*/

const destinos = [];


//REEMPLAZAR FUNCIONES TRADICIONALES POR FUNCIONES DE FLECHA DONDE CONSIDERES NECESARIO.

/*// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte) {
    // TODO: Crear un objeto con los datos del destino
    var nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}*/

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

/*// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
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

// Se exportan las funciones para usarlas en otros módulos
export { registrarDestino, mostrarItinerario };
