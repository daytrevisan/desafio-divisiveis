function calculate(numberUser) {
    
    let sum = 0;
    
    if (numberUser > 0) {
    
        for(let number = 0; number < numberUser; number++) {            
            if ( (number % 3 === 0) || (number % 5 === 0) ) {
                sum += number;
            }
        }    
    }
        
    return sum
    
}

let resultado = calculate(15);
console.log(resultado)