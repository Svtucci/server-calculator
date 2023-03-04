console.log('Script is sourced');



//  function addOperator(event) {
//     operator = event.target.value;
//     return operator
//  };
//  function subOperator(event) {
//     operator = event.target.value;
//     return operator
//  };
//  function multiOperator(event) {
//     operator = event.target.value;
//     return operator
//  };
//  function divOperator(event) {
//     operator = event.target.value;
//     return operator
//  };





function calculate (event) {
    event.preventDefault();
    let firstNum = Number(document.querySelector('#firstNumber').value);
    let secondNum = Number(document.querySelector('#secondNumber').value);
    console.log(firstNum, secondNum);
    
    let operator = document.getElementById('operator').value;

    console.log(operator);

    if (operator === "add") {
        result = firstNum + secondNum;
    } else if (operator === "sub") {
        result = firstNum - secondNum;
    } else if (operator === "mult") {
        result = firstNum * secondNum; 
    } else if (operator === "div") {
        result = firstNum / secondNum;
    }
    console.log(result);

    results.innerHTML = `<p><p>${result}`
}; 