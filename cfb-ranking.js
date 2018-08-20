#!/usr/bin/env node

"use strict";

const os = require('os');
const inquirer = require('inquirer');
const chalk = require('chalk');
const Ranking = require('./modules/ranking')
const Scores = require('./modules/scores')

async function main() {
    const date = new Date();
    const year = date.getFullYear();
    let season;
    let week;

    let art = '';
    art += `   ___ ___ ___     ___    _   _  _ _  _____ _  _  ___ ${os.EOL}`;
    art += `  / __| __| _ )___| _ \\  /_\\ | \\| | |/ /_ _| \\| |/ __|${os.EOL}`;
    art += ` | (__| _|| _ \\___|   / / _ \\|    |   < | ||    | (_ |${os.EOL}`;
    art += `  \\___|_| |___/   |_|_\\/_/ \\_\\_|\\_|_|\\_\\___|_|\\_|\\___|${os.EOL}`;
    art += ` NCAA College Football ranking tool built with node.js${ os.EOL }`;

    console.log(chalk.blue(art));

    // prompt user for season and week
    try {
        let answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'season',
                message: 'Season: ',
                validate: (season) => {
                    return (!isNaN(season) && season >= year-5 && season <= year+1)
                }
            },
            {
                type: 'input',
                name: 'week',
                message: 'Week: ',
                validate: (week) => {
                    return (!isNaN(week) && week >= 1 && week <= 20)
                }
            },
        ]);
        season = answers.season;
        week = answers.week;
    } catch (error) {
        console.log(chalk.red('An error occured - exiting...'));
        process.exit();
    }

    // make sure all scores are up to date
    let scores = new Scores(season, week);
    scores.update();

    // build team and scores object
    const teamScores = scores.buildForTeams();

    // build rankings
    ranking = new Ranking(season, week, teamScores);
    ranking.build();
    ranking.store();
}

// run
main();