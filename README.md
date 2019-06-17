My College Football computer poll built with Node, SQLite and Vue

View Rankings - https://johnwilhite.github.io/cfb-ranking/

## Installation
Dependencies
* Node
* NPM/Yarn
* SQLite3

```bash
git clone git@github.com:johnwilhite/cfb-ranking.git
cd cfb-ranking
yarn/npm init-db
```

## Usage
`./cfb-ranking.js`

![screenshot](https://github.com/johnwilhite/cfb-ranking/raw/master/public/img/screenshot.png)

Provide a season and week
Scores will be pulled, rankings calculated and stored to a json file.  Rankings can be recomputed by running a week again.  The rankings are then viewable in table format in the webapp.

## Project Overview


At its core, this project consists of two main components:

### Node.js CLI
The CLI does the heavy lifting: pulling scores from an external api, storing them in the database, computing the rankings, and generating json ranking files.  The json files are commited with the repo and stored in the public directory. The frontend can then access these through an ajax request.

### Vue Front End
Super simple vue app for displaying and switching between the json files for each week.

