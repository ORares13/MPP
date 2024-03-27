import React, { useState, useEffect } from 'react';
import PlayerService from './playersService';

function SortedPlayerList() {
    const [sortedPlayers, setSortedPlayers] = useState([]);

    useEffect(() => {
        const sorted = PlayerService.getallPlayers().sort((a, b) => b.ppg - a.ppg);
        setSortedPlayers(sorted);
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sorted Player List by PPG</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Team</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>PPG</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayers.map(player => (
                        <tr key={player.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px' }}>{player.name}</td>
                            <td style={{ padding: '10px' }}>{player.team}</td>
                            <td style={{ padding: '10px' }}>{player.ppg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SortedPlayerList;
