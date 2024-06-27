const express = require('express');
const teamMulterFile = require('../../middlewares/team/teamMulter');
const { addTeam } = require('../../controllers/controllers');

const teamRoutes = express.Router();

teamRoutes.post('/add_team', teamMulterFile, addTeam);

module.exports = teamRoutes;