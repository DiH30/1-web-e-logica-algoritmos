

//Crea un arreglo vacío llamado listaDeCompras.

let listaDeCompras = []

//Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.

const agregarProducto = producto => {
    listaDeCompras.push(producto)
}

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
    precio: 50,
    peso: 0.5,
    disponible: true
})
agregarProducto({
    nombre: "piña",
    precio: 50,
    peso: 0.5,
    disponible: true
})

eliminarProducto("manzana")

mostrarLista()