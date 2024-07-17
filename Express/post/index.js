const express= require('express');
const app= express();
const fs= require('fs');
app.use(express.json());
PORT=8000;
const movies=JSON.parse(fs.readFileSync('./data/movies.json','utf-8'))
app.get("/api/movies",(req,res)=>{
    res.status(200).json({
        status: 'succes',
        data:{
            movie:movies
        }
    }

    )
})

app.post("/api/movies",(req,res)=>{
    // console.log(req.body);
    const newId=movies[movies.length-1].id+1;
    const newMovie=Object.assign({id: newId},req.body) //create new object by merging two object.
    movies.push(newMovie);
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(201).json({
            status:'succes',
            data:{
                movie:newMovie
            }
        }
        )
    })
    // res.send('created');
})

app.listen(PORT,()=>{
    console.log('server started');
})

    