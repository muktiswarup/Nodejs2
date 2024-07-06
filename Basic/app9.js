 /*how can we set the status code in a stastus..  in the inspect we can see response showing 200 as a status code but the page cant found like error 404 not found ..  bcz the default value is set to be 200.. so we need to set the status code... by seting respose.writeHead(200)
 how can we set the heder....as a response which format of file we are sending ...
 response.writeHead(200,{
 'conten-type': html/text})
*/
const fs= require('fs');
const http= require('http');
const html=fs.readFileSync('./headerpage/index.html','utf-8');
const contact=fs.readFileSync('./headerpage/contact.html','utf-8');
const server=http.createServer((request,response)=>{
    let path= request.url;
    if(path==='/' || path.toLocaleLowerCase()==='/home'){
        response.writeHead(200,{
            'Content-text': 'html/text'
        })
        response.end(html.replace('{{%CONTENT%}}','This is the Home page' ));
    } else if(path.toLocaleLowerCase()==='/contact.html'){
        response.writeHead(200,{
            'Content-text': 'html/text'
        })
        response.end(contact );
    }
    else if (path.toLocaleLowerCase()==='/education.html'){
        response.writeHead(200,{
            'Content-text': 'html/text'
        })
        response.end(html.replace('{{%CONTENT%}}','This is the education page' ));
    }else if(path.toLocaleLowerCase()==='/intrest.html'){
        response.writeHead(200,{
            'Content-text': 'html/text'
        })
        response.end(html.replace('{{%CONTENT%}}','This is the intrest page' ));
    }else{
        response.writeHead(404)
        response.end('404: request eror')
    }
    console.log('new request')
    
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started');
    
})