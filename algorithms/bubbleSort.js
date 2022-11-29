/**
 * Complejidad Temporal -> O(n**2)
 * Complejidad Espacial -> O( n + 1+1+1+1 ) --> O(n)
 * Espacio Auxiliar -> espacio ocupado - espacio ocupado datos entrada --> O(1) 
 */
 function bubbleSort(arreglo) {//espacial O(n)
    let longitud = arreglo.length;//O(1)    espacial O(1)
    for (let i = 0; i < longitud; i++) {//O(n)  espacial O(1)
      for (let j = 0; j < longitud; j++) {//O(n)    espacial O(1)
        if (arreglo[j] > arreglo[j + 1]) {//O(1)
          let temporal = arreglo[j];//O(1)     espacial O(1)
          arreglo[j] = arreglo[j + 1];//O(1)
          arreglo[j + 1] = temporal;//O(1)
        }
      }
    }
    return arreglo;//O(1) 
  }