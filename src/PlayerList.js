import React from 'react';
import PlayerService from './playersService';

function PlayerList() {
    const players = PlayerService.getallPlayers();

    return (
        <div>
            <h1>Player List</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        {player.name} - {player.team} - PPG: {player.ppg}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;
