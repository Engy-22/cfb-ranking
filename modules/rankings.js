"use strict";

function initRatings(teamScores) {
    let ratings = {};
    teamScores.forEach(team => {
        ratings[team.espnId] = 0;
    });

    return ratings;
}

module.exports.build = function(teamScores) {
    let ratings = initRatings(teamScores);

    teamScores.forEach(team => {
        team.scores.forEach((score, week) => {
            week++;

            if (score) {
                let valueOfWin = 0;
                let margin = Math.abs(score.score - score.opposingScore);
                let marginValue = 0.2 * margin / (margin + 5);
                let qualityOfOpponent = 0.3;
                
                // win
                if (score.score > score.opposingScore) {
                    valueOfWin = 0.5;
                    valueOfWin = valueOfWin + marginValue + qualityOfOpponent;
                } else { //loss
                    marginValue = (0.2 - marginValue);
                    valueOfWin = valueOfWin + marginValue + qualityOfOpponent;
                }

                //roll value of this win into the rating average
                ratings[team.espnId] = ((ratings[team.espnId] * (week - 1)) + valueOfWin) / week;
            }
        });
    });

    console.log(ratings);
    console.log(teamScores);
}