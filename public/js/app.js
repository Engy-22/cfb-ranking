
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

        // default to last file
        this.file = this.files[this.files.length - 1];
        await this.getRankings();
    },
    methods: {
        kebabCase(string) {
            return string.replace(/\s+/g, '-').toLowerCase();
        },
        formatFilename(file) {
            return `${file.split('.')[0]} Week ${file.split('.')[1]}`;
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
            let wins = 0;
            let losses = 0;
            weeks && weeks.forEach(week => {
            if (week && week.w) {
                wins++;
            } else {
                losses++;
            }
            });

            return `${wins} - ${losses}`;
        }
    }
})