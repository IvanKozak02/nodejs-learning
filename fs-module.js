const {readFileSync, writeFileSync} = require('fs');
// const {readFileSync, writeFileSync} = require('fs').promises;        // promisyfies functions
const util = require("util");
const {readFile, writeFile} = require('fs')
const path = require('path');
const __ = require("lodash/fp/__");

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


// readDataFromFile();

const getData = (path) => {
  return new Promise((resolve, reject)=>{
      readFile(path, 'utf8', (err, data)=>{
          if (err){
              reject(err);
          }else {
              resolve(data);
          }
      })
  })
}

const writeData = (path, data) => {
    return new Promise((resolve, reject)=>{
        writeFile(path, data, (err)=>{
            if (err){
                reject(err);
            }
            resolve()
        })
    })
}

const start = async ()=>{
    const data = await getData(path.join(__dirname, '/contents/res.txt'));
    for (let i = 0; i < 1000; i++) {
            console.log(i)
    }
    await writeData(path.join(__dirname, '/contents/res.txt'),data)
    console.log('OK!!!');
}


start()

// getData(path.join(__dirname, '/contents/res.txt'))
//     .then((data)=> writeData(path.join(__dirname, '/contents/text.txt'), data)
//         .then(()=> console.log('Everything is OK!!!'))
//         .catch((err)=> console.log(err)))
//     .catch((err)=> console.log(err));




