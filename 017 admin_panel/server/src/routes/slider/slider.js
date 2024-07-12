const express = require('express');
const { addSlider,
    readSlider,
    updateStatus
} = require('../../controllers/controllers');
const sliderMulterFile = require('../../middlewares/slider/sliderMulter');

const sliderRoutes = express.Router();

sliderRoutes.post('/add_slider', sliderMulterFile, addSlider);
sliderRoutes.get('/read_slider', readSlider);
sliderRoutes.put('/update_status', updateStatus);

module.exports = sliderRoutes;