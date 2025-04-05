
// Reto Campus 

// Proyecto Métodos de Arreglos
// Objetivo
/**
 Practicar los métodos filter(), sort(), y map() para manipular datos de un arreglo.
 */
//Problema: Filtro y Orden de Productos de una Tienda Online
//Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

 //arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa", imagen:  "https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica", imagen: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { nombre: "Libro", precio: 12, categoria: "Educación", imagen: "https://images.pexels.com/photos/28124329/pexels-photo-28124329/free-photo-of-puesta-de-sol-oceano-velero-sombras.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa", imagen: "https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica", imagen: "https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg?auto=compress&cs=tinysrgb&w=600" },

];
// Usa filter() para obtener los productos que cuesten menos de $100.

const productosMenosDeCien = productos.filter(a => a.precio < 100);
console.log(productosMenosDeCien);

// Muestra los resultados de la aplicación de cada método en consola.
/**
 [
  {
    nombre: 'Camiseta',
    precio: 15,
    categoria: 'Ropa',
    imagen: 'https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    nombre: 'Libro',
    precio: 12,
    categoria: 'Educación',
    imagen: 'https://images.pexels.com/photos/28124329/pexels-photo-28124329/free-photo-of-puesta-de-sol-oceano-velero-sombras.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    nombre: 'Zapatos',
    precio: 50,
    categoria: 'Ropa',
    imagen: 'https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]
 */

// Usa sort() para ordenar esos productos alfabéticamente por su nombre.

const productosOrdenadosAlfabéticamente = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(productosOrdenadosAlfabéticamente);

/**
 [
  {
    nombre: 'Camiseta',
    precio: 15,
    categoria: 'Ropa',
    imagen: 'https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    nombre: 'Celular',
    precio: 600,
    categoria: 'Electrónica',
    imagen: 'https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    nombre: 'Laptop',
    precio: 800,
    categoria: 'Electrónica',
    imagen: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    nombre: 'Libro',
    precio: 12,
    categoria: 'Educación',
    imagen: 'https://images.pexels.com/photos/28124329/pexels-photo-28124329/free-photo-of-puesta-de-sol-oceano-velero-sombras.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    nombre: 'Zapatos',
    precio: 50,
    categoria: 'Ropa',
    imagen: 'https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]
 */
// a - b  - 0 +

// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.

const nuevoArreglo = productos.map(productos => productos.nombre);
console.log(nuevoArreglo);

/**
[ 'Camiseta', 'Celular', 'Laptop', 'Libro', 'Zapatos' ] 
 */

// (Opcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.


// Función para mostrar los productos con sus imágenes

function mostrarProductos() {
    const container = document.querySelector(".container");

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
            <p style="color: pink">${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <button>Ver Más</button>
        `;
        container.appendChild(productoDiv);
    });
}

mostrarProductos();





/*
//2. función
function mostrarNombres (){
    for (let i = 0; i < nuevoArreglo.length; i++) {      
       container.innerHTML += `<p style="color: pink">${nuevoArreglo[i]}</p>`        
    }

}
function mostrarPrecio () {
    for (let i = 0; i < productos.length; i++) {      
        container.innerHTML += `<p>${productos[i].precio}</p>` 
         
     }
}
//3. llamado de función
mostrarNombres ()
mostrarPrecio ()*/