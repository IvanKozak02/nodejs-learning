const http = require('http');
// const {readFile} = require('fs');
// const util = require("util");
// const path = require("path");
//
// const readFilePromisify = util.promisify(readFile);
//
//
//
// const server = http.createServer().listen(3003)
//
// server.on('request', async (req, res)=>{
//     // const data = await readFilePromisify(path.join(__dirname, '/contents/res.txt'), 'utf-8');
//     res.write(
//         `<h1 style="color: maroon; font-size: 1rem">Hello dudes!!!</h1>`
//     )
//     res.end();
// })


const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Home page');
    }
    if (req.url === '/about'){
        res.end('About page');
    }
    if (req.url === '/contact'){
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} - ${j}`);
            }
        }
    }
})

server.listen(3000, ()=>{
    console.log('Server listening on port 3000...')
});

