const express= require('express');
const app= express();

const loggedIn= (req,res,next)=>{
    const login=true;
    if(login){
        next();
    }else{
        res.send('You need to login first')
    }
}
const logtime=(req,res,next)=>{
    console.log("logged in time is :", new Date());
    next();
}
const cookie= (req,res)=>{
    res.send('Here Your Order, biscuit, chockolate');
}
app.use(loggedIn);
app.use(logtime);
app.get('/cookies',cookie);
app.listen(3000,()=>{
    console.log('Server Started');
})