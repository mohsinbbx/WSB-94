const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/newmongoose')
.then(()=>{
    console.log('database connected');
})
.catch((error)=>{
    console.log(error);
});

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:Number,
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const User = mongoose.model('users', userSchema);

const app = express();
app.use(express.json());

app.post('/insert_user', async(req,res)=>{
    try{
        const data = req.body;

        const userData = new User(data);

        const response = await userData.save();

        res.status(200).json({message:'data inserted successfully', data:response});
    }
    catch(error){
        console.log(error);

        if(error.code === 11000) return res.status(400).json({message:'email is already registered'});

        if(error.errors.mobile) return res.status(402).json({message:'please provid a valid mobile'});

        res.status(500).json({message:'Internal server error'});
    }
});

app.get('/read_data',async(req,res)=>{
    const response = await User.find();
    res.status(200).json({message:'data fatched successfully', data:response});
});

app.listen(5200,()=>{
    console.log('server is running on port 5200');
});