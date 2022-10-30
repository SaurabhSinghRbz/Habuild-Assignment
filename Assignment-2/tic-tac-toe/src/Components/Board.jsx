import React from 'react'
import Square from './Square'

function Board({ playerX, playerO, gameStarted }) {
    let player1 = playerX, player2 = playerO;
    if (player1 === "") {
        player1 = "X";
    }
    if (player2 === "") {
        player2 = "O";
    }

    return (
        <div className='board playersBox' style={{ display: gameStarted ? "" : "none" }}>

            <p>Score</p>
            <div className='scoreBoard'>
                <div className='score'>
                    <p>Player X : {player1}</p>
                    <p>Score</p>
                </div>
                <div className='score'>
                    <p>Player O : {player2}</p>
                    <p>Score</p>
                </div>
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square />
                <Square />
                <Square />
            </div>
        </div>

    )
}

export default Board