
const fs= require('fs')
let html=fs.readFileSync('./htmltesting/index.html','utf-8')
const http= require('http'); 
const server=http.createServer((request,response)=>{
    response.end(html)
    console.log('a new request recieved');

})  

server.listen(8001,'127.0.0.1',()=>{
    console.log('server has started....')
})