const express = require('express');

const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
const app = express();

const m1 = (req,res,next)=>{
    console.log('m1 called');
    next();
}

const m2 = (req,res,next)=>{
    console.log('m2 called');
    next();
}

const m3 = (req,res,next)=>{
    console.log('m3 called');
    next();
}

router1.use(m1);
router2.use(m2);
router3.use(m3);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

router1.get('/home', (req,res)=>{
    res.send('r1-home');
})

router1.post('/about', (req,res)=>{
    res.send('r1-about');
})

router1.put('/gallery', (req,res)=>{
    res.send('r1-gallery');
})

router1.patch('/course', (req,res)=>{
    res.send('r1-course');
})

router1.delete('/contact', (req,res)=>{
    res.send('r1-contact');
})



router2.get('/home', (req,res)=>{
    res.send('r2-home');
})

router2.post('/about', (req,res)=>{
    res.send('r2-about');
})

router2.put('/gallery', (req,res)=>{
    res.send('r2-gallery');
})

router2.patch('/course', (req,res)=>{
    res.send('r2-course');
})

router2.delete('/contact', (req,res)=>{
    res.send('r2-contact');
})



router3.get('/home', (req,res)=>{
    res.send('r3-home');
})

router3.post('/about', (req,res)=>{
    res.send('r3-about');
})

router3.put('/gallery', (req,res)=>{
    res.send('r3-gallery');
})

router3.patch('/course', (req,res)=>{
    res.send('r3-course');
})

router3.delete('/contact', (req,res)=>{
    res.send('r3-contact');
})

app.use('/route1', router1);
app.use('/route2', router2);
app.use('/route3', router3);

app.listen(5100,()=>{
    console.log('server is running on port 5100');
})