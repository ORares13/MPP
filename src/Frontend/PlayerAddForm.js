
import React, { useState } from 'react';


function PlayerAddForm({ playerService }) {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [ppg, setPpg] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlayer = { name, team, ppg: parseFloat(ppg) };
        playerService.addPlayer(newPlayer);
        setName('');
        setTeam('');
        setPpg('');

    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Player</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team" required />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} type="number" value={ppg} onChange={(e) => setPpg(e.target.value)} placeholder="PPG" required />
                </div>
                <button style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }} type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default PlayerAddForm;
