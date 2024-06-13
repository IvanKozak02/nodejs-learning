const {readFileSync, writeFileSync} = require('fs');
const util = require("util");
const {readFile, writeFile} = require('fs')
const path = require('path');

// SYNC
// const data = readFileSync(path.resolve('contents', 'text.txt'), 'utf8');
// writeFileSync('./contents/res.txt', data, {flag: 'a'})      // a - append data to the file
// console.log(data);


// ASYNC

const readFilePromisify = util.promisify(readFile);
const writeFilePromisify = util.promisify(writeFile);

const readDataFromFile = async () => {
    const data = await readFilePromisify(path.join(__dirname, 'contents/text.txt'), 'utf8');
    await writeFilePromisify(path.join(__dirname, 'contents/res.txt'), data);
}




// readFile(path.join(__dirname, 'contents/res.txt'), 'utf8', (err, data) => {
//     if (err) {
//         console.log('Error');
//         return;
//     }
//
//     console.log(data);
// });


readDataFromFile();







