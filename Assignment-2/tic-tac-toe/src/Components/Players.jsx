import React from 'react'

function Players() {
    return (
        <div className='playersBox'>
            <p className='playerName'>Player X Name</p>
            <input type='text' placeholder='Enter Player X Name' />
            <p className='playerName'>Player O Name</p>
            <input type='text' placeholder='Enter Player O Name' />
            <button className='startBtn'>Start</button>
        </div>
    )
}

export default Players