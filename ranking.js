"use strict";

let fs = require('fs');
let orderBy = require('lodash/orderBy');
const Scores = require('./modules/scores');

let season = 2017;
let week = 5;
let scores = new Scores(season, week);

scores.update();
const teamScores = scores.buildForTeams();
build(teamScores);

function initRatings(teamScores) {
    let ratings = {};
    teamScores.forEach(team => {
        ratings[team.id] ={
            rating: 0,
            id: team.id,
            name: team.name,
            mascot: team.mascot,
            weeks: []
        };
    });

    return ratings;
}

function build(teamScores) {
    let ratings = initRatings(teamScores);

    teamScores.forEach(team => {
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

                ratings[team.id].weeks.push({
                    week,
                    valueOfWin,
                    win,
                    margin,
                    marginValue,
                    opponent,
                    qualityOfOpponent
                });

                //roll value of this win into the rating average
                ratings[team.id].rating = ((ratings[team.id].rating * (week - 1)) + valueOfWin) / week;
            }
        });
    });

    //console.log(ratings);

    //console.log(ratings);
    ratings = orderBy(ratings, 'rating', 'desc');
    fs.writeFileSync(`${season}.${week}.json`, JSON.stringify(ratings, null, 2));
}


