#!/usr/bin/env node

"use strict";

const os = require('os');
const inquirer = require('inquirer');
const chalk = require('chalk');
const Ranking = require('./lib/ranking')
const Scores = require('./lib/scores')

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
        console.error(error);
        console.log(chalk.red('An error occured - exiting...'));
        process.exit();
    }

    console.log('');

    // make sure all scores are up to date
    let scores = new Scores(season, week);
    scores.update();

    console.log('');

    // build team and scores object
    const teamScores = scores.buildForTeams();

    // build rankings
    let ranking = new Ranking(season, week, teamScores);
    ranking.build();
    let result = ranking.store();

    // if rankings already exist for this week, confirm overwrite
    if (!result) {
        try {
            let answers = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'overwrite',
                    message: `Rankings already exist for Season ${season} Week ${week}.  Do you want to overwrite?`
                },
            ]);

            if (answers.overwrite) {
                ranking.store(true);
            }
        } catch (error) {
            console.error(error);
            console.log(chalk.red('An error occured - exiting...'));
            process.exit();
        }
    }
}

// run
main();