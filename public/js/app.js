

// bootstrap the demo
let app = new Vue({
  el: '#app',
  data() {
    return {
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
    }
  },
  async created() {
    let response = await fetch(`public/rankings/index.json`)
    this.files = await response.json();

    // default to last file
    this.file = this.files[this.files.length - 1];
    this.getRankings();
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
    },

    getRecord(weeks) {
      let wins = 0;
      let losses = 0;
      weeks.forEach(week => {
        if (week && week.win) {
          wins++;
        } else {
          losses++;
        }
      });

      return `${wins} - ${losses}`;
    }
  }
})