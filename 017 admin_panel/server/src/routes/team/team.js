const express = require('express');
const teamMulterFile = require('../../middlewares/team/teamMulter');
const { addTeam, readTeam, updateTeamStatus } = require('../../controllers/controllers');

const teamRoutes = express.Router();

teamRoutes.post('/add_team', teamMulterFile, addTeam);
teamRoutes.get('/read_team', readTeam);
teamRoutes.put('/update_status', updateTeamStatus);

module.exports = teamRoutes;