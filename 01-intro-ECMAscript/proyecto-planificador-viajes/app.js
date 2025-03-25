// Se importan las funciones del módulo viajes.js

import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
// function iniciarApp() {
    const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Paris", "2024-06-25", "Avión Clase Ejecutiva");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("Londres", "2024-07-20", "Avión Clase Ejecutiva");
    registrarDestino("New York", "2024-08-10", "Autobús");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();


//Salida en consola

/**
Destino: Paris
Fecha: 2024-06-15
Transporte: Avión
Costo: $700
---------------------------
Destino: Paris
Fecha: 2024-06-25
Transporte: Avión Clase Ejecutiva
Costo: $1000
---------------------------
Destino: Londres
Fecha: 2024-07-01
Transporte: Tren
Costo: $500
---------------------------
Destino: Londres
Fecha: 2024-07-20
Transporte: Avión Clase Ejecutiva
Costo: $900
---------------------------
Destino: New York
Fecha: 2024-08-10
Transporte: Autobús
Costo: $650
---------------------------
 */