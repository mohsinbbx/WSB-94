const express = require('express');
const {mongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new mongoClient(url);

client.connect();

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    try{
        res.status(200).json({msg:'Welcome to api'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:'Internal Server Error'});
    }
    
});

app.post('/adddata', (req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json({msg:'Okey'});
    }
    catch(err){
        res.status(500).json({msg:'Internal Server Error'});
    }
});

app.listen(5000,()=>{
    console.log('server is running on port 5000');
})