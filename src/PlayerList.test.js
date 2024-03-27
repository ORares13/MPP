import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayerList from './PlayerList';
import Players from './players';
import PlayerService from './playersService';
import PlayerRepo from './playerRepo';

describe('PlayerList', () => {
    it('renders player list with initial player data', () => {
        const playerServiceMock = new PlayerService();
        const { getByText } = render(<PlayerList playerService={playerServiceMock} />);

        expect(getByText('LeBron James')).toBeInTheDocument();
        expect(getByText('Luka Doncic')).toBeInTheDocument();
        expect(getByText('Jayson Tatum')).toBeInTheDocument();
    });



    it('handles clicking the "Delete" button for a player', () => {
        const playerServiceMock = new PlayerService();
        const { getAllByText, queryByText } = render(<PlayerList playerService={playerServiceMock} />);

        // Use getAllByText to get an array of elements with the text "Delete"
        const deleteButtons = getAllByText('Delete');

        // Assuming you want to delete the first player, click the first delete button
        fireEvent.click(deleteButtons[0]);

        expect(queryByText('LeBron James')).not.toBeInTheDocument();
        expect(queryByText('Luka Doncic')).toBeInTheDocument();
    });
});
