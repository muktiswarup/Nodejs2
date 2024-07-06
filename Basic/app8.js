const fs= require('fs');
const http= require('http');
const html=fs.readFileSync('./headerpage/index.html','utf-8');
const contact=fs.readFileSync('./headerpage/contact.html','utf-8');
const server=http.createServer((request,response)=>{
    let path= request.url;
    if(path==='/' || path.toLocaleLowerCase()==='/home'){
        response.end(html.replace('{{%CONTENT%}}','This is the Home page' ));
    } else if(path.toLocaleLowerCase()==='/contact.html'){
        response.end(contact );
    }
    else if (path.toLocaleLowerCase()==='/education.html'){
        response.end(html.replace('{{%CONTENT%}}','This is the education page' ));
    }else if(path.toLocaleLowerCase()==='/intrest.html'){
        response.end(html.replace('{{%CONTENT%}}','This is the intrest page' ));
    }else{
        response.end('404: request eror')
    }
    console.log('new request')
    
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started');
    
})