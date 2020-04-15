import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recordGame } from '../actions/gameActions';

export class Home extends Component {

    handleSubmit = (e) => {

    }

    render() {
        console.log(this.props.games);
        const {games} = this.props;
        return (
            <div className="home">
                <h1>F O N K Y • P O N G</h1>
                <table width="100%">
                    <thead>
                        <tr>
                            <th>player name</th>
                            <th>games played</th>
                            <th>games won</th>
                            <th>games lost</th>
                            <th>AVG.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            games.map(game => {
                                return (
                                    <tr key={game.id}>
                                        <td>{game.player}</td>
                                        <td>{game.games_played}</td>
                                        <td>{game.games_won}</td>
                                        <td>{game.games_lost}</td>
                                        <td>{ (Number(game.games_won) / Number(game.games_played)).toFixed(3) }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        recordGame: (game) => dispatch(recordGame(game))
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.game.games
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
