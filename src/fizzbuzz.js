function generarFizzBuzz(numero){
    let cad;
    cad=numero;
    if(numero%3==0)
    cad= "Fizz";
    if(numero==5)
        cad= 'Buzz';
    return cad;  
}
export default generarFizzBuzz;