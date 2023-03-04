const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(express.static('server/public'));

let results = [];












app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`); 
})