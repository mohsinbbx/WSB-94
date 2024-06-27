const express = require('express');
const { addSlider } = require('../../controllers/controllers');
const sliderMulterFile = require('../../middlewares/slider/sliderMulter');

const sliderRoutes = express.Router();

sliderRoutes.post('/add_slider', sliderMulterFile, addSlider);

module.exports = sliderRoutes;