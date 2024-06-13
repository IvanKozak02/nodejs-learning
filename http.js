const http = require('http');
const {readFile} = require('fs');
const util = require("util");
const path = require("path");

const readFilePromisify = util.promisify(readFile);



const server = http.createServer().listen(3003)

server.on('request', async (req, res)=>{
    // const data = await readFilePromisify(path.join(__dirname, '/contents/res.txt'), 'utf-8');
    res.write(
        `<h1 style="color: maroon; font-size: 1rem">Hello dudes!!!</h1>`
    )
    res.end();
})


