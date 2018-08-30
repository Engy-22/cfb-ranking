<template>
    <div id="app">
        <ul>
            <li v-for="(file, index) in rankingFiles" :key="index">
                {{file}}
            </li>
        </ul>

        <h1 class="title">Season: {{this.currentSeason}} Week: {{ this.currentWeek }}</h1>

        <table class=table>
            <thead>
                <th></th>
                <th>Team</th>
                <th>Rating</th>
            </thead>
            <tbody>
                <tr v-for="(team, index) in rankings" :key="index">
                    <td>{{ index+1 }}</td>
                    <td><img :src="`/app/public/img/${kebabCase(team.name)}.png`" style="width: 15px;height: 15px;"/> {{ team.name }}</td>
                    <td>{{ team.rating }}</td>
                </tr>
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
            rankings: [],
        };
    },
    computed: {
        currentRankingFile() {
            return this.rankingFiles[this.rankingFiles.length-1];
        },
        currentSeason() {
            return this.currentRankingFile.split('.')[0];
        },
        currentWeek() {
            return this.currentRankingFile.split('.')[1];
        }
    },
    created() {
        fetch(`/app/public/rankings/${this.currentRankingFile}`)
            .then(response => response.json())
            .then(data => {
                this.rankings = data;
            });
    },
    methods: {
        kebabCase(string) {
            return string.replace(/\s+/g, '-').toLowerCase();
        }
    }
}
</script>
