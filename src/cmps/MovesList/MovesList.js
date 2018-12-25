import React from 'react'


const MovesList = ({ moves }) => {
    return (
        <div>
            <h2>Your Moves:</h2>
            {   
                moves.map(move =>
                    <div key={move._id}>
                        <h4>{move.amount}</h4>
                    </div>
                )
            }
        </div>
    )
}

export default MovesList