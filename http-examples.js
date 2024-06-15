const http = require('http');


const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end('<h1 style="font-size: 25px; color: tan;">Hello dudes!!!</h1>')
})

server.listen(5000, ()=>{
    console.log('SERVER STARTED ON PORT 5000');
});


