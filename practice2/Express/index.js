const express= require('express');
const app= express();
const Router= require('./router')
app.use('/api/v1',Router);
app.listen(3000,()=>{console.log('Server Started')})