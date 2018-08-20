"use strict";

let fs = require('fs');
const Query = require('./query');

module.exports = class Ranking {

    constructor (season, week, teamScores) {
        this.season = season;
        this.week = week;
        this.teamScores = teamScores;
        this.ratings = {};
    
        this.teamScores.forEach(team => {
            this.ratings[team.id] = {
                rating: 0,
                id: team.id,
                name: team.name,
                mascot: team.mascot,
                weeks: []
            };
        });

        this.query = new Query();
    }

    build() {
        this.teamScores.forEach(team => {
            team.scores.forEach((score, week) => {
                week++;

                if (score) {
                    let valueOfWin = 0;
                    let margin = Math.abs(score.score - score.opposingScore);;
                    let marginValue = 0.2 * margin / (margin + 5);
                    let qualityOfOpponent = 0.3;
                    let win = false;
                    let opponent = score.opposingTeam;

                    // win
                    if (score.score > score.opposingScore) {
                        valueOfWin = 0.5;
                        valueOfWin = valueOfWin + marginValue + qualityOfOpponent;
                        win = true;
                    }
                    // loss
                    else {
                        marginValue = (0.2 - marginValue);
                        valueOfWin = valueOfWin + marginValue + qualityOfOpponent;
                    }

                    this.ratings[team.id].weeks.push({
                        week,
                        valueOfWin,
                        win,
                        margin,
                        marginValue,
                        opponent,
                        qualityOfOpponent
                    });

                    //roll value of this win into the rating average
                    this.ratings[team.id].rating = ((this.ratings[team.id].rating * (week - 1)) + valueOfWin) / week;
                }
            });
        });

        return this.ratings;
    }

    store() {
        // clear existing ratings for this week
        this.query.clearRatings(this.season, this.week);

        // store each rating
        Object.keys(this.ratings).forEach((key) => {
            this.query.insertRating(this.season, this.week, this.ratings[key]);
        });
    }
}

