const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(express.static('server/public'));



// array that will be filled with data from client side, using 1 and 2 for examples to test
let resultsArray = [
    {
        firstNumber: 1,
        secondNumber: 2,
        operator: '+' , 
    }
]; 

// sends results array to get request on client
//localhost:5001/results
app.get('/results', (req, res) => {
    console.log('GET Request made for /results');
    res.send(resultsArray);
});

// POST REQUEST SAVES USER INFO 

//PUT REQUEST UPDATES INFO



/*
let calcObjects = {
    firstNumber: firstNum,
    secondNumber: secondNum,
    operator: operator,
};
*/





//sends result to get request on client
app.get('/result', (req, res) => {
    res.send({result: result});
});


//beginning of transfer to server side calculation
app.post('/calculate', (req, res) => {
    // transfer local calculator logic here
    let numberData = req.body;
    let numberOne = Number(data.firstNumber);
    let numberTwo = Number(data.secondNumber);
    let operator = data.operator;


});












app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`); 
})