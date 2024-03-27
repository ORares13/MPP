import React from 'react';
import { render } from '@testing-library/react';
import SortedPlayerList from './SortedPlayerList';
import Players from './players';
import PlayerRepo from './playerRepo';
import PlayerService from './playersService';

describe('SortedPlayerList', () => {
    it('renders sorted player list by PPG', () => {
        const playerRepoMock = new PlayerRepo();
        const playerServiceMock = new PlayerService(playerRepoMock);
        const { getByText } = render(<SortedPlayerList playerService={playerServiceMock} />);

        expect(getByText('Luka Doncic')).toBeInTheDocument();
        expect(getByText('LeBron James')).toBeInTheDocument();
        expect(getByText('Jayson Tatum')).toBeInTheDocument();

        const playerRows = document.querySelectorAll('tbody > tr');
        expect(playerRows[0].textContent).toContain('Luka Doncic');
        expect(playerRows[1].textContent).toContain('LeBron James');
        expect(playerRows[2].textContent).toContain('Jayson Tatum');
    });
});
