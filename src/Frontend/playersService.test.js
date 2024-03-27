import PlayerService from './playersService';

describe('PlayerService', () => {
    let playerService;

    beforeEach(() => {
        playerService = new PlayerService();
    });
    test('getAllPlayers should return all players', () => {
        const players = playerService.getallPlayers();
        expect(players.length).toBe(3);
    });

    test('getPlayerById should return a player by id', () => {
        const player = playerService.getPlayerbyId(1);
        expect(player).toEqual({ id: 1, name: 'LeBron James', team: 'LA Lakers', ppg: 32.4 });
    });

    test('addPlayer should add a new player', () => {
        const newPlayer = { id: 4, name: 'Durant', team: 'Brooklyn Nets', ppg: 29.5 };
        playerService.addPlayer(newPlayer);
        const players = playerService.getallPlayers();
        expect(players.length).toBe(4);
        expect(players.find(player => player.id === 4)).toEqual(newPlayer);
    });

    test('updatePlayer should update a player', () => {
        const updatedPlayerData = { name: 'Luka Doncic', team: 'Dallas', ppg: 35.0 };
        playerService.updatePlayer(2, updatedPlayerData);
        const updatedPlayer = playerService.getPlayerbyId(2);
        expect(updatedPlayer).toEqual({ id: 2, name: 'Luka Doncic', team: 'Dallas', ppg: 35.0 });
    });

    test('deletePlayer should delete a player', () => {



        playerService.deletePlayer(3);
        const players_after = playerService.getallPlayers();
        expect(players_after.length).toBe(2);
        expect(players_after.find(player => player.id === 3)).toBeUndefined();
    });
});
