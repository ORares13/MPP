import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayerAddForm from './PlayerAddForm';

// Mock playerService
const playerServiceMock = {
    addPlayer: jest.fn(),
};

describe('PlayerAddForm', () => {
    it('submits form with correct player data', () => {
        const { getByPlaceholderText, getByText } = render(
            <PlayerAddForm playerService={playerServiceMock} />
        );

        const nameInput = getByPlaceholderText('Name');
        const teamInput = getByPlaceholderText('Team');
        const ppgInput = getByPlaceholderText('PPG');
        const saveButton = getByText('Save Changes');

        fireEvent.change(nameInput, { target: { value: 'Kevin Durant' } });
        fireEvent.change(teamInput, { target: { value: 'Brooklyn Nets' } });
        fireEvent.change(ppgInput, { target: { value: '20' } });

        fireEvent.click(saveButton);

        expect(playerServiceMock.addPlayer).toHaveBeenCalledWith({
            name: 'Kevin Durant',
            team: 'Brooklyn Nets',
            ppg: 20,
        });
    });


});
