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
    let operator = document.getElementById('operator').value;
    console.log('First:', firstNum, 'Second:', secondNum, 'Operator:', operator);

    // have to take all inputs and put into an object
    let inputsForServer = {
        firstNumber: firstNum,
        secondNumber: secondNum,
        operator: operator,
    };
    console.log(inputsForServer);
    axios.post('/inputs', inputsForServer).then((response) => {
        console.log(response);
        getInputs()
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.'); 
    })

    // if (operator === "add") {
    //     result = firstNum + secondNum;
    // } else if (operator === "sub") {
    //     result = firstNum - secondNum;
    // } else if (operator === "mult") {
    //     result = firstNum * secondNum; 
    // } else if (operator === "div") {
    //     result = firstNum / secondNum;
    // }
    // console.log(result);

    // results.innerHTML = `<p><p>${result}`
}; 

// Function for taking results from /results and posting it to DOM
 
function getInputs () {
    axios.get('/inputs').then((response) => {
        console.log(response);
        let resultsFromServer = response.data; 
        let contentDiv = document.querySelector('#history');
        contentDiv.innerHTML= '';
        for (let results of resultsFromServer) {
            contentDiv.innerHTML += `
            <p>${results.firstNumber} ${results.operator} ${results.secondNumber} = </p> 
            `
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.')
    });
};

// function getResult () {
//     axios.get('/calculation').then((response) => {
//         console.log(response);
//         let calculationFromServer = response.data;
//         let contentDiv = document.querySelector('#result');
//         contentDiv.innerHTML='';
//         contentDiv.innerHTML += `
//         <p> ${}
//         `
//     })
// }