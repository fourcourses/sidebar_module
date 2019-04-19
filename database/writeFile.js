const sampleSideBarItems = require('./seed.js');
const fs = require('fs');

const stringSampleSideBarItems = JSON.stringify(sampleSideBarItems);

const myWriteStream = fs.createWriteStream(__dirname + '/writeData.txt');

myWriteStream.write(stringSampleSideBarItems);


// console.log('sample: ', sampleSideBarItems);

