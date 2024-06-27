const Slider = require("../../models/slider/slider");

const addSlider = async (req, res) => {
    try {
        const sliderData = req.body;

        if (req.file) {
            sliderData.thumbnail = req.file.filename;
        }

        console.log(sliderData);

        const data = new Slider(sliderData);

        const response = await data.save();

        res.status(200).json({ message: 'slider added successfully', data: response });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
};

module.exports = addSlider;