const cfb = require('cfb-data');
const db = require('./modules/db');

async function getWeeklyScores(inputs) {
	const response = await cfb.scoreboard.getScoreboard(inputs);
	const events = response.events;

	events.forEach(event => {
		let competition = event.competitions[0];
		const score = {
			homeTeam: competition.competitors[0].id,
			homeScore: competition.competitors[1].id,
			awayTeam: competition.competitors[0].score,
			awayScore: competition.competitors[0].score,
			neutralSite: competition.neutralSite,
			season: response.season.year,
			week: response.week.number,
			datePlayed: competition.date
		};

		db.insertScore(score);
	});
}

var inputs = {
	year: 2017,
	week: 1,
	groups: 80,
	limit: 900
};

getWeeklyScores(inputs);

