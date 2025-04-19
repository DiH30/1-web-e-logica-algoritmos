
// Reto Campus

// Proyecto de Introducción al manejo de archivos con Node.js

/*
El manejo de archivos con Node.js es una habilidad clave para cualquier desarrollador backend. 
Entender cómo leer, escribir y gestionar archivos te permitirá crear aplicaciones robustas y 
útiles. Aunque al principio puede parecer complicado, con práctica y experimentación se vuelve 
una herramienta indispensable. */

// Objetivo
/*
El objetivo es construir un programa en Node.js que administre notas personales utilizando 
el módulo `fs`. Se practicará leer, escribir, verificar y eliminar archivos, 
consolidando los conceptos aprendidos. */

// Gestor de Notas Personales

const fs = require('fs');
// Ruta del archivo de notas
const filePath = './notas.json';

// crear función "crearNota"

const crearNota = (titulo, contenido) => {
let notas =[]

 if( fs.existsSync(filePath) ){
   const data = fs.readFileSync(filePath, 'utf-8');
   notas = JSON.parse(data); // parse() convierte una cadena de texto (string) que tiene formato JSON a un objeto JavaScript. 
  }
 // Comprobación para que No se agregue nota con el mismo título

 const existeTitulo = notas.some(nota => nota.titulo === titulo);
 if (existeTitulo) {
   console.log(`Ya existe una nota con el título "${titulo}".`);
   return;  // Detener la ejecución si ya existe
 }

 const nuevaNota = { titulo, contenido };
 notas.push(nuevaNota);
 // Para guardar las notas actualizadas:
 fs.writeFileSync(filePath, JSON.stringify(notas, null, 2)); // Escribir el archivo con formato
 console.log("La nota se agregó correctamente");
};

// crear función "listarNotas"

const listarNotas = () => {

   if (fs.existsSync(filePath)) {
   const data = fs.readFileSync(filePath, 'utf-8');

    // Verificar si el archivo tiene contenido antes de intentar parsearlo
    if (data.trim() === '') {
      console.log("No hay notas guardadas.");
      return; // Si está vacío, salimos de la función
    }
   const notas = JSON.parse(data);
   // Verificar si hay notas y listarlas
   if (notas.length > 0) {
      console.log("Listado de Notas:");
      notas.forEach((nota, index) => {
      console.log(`${index + 1}. Título: ${nota.titulo} - Contenido: ${nota.contenido}`);
       });
     } else {
       console.log("No hay notas guardadas.");
     }
   }  else {
    console.log("No hay notas guardadas.");
  }  
};
      
// Crear función "eliminarNota"

const eliminarNota = (titulo) => {
   
   if (fs.existsSync(filePath)) {
     const data = fs.readFileSync(filePath, 'utf-8');
     // Verificar si el archivo tiene contenido antes de intentar parsearlo
    if (data.trim() === '') {
      console.log('No hay notas guardadas.');
      return; // Salir si el archivo está vacío
    }
     const notas = JSON.parse(data);

      // Filtrar notas para eliminar:
     const notasFiltradas = notas.filter((nota) => nota.titulo !== titulo);
     if (notas.length === notasFiltradas.length) {
       console.log(`No se encontró ninguna nota con el título "${titulo}".`);
       return;
     }
 
     fs.writeFileSync(filePath, JSON.stringify(notasFiltradas, null, 2)); // Escribir el archivo con formato
     console.log(`Nota con título "${titulo}" eliminada.`);
   } else {
     console.log('No hay notas para eliminar.');
   }
 };
// llamar a las funciones

crearNota("Académico", "Estudiar Node.js")
crearNota("Práctica", "Estudiar Recursión")
crearNota("Entrenamiento", "Estudiar Backtracking")
crearNota("Trabajo", "Terminar proyecto")
crearNota("Ideas para Negocio", "Aplicación de organización personal, tienda online de productos sostenibles, servicio de asesoría en marketing digital")

// Listar notas antes de eliminar
listarNotas();

// Eliminar una nota
eliminarNota("Académico");

// Listar notas después de eliminar
listarNotas();


/*
La nota se agregó correctamente
La nota se agregó correctamente
La nota se agregó correctamente
Listado de Notas:
1. Título: Académico - Contenido: Estudiar Node.js
2. Título: Práctica - Contenido: Estudiar Recursión        
3. Título: Entrenamiento - Contenido: Estudiar Backtracking
Nota con título "Académico" eliminada.
Listado de Notas:
1. Título: Práctica - Contenido: Estudiar Recursión
2. Título: Entrenamiento - Contenido: Estudiar Backtracking */


/*
La nota se agregó correctamente
Ya existe una nota con el título "Práctica".
Ya existe una nota con el título "Entrenamiento".
Ya existe una nota con el título "Trabajo".
La nota se agregó correctamente
Listado de Notas:
1. Título: Práctica - Contenido: Estudiar Recursión
2. Título: Entrenamiento - Contenido: Estudiar Backtracking
3. Título: Trabajo - Contenido: Terminar proyecto
4. Título: Académico - Contenido: Estudiar Node.js
5. Título: Ideas para Negocio - Contenido: Aplicación de organización personal, tienda online de productos sostenibles, servicio de asesoría en marketing digital
Nota con título "Académico" eliminada.
Listado de Notas:
1. Título: Práctica - Contenido: Estudiar Recursión
2. Título: Entrenamiento - Contenido: Estudiar Backtracking
3. Título: Trabajo - Contenido: Terminar proyecto
4. Título: Ideas para Negocio - Contenido: Aplicación de organización personal, tienda online de productos sostenibles, servicio de asesoría en marketing digital */