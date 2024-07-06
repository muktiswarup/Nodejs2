const fs= require('fs');
const http= require('http');
// const ht=fs.readFileSync('./headerpage/index.html','utf-8');
const server=http.createServer((request,response)=>{
    let path= request.url;
    if(path==='/' || path.toLocaleLowerCase()==='/home'){
        response.end('This is the home page of my website')
    } else if(path.toLocaleLowerCase()==='/about'){
        response.end('This is the about page');
    }else if (path.toLocaleLowerCase()==='/service'){
        response.end('this is the service page ')
    }else{
        response.end('404 error')
    }
    console.log('new request')
    
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started');
    
})


