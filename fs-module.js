const {readFileSync, writeFileSync} = require('fs');
const path = require('path');


const data = readFileSync(path.resolve( 'contents','text.txt'), 'utf8');

writeFileSync('./contents/res.txt', data, {flag: 'a'})      // a - append data to the file


console.log(data);


