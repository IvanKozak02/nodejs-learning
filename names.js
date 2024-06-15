const {writeFile, readFile} = require('fs');
const util = require("util");
const path = require("path");

const readFilePromisify = util.promisify(readFile);
const writeFilePromisify = util.promisify(writeFile);

const setTimeOutPromisify = util.promisify(setTimeout);




const writeNamesIntoFile = async () => {
    const data = await readFilePromisify(path.join(__dirname, 'names.txt'), 'utf-8');
    const names = data.split(',');
    await writeFilePromisify(
        path.join(__dirname, '/contents/namesRes.txt'),
        names.map((name, index)=> `${index + 1}.${name}`).join('\n')
    );
}


writeNamesIntoFile();