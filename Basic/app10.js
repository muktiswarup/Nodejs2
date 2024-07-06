const fs= require('fs');
const http= require('http');
const html=fs.readFileSync('./headerpage/index.html','utf-8');
const contact=fs.readFileSync('./headerpage/contact.html','utf-8');
const product=JSON.parse(fs.readFileSync('./data/product.json','utf-8'))
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
    }else if(path.toLocaleLowerCase()==='/product'){
        response.writeHead(200,{'content-type':'application/json'})
        response.end('You are in product page....')
        console.log(product);

    }
    else
    {
        response.writeHead(404)
        response.end('404: request eror')
    }
    console.log('new request')
    
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started');
    
})












/* how can we work with json data in node js..
1.Json is a data format where we store the data as a javascript object data format.In json format the property name is wrapped with codes.
2.why we are using json format..when we will work on realworld project we will work on backend database like nosql. in such database we will keep store the data in the json format. When we need to fetch some data from db we will get the data as a json object. and we will convert into the javascript object......

*/