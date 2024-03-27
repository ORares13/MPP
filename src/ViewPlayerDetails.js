import React from 'react';

function ViewPlayerDetails({ player }) {
    return (
        <div>
            <h1>Player Details</h1>
            <p>Name: {player.name}</p>
            <p>Team: {player.team}</p>
            <p>PPG: {player.ppg}</p>
        </div>
    );
}

export default ViewPlayerDetails;
