const form = document.getElementById("form-input");

const resultSum = document.getElementById("result-show");
resultSum.innerHTML = 0;

let sum = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function calculate() {      
          
    var userNumber = document.getElementById("user-number").value;
    let validateUserNumber = parseInt(userNumber);

    let result = validateCalculation(validateUserNumber);
    resultSum.innerHTML = result;

}

function validateCalculation(validateUserNumber) {
    
    if (validateUserNumber > 0) {
        
        for(let number = 0; number < validateUserNumber; number++) {            
            if ( (number % 3 === 0) || (number % 5 === 0) ) {
                    sum += number;
                }
            }
            
        } else {
            alert('Digite um número maior que zero');
        }
        
        return sum;
        
}

function clear() {
    localStorage.clear();
    localStorage.removeItem(resultSum);
    userNumber.value = "";
    userNumber.innerHTML = "";
    resultSum.value = "";
    resultSum.textContent = 0;
}