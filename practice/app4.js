const http = require('http');
http.createServer((request,response)=>{
    response.end('server created')
    console.log('a new request received')
});
