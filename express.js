const express = require('express');
const path = require("path");

const app = express();

app.use(express.static('./public'));

// app.get('/', (req, res)=>{
//     // res.send('Home page');
//     res.sendFile(path.join(__dirname, '/public/home.html'));
// })

app.get('/', (req,res)=>{
    res.json([{name: 'Ivan'}, {name: 'Petro'}]);
})


app.get('/about', (req, res)=>{
    res.send('About page');
})

app.all('*', (req, res)=>{
    res.status(404).send('Something went wrong!!!');
})

app.listen(4000);





