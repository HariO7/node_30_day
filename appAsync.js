const fs = require('fs');
const file = 'msg.txt';
fs.unlink(file, (err) =>{
    if(err)
    throw err;

    console.log('deleted')
})