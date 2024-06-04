const express = require('express');

const app = express();

const token = 'e5432';

const checkToken = (req,res,next)=>{
    const userToken = req.params.val;
    console.log(userToken);

    if(!userToken)
     {
        res.status(400).json({msg:'Please Add Token🙏'});
     }
     else if(userToken !== token){
        res.status(401).json({msg:'Invalid Token❌'});
     }
     else {
        next();
     }
};

app.use(checkToken);

app.get('/user/:val?', (req,res)=>{
    res.status(200).json({msg:'Api Fatched Successfully✅'});
})

app.get('/admin/:val?', (req,res)=>{
    res.status(200).json({msg:'Api Fatched Successfully✅'});
})

app.get('/client/:val?', (req,res)=>{
    res.status(200).json({msg:'Api Fatched Successfully✅'});
})

app.listen(5500,()=>{
    console.log('server is running on port 5500');
})