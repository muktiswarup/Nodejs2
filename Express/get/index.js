const express= require ('express');
const fs=require ('fs');
const app=express();
const movie=JSON.parse(fs.readFileSync('./data/movies.json'))
app.get('/movies',(req,res)=>{
    res.status(200).json({
        status: 'success',
        count: movie.length,
        data: {
            movies: movie
        }
    })
})

PORT=8000;
app.listen(PORT,()=>{
    console.log('Server has started');
})