const fs=require('fs');
const data=fs.readFileSync('./file/prac.txt','utf-8');
console.log(data);

let content= `input the data of the prac.txt ${data}. \n The date of today is ${new Date()}`;
fs.writeFileSync('./file/write.txt',content);
