const initState = {
    games: [
        {id: '1', player: 'cale', games_played: 10, games_won: 8, games_lost: 1},
        {id: '2', player: 'dimi', games_played: 8, games_won: 3, games_lost: 5},
        {id: '3', player: 'rob', games_played: 4, games_won: 1, games_lost: 3}
    ]
};

const gameReducer = (state = initState, action) => {
    return state;
}

export default gameReducer;