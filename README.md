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
yarn init-db # or npm run init-db
```

## Usage
`./cfb-ranking.js`

![screenshot](https://github.com/johnwilhite/cfb-ranking/raw/master/public/img/screenshot.png)

Provide a season and week

Scores will be pulled, rankings calculated and stored to a json file.  Rankings can be recomputed by running a week again.  The rankings are then viewable in table format in the webapp.

## Project Overview

The technical decisions for this project were made in an attempt to create a semi-dynamic application on Github Pages.  All the rankings are computed locally via the CLI and is stored in generated json files. The data remains static once computed, so it can be pushed as part of the repo. 

### Node.js CLI
The CLI does the heavy lifting: pulling scores from an external api, storing them in the database, computing the rankings, and generating json ranking files.  The json files are commited with the repo and stored in the public directory. The frontend can then access these through an ajax request.

### Vue Front End
Super simple vue app for displaying and switching between the json files for each week.

# Formula

### Win/Loss (50%)
Win: 0.5
Loss: 0.0

### Margin (20%)
```js
Math.max(margin / (margin + 120), 0.2);
```

| Margin | Value | Margin | Value | Margin | Value |
|---|---------|----|---------|----|---------|
| 1 | 0.00826 | 11 | 0.08397 | 21 | 0.14894 |
| 2 | 0.01639 | 12 | 0.09091 | 22 | 0.15493 |
| 3 | 0.02439 | 13 | 0.09774 | 23 | 0.16084 |
| 4 | 0.03226 | 14 | 0.10448 | 24 | 0.16667 |
| 5 | 0.04000 | 15 | 0.11111 | 25 | 0.17241 |
| 6 | 0.04762 | 16 | 0.11765 | 26 | 0.17808 |
| 7 | 0.05512 | 17 | 0.12409 | 27 | 0.18367 |
| 8 | 0.06250 | 18 | 0.13043 | 28 | 0.18919 |
| 9 | 0.06977 | 19 | 0.13669 | 29 | 0.19463 |
| 10 | 0.07692 | 20 | 0.14286 | 30* | 0.20000 |

_* Maxes at 30 points_

_In the case of a loss, the margin is inverted:  0.2 - value_

### Quality of Opponent (30%)
Opposing Team's Value * 0.3

_This requires a "look ahead" calculation, since the calculation of the current games rankings affects the other team's value, which affects the value of every team they played and so on.  To account for this, the calculations are run multiple times, where the previous values feed the next iteration, until all the computed values match the previous iteration._
