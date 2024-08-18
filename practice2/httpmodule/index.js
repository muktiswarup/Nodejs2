const http= require('http')
const url= require('url')
const server=http.createServer((req,res)=>{
    // console.log(req);
    // console.log(res)
    res.writeHead(201,{
        "content-type": " application/json"
    }). write("Hello world i am back");

    if(url==='/'){
        res.write("You are in Home page");
        res.end();
    }else{
        res.write(JSON.stringify({msz:`You are in ${req.url} page`}))
        res.end();
    }
    

})



const port= 3000;
server.listen(port,(err)=>{
    if(err) throw err
    console.log('server listening')
})