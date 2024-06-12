const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohsinkharadi51:HYU8TvYdkhrDFFfj@mohsinahmed.ptbmo5a.mongodb.net/test_atlas?retryWrites=true&w=majority&appName=mohsinahmed')
.then(()=>{
    console.log('database connected successfully');
});

const userSchema = new mongoose.Schema({
    name:String,
    email:String
});

const User = mongoose.model('users', userSchema);

const addUser = async()=>{
    const data = new User({
        name:"test",
        email:"test@test.com"
    });

    const response = await data.save();

    console.log(response);
}

// addUser();

const readData = async()=>{
    const response = await User.find();
    console.log(response);
}

readData();