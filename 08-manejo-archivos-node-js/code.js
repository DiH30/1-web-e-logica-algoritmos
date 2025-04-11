
//Módulo fs (file system / sistema de archivos)
/**
 - leer
 - modificar
 - copiar 
 - eliminar
 - renombrar
 */

//Ej. fs.rename()   => fs.renameSync()

//Modo sync o síncrono

//Importando el módulo fs
const fs = require("fs")

// Lista para leer archivos
//1. ruta del archivo a leer(donde está ubicado)
//2. set de caracteres
//3. funcion que se ejecuta despues de resolver el llanado
const archivo = fs.readFileSync("index.html", "utf-8")
console.log(archivo)
console.log("despues del readFile")

    // Lista para renombrar archivos
    //1. ubicacion del archivo a renombrar
    //2. Nuevo nombre del archivo
    //3. función para capturar el error
fs.renameSync("index.html", "vista.html")
console.log("despues del rename")

// Lista para agregar información al final del archivo
//1. ubicación
//2. contenido a añadir
//3. función que captura el error
 fs.appendFileSync("vista.html", "<h1>NODEJS</h1>") 
console.log("despues del appendFile")

    // Reemplazar todo el contenido del archivo

     fs.writeFileSync("vista.html", "El velóz murciélago hindú") 
     console.log("despues del writeFile")
     
   // Eliminar un archivo
    fs.unlinkSync("vista.html") 
   console.log("despues del unlink")