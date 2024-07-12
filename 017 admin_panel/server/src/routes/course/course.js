const express = require('express');
const { addCourse,
    readCourse,
    changeStatus,
    readSingleCourse,
    updateCourse,
    deleteSingleCourse,
    deleteMultipleCourse,
    trueCourses
} = require('../../controllers/controllers');
const courseMulterFlie = require('../../middlewares/course/courseMulter');

const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFlie, addCourse);
courseRoutes.get('/read_courses', readCourse);
courseRoutes.put('/change_course_status', changeStatus);
courseRoutes.get('/fetch_course_with_id/:_id', readSingleCourse);
courseRoutes.put('/update_course/:_id', courseMulterFlie, updateCourse);
courseRoutes.delete('/delete_single_course/:_id', deleteSingleCourse);
courseRoutes.delete('/multi_delete', deleteMultipleCourse);
courseRoutes.get('/true_courses', trueCourses);

module.exports = courseRoutes;