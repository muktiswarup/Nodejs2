// reading and writting to a file
const fs= require('fs');
const data =fs.readFileSync('./files/input.txt','utf-8');
console.log(data);      // this method read the file the synchronously whic affect the performanece because it will execute one by one for that it take time and the next process to wait for the first process execute .. to over come this there is another prcess is asynchronosly..

let content= `Data read from input.txt ${data}. \n Date created ${new Date()}`;
const write=fs.writeFileSync('./files/output.txt',content);


// Asynchronously method to read and write...