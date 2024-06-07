const path = require('path');

//  CREATE PATH
// console.log(path.join(__dirname, 'kozak', 'log'));     // C:\Users\Ivan\Desktop\nodejs-learning\nodejs-learning\kozak\log
// console.log(path.join(__dirname, 'path-module.js'))     // C:\Users\Ivan\Desktop\nodejs-learning\nodejs-learning\path-module.js


// BUILD ABSOLUTE PATH
console.log(path.resolve('ivan', 'C:/','stepan', 'petro'));    //  C:\stepan\petro


console.log(path.dirname('C://stepan//petro/')) // C://stepan/

// make object from path

console.log(path.parse('C://stepan//petro.js'))         // {root: ..., dir..., ....}


// return last part of the path
console.log(path.basename('C://stepan//petro.js'))

// file extension

console.log(path.extname('pathjs/a.js'))

console.log(path.format({root: 'C:/', dir: 'C://ivan/', ext: '.js', name:'student'}))


console.log(path.normalize('../ivan/'))


console.log(path.win32)















