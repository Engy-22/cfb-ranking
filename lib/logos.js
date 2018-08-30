#!/usr/bin/env node

/**
 * Download team logos from espns cdn
 */

const fs = require('fs');
const request = require('request');
const path = require('path');

const Query = require('./query');

let query = new Query();
let teams = query.getTeams();

teams.forEach(team => {
    let teamName = `${team.name}`.replace(/\s+/g, '-').toLowerCase();
    let file = path.resolve(__dirname, `../app/public/img/${teamName}.png`);
    if (!fs.existsSync(file)) {
        download(`http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/${team.espnId}.png&h=150&w=150`, file);
        console.log(`Downloaded ${teamName}.png`);
    } else {
        console.log(`Skipping ${teamName}.png`)
    }
});

function download(uri, filename) {
    request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename));
    });
};