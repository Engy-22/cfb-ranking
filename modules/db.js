var Database = require('better-sqlite3');
var db = new Database('db/ranking.db');

function insertScore(scores) {
	const sql = 'INSERT INTO scores (home_team, home_score, away_team, away_score, neutral_site, season, week, date_played) VALUES (?,?,?,?,?,?,?,?)';
	const params = [scores.homeTeam, scores.homeScore, scores.awayTeam, scores.awayScore, scores.neutralSite, scores.season, scores.week, scores.datePlayed];
	return db.prepare(sql).run(params);
}

function scoresExist(season, week) {
	const sql = 'SELECT COUNT(id) as count from scores WHERE season = ? AND week = ?';
	const params = [season, week];

	const rows = db.prepare(sql).get(params);
	return rows.count > 0;
}

function getTeams() {
	const sql = 'SELECT name, mascot, espn_id AS espnId from teams';

	const rows = db.prepare(sql).all();
	return rows;
}

function getScoresForTeam(teamId, season, week) {
	const sql = `
		SELECT 
			CASE WHEN home_team = :teamId
			THEN home_score
			ELSE away_score
			END AS score,

				CASE WHEN home_team = :teamId
			THEN away_score
			ELSE home_score
			END AS opposingScore,

				CASE WHEN home_team = :teamId
			THEN away_team
			ELSE home_team
			END AS opposingTeam,

				CASE WHEN neutral_site
			THEN 'neutral'
			WHEN home_team = :teamId
			THEN 'home'
			ELSE 'away'
			END AS location

		FROM scores
		WHERE season = :season
		AND week = :week
		AND(home_team = :teamId OR away_team = :teamId);`;
	const params = {teamId: teamId, season: season, week: week};

	const rows = db.prepare(sql).get(params);
	return rows;
}

function buildScoresByTeam(season, week) {
	const teams = getTeams();

	teams.forEach((team, index) => {
		teams[index].scores = [];
		teams[index].scores.push(getScoresForTeam(team.espnId, season, week));
	});
	console.dir(teams);
}

module.exports = {
	insertScore: insertScore,
	scoresExist: scoresExist,
	buildScoresByTeam: buildScoresByTeam
};