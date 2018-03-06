const cfb = require('cfb-data');
const db = require('./db');

async function store(season, week) {

    if (db.scoresExist(season, week)) {
        return false;
    }

    const inputs = {
        year: season,
        week: week,
        groups: 80,
        limit: 900
    }

    const response = await cfb.scoreboard.getScoreboard(inputs);
    const events = response.events;

    events.forEach(event => {
        let competition = event.competitions[0];
        const score = {
            homeTeam: competition.competitors[0].id,
            homeScore: competition.competitors[1].id,
            awayTeam: competition.competitors[0].score,
            awayScore: competition.competitors[0].score,
            neutralSite: competition.neutralSite ? 1 : 0,
            season: response.season.year,
            week: response.week.number,
            datePlayed: competition.date
        };

        db.insertScore(score);
    });
}

module.exports = {
    store: store
};