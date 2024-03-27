import React, { useState, useEffect } from 'react';
import PlayerService from './playersService';
import PlayerList from './PlayerList';

function EditPlayerForm({ playerId, onSave }) {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [ppg, setPpg] = useState('');

    useEffect(() => {
        const fetchedPlayer = PlayerService.getPlayerbyId(parseInt(playerId));
        setName(fetchedPlayer.name);
        setTeam(fetchedPlayer.team);
        setPpg(fetchedPlayer.ppg.toString());
    }, [playerId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPlayer = { name, team, ppg: parseFloat(ppg) };
        PlayerService.updatePlayer(parseInt(playerId), updatedPlayer);
        onSave();
    };

    return (
        <div>
            <h1>Edit Player</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team" required />
                <input type="number" value={ppg} onChange={(e) => setPpg(e.target.value)} placeholder="PPG" required />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditPlayerForm;
