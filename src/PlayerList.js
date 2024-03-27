import React, { useState } from 'react';
import PlayerService from './playersService';
import UpdatePlayerForm from './UpdatePlayerForm';

function PlayerList() {
    const [players, setPlayers] = useState(PlayerService.getallPlayers());
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const handleUpdateClick = (playerId) => {
        setSelectedPlayerId(playerId);
    };

    const handleCancelUpdate = () => {
        setSelectedPlayerId(null);
    };

    const refreshPlayers = () => {
        setPlayers(PlayerService.getallPlayers());
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Player List</h1>
            {selectedPlayerId ? (
                <UpdatePlayerForm playerId={selectedPlayerId} onSave={handleCancelUpdate} refreshPlayers={refreshPlayers} />
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Team</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>PPG</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '10px' }}>{player.name}</td>
                                <td style={{ padding: '10px' }}>{player.team}</td>
                                <td style={{ padding: '10px' }}>{player.ppg}</td>
                                <td style={{ padding: '10px' }}><button style={{ padding: '5px 10px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => handleUpdateClick(player.id)}>Update</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default PlayerList;
