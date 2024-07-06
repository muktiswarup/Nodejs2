
const fs= require('fs');
fs.readFile('./files/input.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data);
})
console.log('reading file....')

// first reading file.... is executed because in asynchronous fs.readfile will take time to read the file so it takes time in background and reading file is executed in singlr thread ...

//while in synchronously the it will block the next statement until the file has not been executed....