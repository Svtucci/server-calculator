console.log('Script is sourced');

 

function calculate (event) {
    event.preventDefault();
    let firstNum = Number(document.querySelector('#firstNumber').value);
    let secondNum = Number(document.querySelector('#secondNumber').value);
    console.log(firstNum, secondNum);

    
}; 