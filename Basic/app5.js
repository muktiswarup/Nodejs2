// how to create a server ....


const http= require('http'); // this http will return a object

// first we need to create  server .. to create a server we will use createserver() where we will pass one call back function
const server=http.createServer((request,response)=>{
    response.end('<h1>Hello from the server </h1>')
    console.log('a new request recieved')
    // console.log(request)
    // console.log(response)

})     //the call back function will be executed every time a new request hits the server

// now we will start the server for that we will use listen method it will take two parameter first is port no, 2nd local host, 3rd call back func

server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started....')
})