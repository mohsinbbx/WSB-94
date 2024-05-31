const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

const htmlPath = path.join(__dirname, 'public');

app.use(express.static(htmlPath));

app.get('/',(req,res) => {
    res.sendFile(`${htmlPath}/home.html`);
})

app.get('/about',(req,res) => {
    res.sendFile(`${htmlPath}/about.html`);
})

app.get('/contact',(req,res) => {
    res.sendFile(`${htmlPath}/contact.html`);
})

app.get('/pdf',(req,res) => {
    res.sendFile(`${htmlPath}/file-sample_150kB.pdf`);
})




app.get('/index',(req,res) => {
    res.sendFile(`${htmlPath}/index.html`);
})

app.get('/aboutus',(req,res) => {
    res.sendFile(`${htmlPath}/aboutus.html`);
})

app.get('/courses',(req,res) => {
    res.sendFile(`${htmlPath}/courses.html`);
})

app.get('/gallery',(req,res) => {
    res.sendFile(`${htmlPath}/gallery.html`);
})

app.get('/enquiry',(req,res) => {
    res.sendFile(`${htmlPath}/enquiry.html`);
})

app.get('/contactus',(req,res) => {
    res.sendFile(`${htmlPath}/contactus.html`);
})




app.get('/*', (req,res) => {
    res.sendFile(`${htmlPath}/404.html`);
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
});