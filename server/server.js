const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.static('server/public'));

// array that will be filled with data from client side, using 1 and 2 for examples to test
let inputsArray = [];
let result = 0;

// sends inputsarray to get request on client
//localhost:5001/inputs
app.get('/inputs', (req, res) => {
    console.log('GET Request made for /inputs');
    res.send(inputsArray);
});

app.get('/result', (req, res) => {
    console.log('GET request for result');
    res.send({result});
})

// POST REQUEST SAVES USER INFO 
app.post('/inputs', (req, res) => {
    console.log('POST Request made for /inputs');
    console.log(req.body);
    let inputToAdd = req.body;
    let numberOne = Number(inputToAdd.firstNumber);
    let numberTwo = Number(inputToAdd.secondNumber);
    let operator = inputToAdd.operator

    if (operator === '+') {
        result = numberOne + numberTwo;
    } else if (operator === '-') {
        result = numberOne - numberTwo;
    } else if (operator === '*') {
        result = numberOne * numberTwo;
    } else if (operator === '/') {
        result = numberOne / numberTwo;
    } else {
        return;
    }

    inputs = {
        firstNumber: numberOne,
        operator: operator,
        secondNumber: numberTwo,
        answer: result
    };

    inputsArray.push(inputs);
    res.sendStatus(201);     
});

app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`); 
})




// app.post('/calculation', (req, res) => {
//     let data = req.body
//     let operator = data.operator;
//     let firstNum = Number(data.numberOne);
//     let secondNum = Number(data.numberTwo);

//     if (operator === "add") {
//         result = firstNum + secondNum;
//     } else if (operator === "sub") {
//         result = firstNum - secondNum;
//     } else if (operator === "mult") {
//         result = firstNum * secondNum; 
//     } else if (operator === "div") {
//         result = firstNum / secondNum;
//     } return
//      mathInputs = {
//                 firstNumber
//                 secondNumber
//                 operator:
//                 answer: result
// }
// // }); 



// sends result to get request on client
// app.get('/inputs', (req, res) => {
//     res.send();
// });



















// app.get('/calculate', (req, res) => {
//     let numberOne = inputsArray.firstNumber;
//     let numberTwo = inputsArray.secondNumber;
//     let operator =  inputsArray.operator;

//     let result; 

//     if (operator === "add") {
//         result = numberOne + numberTwo;
//     } else if (operator === "sub") {
//         result = numberOne - numberTwo;
//     } else if (operator === "mult") {
//         result = numberOne * numberTwo;
//     } else if (operator === "div") {
//         result = numberOne / numberTwo;
//     }
//     console.log(result);
// })


// let resultArray = [
//     {

//     }
// ];

// app.post('/calculation', (req, res) => {
//     console.log('POST Resuest made for /calculations');
//     console.log(req.body); 
//  if (operator === "add") {
//         result = firstNum + secondNum;
//     } else if (operator === "sub") {
//         result = firstNum - secondNum;
//     } else if (operator === "mult") {
//         result = firstNum * secondNum; 
//     } else if (operator === "div") {
//         result = firstNum / secondNum;
//     }
//     console.log(results)
//     resultArray,push(result); 
// })




// //beginning of transfer to server side calculation
// app.post('/calculate', (req, res) => {
//     // transfer local calculator logic here
//     let numberData = req.body;
//     let numberOne = Number(data.firstNumber);
//     let numberTwo = Number(data.secondNumber);
//     let operator = data.operator;
// });







//PUT REQUEST UPDATES INFO



/*
let calcObjects = {
    firstNumber: firstNum,
    secondNumber: secondNum,
    operator: operator,
};
*/