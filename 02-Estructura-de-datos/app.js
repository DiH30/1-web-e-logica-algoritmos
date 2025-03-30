
// Reto Campus 🔥

//Proyecto Estructuras de Datos

//Crea un arreglo vacío llamado listaDeCompras.

let listaDeCompras = []

//Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.

const agregarProducto = producto => {
    // Verificar si el producto con el mismo nombre ya está en la lista
    const productoExistente = listaDeCompras.some(p => p.nombre === producto.nombre); //some() comprueba si al menos un elemento del arreglo cumple con una condición. 
// Lista de productos femeninos 
const productosFemeninos = ['manzana', 'piña', 'naranja', 'sandia', 'leche']; 
// Verificar si el producto ya está en la lista
    if (!productoExistente) {
        // Comprobar si el producto es femenino
        const verbo = productosFemeninos.includes(producto.nombre.toLowerCase()) ? 'agregada' : 'agregado';
    listaDeCompras.push(producto); 
    console.log(`${producto.nombre} ha sido ${verbo} a la lista.`);
    } else {
        console.log(`${producto.nombre} ya está en la lista.`);
    }
};

//Implementa una función eliminarProducto(producto) que elimine un producto de la lista.

const eliminarProducto = productoAEliminar => {
    let nuevoArray = listaDeCompras.filter(producto => producto.nombre !== productoAEliminar)
    listaDeCompras = nuevoArray
    
}

//Implementa una función mostrarLista() que imprima todos los productos de la lista.

const mostrarLista = () => {
    listaDeCompras.forEach( item => console.log(item) )
}

agregarProducto({
    nombre: "manzana",
    precio: 46.90,
    peso: 1.0,
    disponible: true
})
agregarProducto({
    nombre: "piña", 
    precio: 40,
    peso: 1.0,
    disponible: true
})

agregarProducto({
    nombre: "piña", // Intentando agregar un producto duplicado
    precio: 40,
    peso: 1.0,
    disponible: true
})
agregarProducto({
    nombre: "naranja", 
    precio: 42,
    peso: 1.0,
    disponible: true
})
agregarProducto({
    nombre: "sandia", 
    precio: 18,
    peso: 1.0,
    disponible: true
})
agregarProducto({
    nombre: "leche", 
    precio: 20,
    peso: 1.0,
    disponible: true
})
agregarProducto({
    nombre: "huevo", 
    precio: 60,
    peso: 1.0,
    disponible: true
})
agregarProducto({
    nombre: "arroz", 
    precio: 22,
    peso: 1.0,
    disponible: true
})


eliminarProducto("manzana")

mostrarLista()

//Salida en consola
/**
manzana ha sido agregada a la lista.
piña ha sido agregada a la lista.
piña ya está en la lista.
naranja ha sido agregada a la lista.
sandia ha sido agregada a la lista.
leche ha sido agregada a la lista.
huevo ha sido agregado a la lista.
arroz ha sido agregado a la lista.
{ nombre: 'piña', precio: 40, peso: 1, disponible: true }
{ nombre: 'naranja', precio: 42, peso: 1, disponible: true }
{ nombre: 'sandia', precio: 18, peso: 1, disponible: true }
{ nombre: 'leche', precio: 20, peso: 1, disponible: true }
{ nombre: 'huevo', precio: 60, peso: 1, disponible: true }
{ nombre: 'arroz', precio: 22, peso: 1, disponible: true }

 */