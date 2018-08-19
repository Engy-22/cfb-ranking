"use strict";

const Database = require('better-sqlite3');

module.exports = class Query {

    constructor() {
        this.db = new Database('db/ranking.db');
    }

    insertScore(scores) {
        const sql = 'INSERT INTO scores (home_team, home_score, away_team, away_score, neutral_site, season, week, date_played) VALUES (?,?,?,?,?,?,?,?)';
        const params = [scores.homeTeam, scores.homeScore, scores.awayTeam, scores.awayScore, scores.neutralSite, scores.season, scores.week, scores.datePlayed];
        return this.db.prepare(sql).run(params);
    }

    scoresExist(season, week) {
        const sql = 'SELECT COUNT(id) as count from scores WHERE season = ? AND week = ?';
        const params = [season, week];

        const rows = this.db.prepare(sql).get(params);
        return rows.count > 0;
    }

    getTeams() {
        const sql = 'SELECT id, name, mascot, espn_id AS espnId from teams';

        const rows = this.db.prepare(sql).all();
        return rows;
    }

    getScoresForTeam(teamId, season, week) {
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
        const params = {teamId, season, week};

        const rows = this.db.prepare(sql).get(params);
        return rows;
    }
}