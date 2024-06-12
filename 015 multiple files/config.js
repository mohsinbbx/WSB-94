const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohsinkharadi51:HYU8TvYdkhrDFFfj@mohsinahmed.ptbmo5a.mongodb.net/?retryWrites=true&w=majority&appName=mohsinahmed')
.then(()=>{
    console.log('database connected');
})
.catch((error)=>{
    console.log(error);
})