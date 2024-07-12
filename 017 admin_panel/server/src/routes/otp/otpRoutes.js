const express = require('express');
const { otpGenerator } = require('../../controllers/controllers');

const otpRouter = express.Router();

otpRouter.post('/generate_otp', otpGenerator);

module.exports = otpRouter;