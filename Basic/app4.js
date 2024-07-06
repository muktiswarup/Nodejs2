const fs= require('fs');
fs.readFile('./files/input.txt','utf-8',(err,data1)=>{      // read the file asynchronously 
    if(err)throw err;
    console.log(data1);
    fs.readFile(`./files/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2);
        fs.readFile('./files/output.txt','utf-8',(err,data3)=>{
console.log(data3);

fs.writeFile('./files/append.txt',`${data2}\n\n ${data3}`,()=>{         // write the file asynchronously...
    console.log('file is written')
})
        })
    })
})