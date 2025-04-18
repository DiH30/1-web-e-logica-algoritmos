
//ventanaFija

// 1. Definir la ventana 

   /* const array = [-4,-1,-3,0,5,12]
   const k = 3

   function maxSum (arr, k){
        let izq = 0 // posición inicial
        let der = izq + 3 -1 // posición final 

        console.log(arr[izq], arr[der])
}

maxSum(array, k) */

/* Salida en consola
 -4 -3 */

 // 2. Usar for (Recorrer la ventana y sumarla)


  /* const array = [-4,-1,-3,0,5,12]
   const k = 3

   function maxSum (arr, k){
    let izq = 0
    let der = izq + k - 1

    let sum = 0

    for (let i = izq; i <= der; i++) {
        sum += arr[i]
    }

    console.log(sum)
}  

maxSum(array, k)*/
/* Salida en consola
-8
*/

    const array = [-4, -1, -3, 0, 5, 12]
    const k = 3
    
    function maxSum(arr, k) {
    
        let initialWindow = arr.slice(0,k)
        let sum = initialWindow.reduce( (acc,val)=>acc+val ) // el reduce() agarra un array principal y lo reduce a un valor único depende de lo que se le dice que debe hacer, necesita un acumulado y el valor actual.
    
        let maxSum = sum
        for (let i = k; i < arr.length; i++) {
            sum += arr[i] - arr[i-k]
    
            //maxSum = maxSum > sum ? maxSum : sum // operador ternario si es true se ejecuta la primera si es false se ejecuta la segunda condición.
            maxSum = Math.max(maxSum, sum) //math es el objeto y .max es el método del objeto. 
        }
    
        return maxSum
       
    }
    
    console.log( maxSum(array, k) )
    // Salida en consola
    /* 17 */