"use strict";

const cfb = require('cfb-data');
const Query = require('./query');
const chalk = require('chalk');

module.exports = class Scores {

    constructor(season, week) {
        this.season = season;
        this.week = week;
        this.query = new Query();
    }

    async store(season, week) {
        let teams = this.query.getTeams();

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

            let homeTeam = competition.competitors[0];
            let awayTeam = competition.competitors[1];

            // map the id from the teams table to the espn_id
            homeTeam.id = this.getIdFromESPNId(teams, homeTeam.id);
            awayTeam.id = this.getIdFromESPNId(teams, awayTeam.id);

            const score = {
                homeTeam: homeTeam.id,
                homeScore: homeTeam.score,
                awayTeam: awayTeam.id,
                awayScore: awayTeam.score,
                neutralSite: competition.neutralSite ? 1 : 0,
                season: response.season.year,
                week: response.week.number,
                datePlayed: competition.date
            };

            this.query.insertScore(score);
        });
    }

    update() {
        let weekIndex = 1;
        while (weekIndex <= this.week) {
            process.stdout.write(`Fetching scores for week ${weekIndex}: `);

            if (!this.query.scoresExist(this.season, weekIndex)) {
                this.store(this.season, weekIndex);
                console.log(chalk.green('success'));
            } else {
                console.log(chalk.green('scores exist, skipping'));
            }
            weekIndex++;
        }
    }

    buildForTeams() {
        let teams = this.query.getTeams();

        let weekIndex = 1;
        while (weekIndex <= this.week) {
            teams = teams.map(team => {
                team.scores = team.scores || [];
                team.scores.push(this.query.getScoresForTeam(team.id, this.season, weekIndex));

                return team;
            });
            weekIndex++;
        }

        return teams;
    }

    getIdFromESPNId(teams, espnId) {
        return teams.find(team => team.espnId == espnId) || null;
    }
}