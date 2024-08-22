function generarFizzBuzz(numero){
    let cad;
    cad=numero;
    if(numero%3==0)
    cad= "Fizz";
    if(numero%5==0)
        cad= 'Buzz';
    if(numero%3==0 && numero%5==0)
        cad='FizzBuzz'
    return cad;  
}
export default generarFizzBuzz;