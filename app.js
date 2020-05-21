let app = new Vue({
    el: "#app",
    data: {
        rules: {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        },
        playerChoice: '',
        houseChoice: '',
        score: 0,
        message: 'Fight!'
    },
    computed: {
        choices() {
            return Object.keys(this.rules)
        }
    },
    methods: {
        fight(choice) {
            this.playerChoice = choice;
            this.houseChoice = this.rules[this.choices[Math.floor(Math.random() * 3)]];

            if (this.rules[this.playerChoice] === this.houseChoice) {
                this.message = "You win!"
                this.score += 1;
            } else if (this.playerChoice == this.houseChoice) {
                this.message = "Tie!";
            } else {
                this.message = "You lost!";
            }
        },
        resetChoices() {
            this.playerChoice = '';
            this.houseChoice = '';
            this.message = "Fight!";
        }
    }
})