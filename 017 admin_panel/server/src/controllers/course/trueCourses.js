const Course = require("../../models/course/course")

const trueCourses = async(req,res) => {
    try{
        const course = await Course.find({status: true});

        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;

        res.status(200).json({message: 'data fetched successfully', data: course, filePath});
    }
    catch(error){
        console.log(error)
        res.status(200).json({message: 'internal server error'});
    }
};

module.exports = trueCourses;