const Slider = require("../../models/slider/slider");

const readSlider = async (req, res) => {
    try {
        const response = await Slider.find();
        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;

        res.status(200).json({ message: 'data fetched successfully', data: response, filePath });
    }
    catch (error) {
        res.status(500).json({ message: 'internal server error' });
    }
};

module.exports = readSlider;