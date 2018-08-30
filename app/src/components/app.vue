<template>
    <div id="app">
        <ul>
            <li v-for="(file, index) in rankingFiles" :key="index">
                {{file}}
            </li>
        </ul>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>

        <h1 class="title">Season: {{this.currentSeason}} Week: {{ this.currentWeek }}</h1>

        <table class=table>
            <thead>
                <th></th>
                <th>Team</th>
                <th>Rating</th>
            </thead>
            <tbody>
                <tr v-for="(team, index) in rankings" :key="index" v-if="index<25 || showAll">
                    <td>{{ index+1 }}</td>
                    <td><img :src="`app/public/img/${kebabCase(team.name)}.png`" style="width: 15px;height: 15px;"/> {{ team.name }}</td>
                    <td>{{ team.rating }}</td>
                </tr>
                <a class="button" v-show="!showAll" @click="showAll = true">Show All</a>
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    </div>
</template>

<script>
import rankingFiles from 'public/rankings/index.json'

import HelloWorld from './helloworld.vue'

export default {
    name: 'app',
    components: {
        HelloWorld
    },
    data() {
        return {
            rankingFiles: rankingFiles,
            season: null,
            week: null,
            file: null,
            rankings: [],
            seasons: [],
            showAll: false,
        };
    },
    computed: {
    },
    created() {
        this.file = this.rankingFiles[this.rankingFiles.length-1];
        this.season = this.file.split('.')[0];
        this.week = this.file.split('.')[1];

        this.getSeasons();
        this.getRankings();
    },
    methods: {
        kebabCase(string) {
            return string.replace(/\s+/g, '-').toLowerCase();
        },
        getRankings() {
            fetch(`app/public/rankings/${this.season}.${this.week}.json`)
                .then(response => response.json())
                .then(data => {
                    this.rankings = data;
                });
        },
        getSeasons() {
            this.rankingFiles.forEach(file => {
                let season = this.file.split('.')[0];
                let week = this.file.split('.')[1];

                if (!this.seasons[season]) {
                    this.seasons[season] = [];
                }

                this.seasons[season].push(week);
            });

            console.log(this.seasons);
        }
    }
}
</script>
