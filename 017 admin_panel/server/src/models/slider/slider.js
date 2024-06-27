const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
    sliderheading:String,
    slidersubheading:String,
    sliderdes:String,
    thumbnail:String,
    status:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date
    }
});

const Slider = mongoose.model('sliders', sliderSchema);

module.exports = Slider;