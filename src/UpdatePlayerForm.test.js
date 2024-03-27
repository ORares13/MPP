import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UpdatePlayerForm from './UpdatePlayerForm';
import PlayerService from './playersService';
import PlayerRepo from './playerRepo'; // Import PlayerRepo
import Players from './players'; // Import Players class

const playerServiceMock = new PlayerService(); // Use actual PlayerService instance

describe('UpdatePlayerForm', () => {
    it('fetches player data and updates player on form submit', () => {
        const playerRepo = new PlayerRepo(); // Create an instance of PlayerRepo
        playerServiceMock.playerRepo = playerRepo; // Assign PlayerRepo instance to playerServiceMock

        const onSaveMock = jest.fn();
        const refreshPlayersMock = jest.fn();
        const playerId = 1; // Example integer player ID

        const { getByPlaceholderText, getByText } = render(
            <UpdatePlayerForm
                playerService={playerServiceMock}
                playerId={playerId}
                onSave={onSaveMock}
                refreshPlayers={refreshPlayersMock}
            />
        );

        const nameInput = getByPlaceholderText('Name');
        const teamInput = getByPlaceholderText('Team');
        const ppgInput = getByPlaceholderText('PPG');
        const saveButton = getByText('Save Changes');

        expect(nameInput.value).toBe('LeBron James');
        expect(teamInput.value).toBe('LA Lakers');
        expect(ppgInput.value).toBe('32.4');

        fireEvent.change(nameInput, { target: { value: 'Updated Player' } });
        fireEvent.change(teamInput, { target: { value: 'Updated Team' } });
        fireEvent.change(ppgInput, { target: { value: '20' } });

        fireEvent.click(saveButton);


        expect(playerServiceMock.playerRepo.players[0].name).toBe('Updated Player');
        expect(playerServiceMock.playerRepo.players[0].team).toBe('Updated Team');
        expect(playerServiceMock.playerRepo.players[0].ppg).toBe(20);

        expect(onSaveMock).toHaveBeenCalled();
        expect(refreshPlayersMock).toHaveBeenCalled();
    });
});
