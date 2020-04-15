export const recordGame = (game) => {
    return (dispatch, getState) => {
        dispatch({ type: 'RECORD_GAME', game });
    }
}