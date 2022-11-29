/**
 * Complejidad Temporal -> O(n)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> espacio ocupado - espacio de ocupado datos de entrada -->O(1)
 *                            O(1)          -        O(n)
 */
 function linearSearch(arreglo, clave) {//espacial O(n)
    for (let indice = 0; indice < arreglo.length; indice++) {//O(n) espacial O(1)
      if (arreglo[indice] === clave) {// O(1)   espacial nada porque indice ya fue creado
        return indice;// O(1)
      }
    }
    return -1; //O(1)
  }