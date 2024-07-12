const express = require('express');
const { addVideo,
    readVideo,
    updateVideoStatus,
    readSingleVideo
} = require('../../controllers/controllers');

const videoRoutes = express.Router();

videoRoutes.post('/add_video', addVideo);
videoRoutes.get('/read_video', readVideo);
videoRoutes.put('/update_status',updateVideoStatus);
videoRoutes.get('/fetch_video_with_id/:_id', readSingleVideo);

module.exports = videoRoutes;