const http= require('http')
const path= require('path')
const fs= require('fs')

let server = http.createServer((req,resp)=>{
    /* let url = req.url
    console.log(url) */
    if(req.url ==="/" || req.url ==="/index"){
        fs.readFile(path.join(process.cwd(),"views","index.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url==="/about"){
        fs.readFile(path.join(process.cwd(),"views","about.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url==="/services"){
        fs.readFile(path.join(process.cwd(),"views","services.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url==="/contact"){
        fs.readFile(path.join(process.cwd(),"views","contact.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }

    
})
server.listen(3000,(err)=>{
    if(err) throw err 
    console.log(`Server is Running: localhost:3000 `)
})