const express = require('express');
const { addCourse } = require('../../controllers/controllers');
const courseMulterFlie = require('../../middlewares/course/courseMulter');

const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFlie, addCourse);

module.exports = courseRoutes;