import React, { useState } from 'react';
import PlayerList from './PlayerList';
import PlayerAddForm from './PlayerAddForm';
import EditPlayerForm from './UpdatePlayerForm';
import ViewPlayerDetails from './ViewPlayerDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('PlayerList');

  const renderPage = () => {
    switch (currentPage) {
      case 'AddPlayerForm':
        return <PlayerAddForm />;
      case 'UpdatePlayerForm':
        return <EditPlayerForm />;
      case 'ViewPlayerDetails':
        return <ViewPlayerDetails />;
      default:
        return <PlayerList />;
    }
  };

  return (
    <div>
      <h1>Player Management Application</h1>
      <nav>
        <button onClick={() => setCurrentPage('PlayerList')}>Player List</button>
        <button onClick={() => setCurrentPage('AddPlayerForm')}>Add Player</button>
        <button onClick={() => setCurrentPage('UpdatePlayerForm')}>Update Player</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
