
const fs = require("fs")
const filePath = './notas.json';

const crearNota = (titulo, contenido) => {
 let notas =[]

 if( fs.existsSync(filePath) ){
    const data = fs.readFileSync(filePath, 'utf-8')
    notas = JSON.parse(data)
 }

 // Comprobación para que No se agregue tarea con el mismo titulo

 const nuevaNota = {titulo, contenido}
 notas.push(nuevaNota)

 fs.writeFileSync(filePath, JSON.stringify(notas))
 console.log("La nota se agregó correctamente")

}

const listarNotas = () => {


}

const eliminarNota = (titulo) => {

}

crearNota("Académico", "Estudiar Node.js")
crearNota("Entrenamiento", "Estudiar Backtracking")