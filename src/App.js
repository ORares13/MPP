import React, { useState } from 'react';
import PlayerList from './PlayerList';
import PlayerAddForm from './PlayerAddForm';
import ViewPlayerDetails from './ViewPlayerDetails';
import SortedPlayerList from './SortedPlayerList';


function App({ playerService }) {

  const [currentPage, setCurrentPage] = useState('PlayerList');

  const renderPage = () => {
    switch (currentPage) {
      case 'AddPlayerForm':
        return <PlayerAddForm playerService={playerService} />;
      case 'SortedPlayersList':
        return <SortedPlayerList playerService={playerService} />;
      case 'ViewPlayerDetails':
        return <ViewPlayerDetails playerService={playerService} />;
      default:
        return <PlayerList playerService={playerService} />;
    }
  };


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Player Management Application</h1>
      <nav style={{ marginBottom: '20px' }}>
        <button style={{ marginRight: '10px' }} onClick={() => setCurrentPage('PlayerList')}>View Players</button>
        <button style={{ marginRight: '10px' }} onClick={() => setCurrentPage('AddPlayerForm')}>Add Player</button>
        <button style={{ marginRight: '10px' }} onClick={() => setCurrentPage('SortedPlayersList')}>Sort Players</button>
      </nav>
      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px' }}>
        {renderPage()}
      </div>
    </div>
  );
}


export default App;
