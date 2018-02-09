const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/ranking.db');

module.exports.insertScore = function(scores) {
    return db.run(
        'INSERT INTO scores (home_team, home_score, away_team, away_score, neutral_site, season, week, date_played) VALUES (?,?,?,?,?,?,?,?)',
        [scores.homeTeam, scores.homeScore, scores.awayTeam, scores.awayScore, scores.neutralSite, scores.season, scores.week, scores.datePlayed]
    );
}






