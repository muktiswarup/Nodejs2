const fs= require('fs');
let data =fs.readFile('./file/prac.txt','utf-8',(err,data)=>{

    if(err) throw err
    console.log('data')
});
console.log('file reading has been started');

let content= `mukti is not good in study but from last few days he is working so hard to get to knw all th concept.. the ${data} of mukti you can get in his instagram account`

fs.writeFile('./file/mukti.txt',content,()=>{
console.log('the file is written')
});