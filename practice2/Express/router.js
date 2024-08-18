const express= require('express');
const router=express.Router();
router.route('/')
.get((req,res)=>res.json('get succesfully'))
.post((req,res)=>res.status(201).send('created succesfully'))
.delete((req,res)=>res.status(205).json('deleted succesfuly'))

module.exports= router;