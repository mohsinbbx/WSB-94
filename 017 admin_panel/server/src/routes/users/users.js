const express = require('express');
const registerUser = require('../../controllers/users/registerUser');

const userRouter = express.Router();

userRouter.post('/register_user', registerUser);

module.exports = userRouter;