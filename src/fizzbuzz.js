function generarFizzBuzz(numero) {
    let cad = numero.toString();
    if (numero % 3 === 0 && numero % 5 === 0) {
        cad = 'FizzBuzz';
    } else if (numero % 3 === 0) {
        cad = 'Fizz';
    } else if (numero % 5 === 0) {
        cad = 'Buzz';
    }
    return cad;
}

function generarSecuencia(limite){
    let secuencia= []
    for(let i=1;i<=limite;i=i+1)
    {
        secuencia.push(generarFizzBuzz(i));
        if(i<limite)
       secuencia.push(' ');
    }
    return secuencia.join('');
}
//console.log(generarSecuencia(15)); // Debería imprimir: "1 2 Fizz 4 Buzz Fizz 7"

export { generarFizzBuzz, generarSecuencia };
/*Hola*/