
import React, { useState } from 'react';
import PlayerService from './playersService';

function PlayerAddForm() {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [ppg, setPpg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlayer = { name, team, ppg: parseFloat(ppg) };
        PlayerService.addPlayer(newPlayer);
        setName('');
        setTeam('');
        setPpg('');
    };

    return (
        <div>
            <h1>Add Player</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team" required />
                <input type="number" value={ppg} onChange={(e) => setPpg(e.target.value)} placeholder="PPG" required />
                <button type="submit">Add Player</button>
            </form>
        </div>
    );
}

export default PlayerAddForm;
