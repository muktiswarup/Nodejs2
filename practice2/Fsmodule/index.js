
// file handling synchronously
/* const fs= require('fs');
fs.writeFileSync('Ram.txt',"Hi i am Ram");
const read=fs.readFileSync('./Ram.txt','utf-8');
console.log(read);
const append= fs.appendFileSync('./Ram.txt','And i love to play cricket');
fs.unlinkSync('./Ram.txt'); */
/* 


// file handling asynchronously
const fs= require('fs')
fs.writeFile('Ram.txt','hi iam RAM',(err)=>{
    if(err) throw err
    console.log("fiile have been saved")
}) */

   /*  const fs= require('fs');
    fs.readFile('./Ram.txt','utf-8',(err,data)=>{
        if(err) throw err
        console.log(data);
    }) */

        const fs= require('fs');
       /*  fs.appendFile('./Ram.txt','And my age is 25',(err)=>{
            if(err) throw err 
            console.log('data have been added');
        }) */

          /*  if(fs.existsSync('./Ram.txt')){
            console.log('file exist')
           }
 */

          /*  fs.unlink('../Ram.txt',(err)=>{
            if(err) throw err
            console.log('file deleted');
           }) */

//to remove a directory
fs.rmdir("Amit",(err)=>{
    if (err)throw err
    console.log('directory deleted'); // the directory shoud be in the fsmodule directory
})

