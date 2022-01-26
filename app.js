var fs = require('fs');
var filename = "data.txt";
var str = fs.readFileSync(filename).toString();
var pattern = /man/gim;
var myarray = str.match( pattern );
var len = myarray.length;
console.log(`Number of Occurance: ${len}`);


// var fs = require('fs');
// var filename = 'data.txt';
// var str = fs.readFileSync(filename).toString();
// var pattern = /man/gim;
// var myarray = str.match( pattern );
// var len = myarray.length;
// console.log(`Occurance :${len}`);