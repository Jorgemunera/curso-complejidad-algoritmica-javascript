function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repetir(array){
    let arrayRepetido=array;
    return arrayRepetido;
}

function convertirAString(array){
    let resultado = array.map(elemento=>elemento.toString());
    return resultado
}

function dosDimensiones(valor){
    let x= new Array(valor);
    for (let i = 0; i < valor; i++) {
        x[i]=new Array(valor).fill(0)  
    }
    return x;
}
console.log(dosDimensiones(6))

//console.log(convertirAString([1,2,3,[4,5]]));