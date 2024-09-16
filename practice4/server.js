const http= require('http')
require('dotenv').config();
const port = process.env.PORT
const server=http.createServer((req,res)=>{
   
    res.end("welcome")
})

server.listen(port,()=>{
    console.log("HI")
})
