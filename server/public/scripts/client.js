console.log('Script is sourced');

 

function calculate (event) {
    event.preventDefault();
    let firstNum = Number(document.querySelector('#firstNumber').value);
    let secondNum = Number(document.querySelector('#secondNumber').value);
    console.log(firstNum, secondNum);

    let operator = document.getElementById('operator').value;

    if (operator === "add") {
        result = firstNum + secondNum;
    } else if (operator === "subtract") {
        result = firstNum - secondNum;
    } else if (operator === "mult") {
        result = firstNum * secondNum; 
    } else if (operator === "div") {
        result = firstNum / secondNum;
    }
    document.getElementById('result').innerHTML = result:
}; 