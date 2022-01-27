let fs = require('fs');

const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const errOutput = fs.createWriteStream("./stderr.log");

const print = new Console(output,errOutput);

const roll = "890900";
print.log('roll: %d',roll);
print.log('This will be stored.')

