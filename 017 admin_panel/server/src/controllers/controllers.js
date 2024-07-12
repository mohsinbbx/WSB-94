// Admin Controllers
const adminLogin = require('./admin/adminLogin');
const registerAdmin = require('./admin/registerAdmin');

// Course Controllers
const addCourse = require('./course/addCourse');
const changeStatus = require('./course/changeStatus');
const deleteMultipleCourse = require('./course/deleteMultipleCourse');
const deleteSingleCourse = require('./course/deleteSingleCourse');
const readCourse = require('./course/readCourse');
const readSingleCourse = require('./course/readSingleCourse');
const trueCourses = require('./course/trueCourses');
const updateCourse = require('./course/updateCourse');

// OTP Controllers
const otpGenerator = require('./otp/otpGenerator');

// Slider Controllers
const addSlider = require('./slider/addSlider');
const readSlider = require('./slider/readSlider');
const updateStatus = require('./slider/updateStatus');

// Team Controllers
const addTeam = require('./team/addTeam');
const readTeam = require('./team/readTeam');
const updateTeamStatus = require('./team/updateStatus');

// Video Controllers
const addVideo = require('./videos/addVideo');
const readSingleVideo = require('./videos/readSingleVideo');
const readVideo = require('./videos/readVideo');
const updateVideoStatus = require('./videos/updateStatus');




module.exports = {
    registerAdmin,
    adminLogin,

    addCourse,
    readCourse,
    changeStatus,
    readSingleCourse,
    updateCourse,
    deleteSingleCourse,
    deleteMultipleCourse,
    trueCourses,

    addVideo,
    readVideo,
    updateVideoStatus,
    readSingleVideo,

    addSlider,
    readSlider,
    updateStatus,

    addTeam,
    readTeam,
    updateTeamStatus,

    otpGenerator
}