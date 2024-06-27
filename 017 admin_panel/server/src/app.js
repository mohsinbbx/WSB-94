const express = require('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/course');
const sliderRoutes = require('./routes/slider/slider');
const teamRoutes = require('./routes/team/team');
require('./db/config');

const allRoutes = express.Router();

allRoutes.use('/admin', adminRoutes);
allRoutes.use('/course', courseRoutes);
allRoutes.use('/slider', sliderRoutes);
allRoutes.use('/team', teamRoutes);

module.exports = allRoutes;