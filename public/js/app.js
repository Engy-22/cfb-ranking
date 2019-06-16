
let app = new Vue({
    el: '#app',
    data() {
        return {
            teams: [],
            files: [],
            file: '',
            rankings: {},
            selectedTeam: false,
            showAll: false
        };
    },
    computed: {
        season() {
            return this.file.split('.')[0];
        },
        week() {
            return this.file.split('.')[1];
        },
    },
    async created() {
        let response = await fetch(`public/rankings/index.json`)
        let indexFile = await response.json();
        this.files = indexFile.files;
        this.teams = indexFile.teams;

        this.initFile();
        await this.getRankings();
    },
    methods: {
        kebabCase(string) {
            return string.replace(/\s+/g, '-').toLowerCase();
        },
        formatFilename(file) {
            return `${file.split('.')[0]} Week ${file.split('.')[1]}`;
        },
        initFile() {
            // get hash if exists or default to last file
            this.file = window.location.hash ? window.location.hash.substr(1) + '.json' : this.files[this.files.length - 1];
        },
        async getRankings() {
            let response = await fetch(`public/rankings/${this.file}`);
            this.rankings = await response.json();

            // add name and mascot to object
            this.rankings = this.rankings.map(ranking => {
                return {
                    ...ranking,
                    name: this.teams[ranking.id].name,
                    mascot: this.teams[ranking.id].mascot,
                }
            });

            // select the first team
            this.selectTeam(this.rankings[0]);
        },
        getTeam(id) {
            let team = this.rankings.find(team => team.id == id);
            return team || {name: 'Non FBS'};
        },
        selectTeam(team) {
            if (team.id) {
                this.selectedTeam = team;
            }
        },
        getRecord(weeks) {
            let wins = weeks.reduce((wins, week) => week && week.w ? ++wins : wins, 0);
            let losses = weeks.reduce((losses, week) => week && !week.w ? ++losses : losses, 0);

            return `${wins} - ${losses}`;
        }
    }
})