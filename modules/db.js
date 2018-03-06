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

module.exports = {
	insertScore: insertScore,
	scoresExist: scoresExist
};