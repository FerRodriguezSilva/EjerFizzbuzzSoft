import generarFizzBuzz from './fizzbuzz'
describe('FizzBuzz',()=>{
    it ("Generar el mismo numero si no sigue ninguna regla",()=>{
        expect(generarFizzBuzz(1)).toEqual(1);
    });
    it("generar el mismo numero para cualquiier numero si no sigue ninguna regla",()=>{
        expect(generarFizzBuzz(2)).toEqual(2);
    });
    it("Generar Fizz para el 3",()=>{
        expect(generarFizzBuzz(3)).toEqual('Fizz');
    });
    it('generar Fizz para multiplos de 3',()=>{
        expect(generarFizzBuzz(12)).toEqual('Fizz');
    });
    it("Generar Buzz para el 5",()=>{
        expect(generarFizzBuzz(5)).toEqual('Buzz');
    });
    it("Generar Buzz para los multiplos de 5",()=>{
        expect(generarFizzBuzz(25)).toEqual("Buzz");
    });
    it("Generar FizzBuzz para 15",()=>{
        expect(generarFizzBuzz(15)).toEqual('FizzBuzz');
    });
    

    

});

