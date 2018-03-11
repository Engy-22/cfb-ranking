"use strict";

const cfb = require('cfb-data');
const db = require('./db');

async function store(season, week) {
    if (db.scoresExist(season, week)) {
        console.log('No scores to add');
        return false;
    }

    const inputs = {
        year: season,
        week: week,
        groups: 80,
        limit: 900
    };

    const response = await cfb.scoreboard.getScoreboard(inputs);
    const events = response.events;

    events.forEach(event => {
        let competition = event.competitions[0];
        const score = {
            homeTeam: competition.competitors[0].id,
            homeScore: competition.competitors[0].score,
            awayTeam: competition.competitors[1].id,
            awayScore: competition.competitors[1].score,
            neutralSite: competition.neutralSite ? 1 : 0,
            season: response.season.year,
            week: response.week.number,
            datePlayed: competition.date
        };

        db.insertScore(score);
    });
}

function buildForTeams(season, endWeek) {
    const teams = db.getTeams();
    
    let week = 1;
    while (week <= endWeek) {
        teams.forEach((team, index) => {
            teams[index].scores = teams[index].scores || [];
            teams[index].scores.push(db.getScoresForTeam(team.espnId, season, week));
        });
        week++;
    }

    return teams;
}

module.exports = {
    store: store,
    buildForTeams: buildForTeams
};