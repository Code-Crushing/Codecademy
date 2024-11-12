const team = {
    _players: [
        {
        firstName: 'Mohammed',
        lastName: 'Salah',
        ag: 29
    },
        {
        firstName: 'Luis',
        lastName: 'Diaz',
        ag: 25
    },
        {
        firstName: 'Darwin',
        lastName: 'dodo',
        ag: 30
    }],
    _games: [
        {
            opponent: 'Man City',
            teamPoints: 2,
            opponentPoints: 0
        },
        {
            opponent: 'Man UTD',
            teamPoints: 3,
            opponentPoints: 1
        },
        {
            opponent: 'Arsenal',
            teamPoints: 2,
            opponentPoints: 0
        }
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer (newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName , 
            lastName: newLastName, 
            age: newAge
        };
        this._players.push(player);
    },
    addGame (newOpponent, newTeamPoints , newOpponentPoints) {
        const game = {
            opponent : newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints : newOpponentPoints
        };
        this._games.push(game);
    }
};
team.addPlayer('fahd', 'or', 230)
console.log(team.players)

team.addGame('Titans', 100, 98);
console.log(team.games);
