"use strict";

const scores = require('./modules/scores');
const rankings = require('./modules/rankings');

//scores.store(2017, 2);
const teamScores = scores.buildForTeams(2017,2);

rankings.build(teamScores);


