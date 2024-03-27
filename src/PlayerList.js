import React, { useState } from 'react';
import UpdatePlayerForm from './UpdatePlayerForm';

function PlayerList({ playerService }) {
    const [players, setPlayers] = useState(playerService.getallPlayers());
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const handleUpdateClick = (playerId) => {
        setSelectedPlayerId(playerId);
    };

    const handleDeleteClick = (playerId) => {

        playerService.deletePlayer(playerId);
        setPlayers(playerService.getallPlayers());
    };

    const handleCancelUpdate = () => {
        setSelectedPlayerId(null);
    };

    const refreshPlayers = () => {
        setPlayers(playerService.getallPlayers());
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Player List</h1>
            {selectedPlayerId ? (
                <UpdatePlayerForm playerService={playerService} playerId={selectedPlayerId} onSave={handleCancelUpdate} refreshPlayers={refreshPlayers} />
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Name</th>
                            <th style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Team</th>
                            <th style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>PPG</th>
                            <th style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.id} style={{ borderBottom: '1px solid #ddd' }}>
                                <td style={{ padding: '10px' }}>{player.name}</td>
                                <td style={{ padding: '10px' }}>{player.team}</td>
                                <td style={{ padding: '10px' }}>{player.ppg}</td>
                                <td style={{ padding: '10px' }}>
                                    <button style={{ padding: '5px 10px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => handleUpdateClick(player.id)}>Update</button>

                                    <button style={{ marginLeft: '5px', padding: '5px 10px', borderRadius: '5px', background: 'red', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => handleDeleteClick(player.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default PlayerList;
