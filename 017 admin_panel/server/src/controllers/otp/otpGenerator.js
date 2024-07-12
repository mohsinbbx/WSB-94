const nodemailer = require('nodemailer');
const otpSave = require('../../support/otpdata/otpMap');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_APP_PASSWORD
    }
});

const otpGenerator = async (req, res) => {
    try {
        const { email } = req.body;

        const otp = Math.floor(Math.random() * 1000000);

        otpSave.set(email, otp)

        const options = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'OTP for password reset',
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }
        .container{
            max-width: 800px;
            margin: auto;
            background-color: darkseagreen;
            padding: 20px;
        }
        h1{
            text-align: center;
        }
        span{
            font-weight: bolder;
            font-size: 22px;
            line-height: 40px;
        }
        .otp{
            margin-top: 10px;
            font-size: 18px;
        }
        .share{
            font-size: 18px;
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Mohsin World</h1>
        <p>
            <span> Thank you so much </span>
            <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reiciendis doloribus. Aperiam at rem quis ea, est debitis doloremque nesciunt incidunt natus aliquid explicabo dolorem autem placeat dicta voluptatum a.
        </p>
        <p class="otp">
            Your one time password is <span>${otp}</span>
        </p>
        <p class="share">
            Don't share your otp with anyone
        </p>
    </div>
</body>
</html>`
        }

        transporter.sendMail(options, (error, success) => {
            if (error) return res.status(501).json({ message: 'something went wrong' });

            // console.log(success);
            res.status(200).json({ message: 'otp sent to your mail' });
        });

        // console.log(otpSave.get(email));
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }

    
};

module.exports = otpGenerator;