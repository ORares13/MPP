import PlayerRepo from './playerRepo';

describe('PlayerRepo', () => {
    let playerRepo;

    beforeEach(() => {
        playerRepo = new PlayerRepo();
    });

    test('getAll should return all players', () => {
        const players = playerRepo.getAll();
        expect(players.length).toBe(3);
    });

    test('getById should return a player by id', () => {
        const player = playerRepo.getById(1);
        expect(player).toEqual({ id: 1, name: 'LeBron James', team: 'LA Lakers', ppg: 32.4 });
    });

    test('add should add a new player', () => {
        const newPlayer = { id: 4, name: 'Kevin Durant', team: 'Brooklyn Nets', ppg: 29.5 };
        playerRepo.add(newPlayer);
        expect(playerRepo.getAll().length).toBe(4);
    });

    test('update should update a player', () => {
        const updatedPlayer = { name: 'Luka Doncic', team: 'Dallas', ppg: 35.0 };
        playerRepo.update(2, updatedPlayer);
        const player = playerRepo.getById(2);
        expect(player).toEqual({ id: 2, name: 'Luka Doncic', team: 'Dallas', ppg: 35.0 });
    });

    test('delete should delete a player', () => {
        playerRepo.delete(3);
        expect(playerRepo.getAll().length).toBe(2);
    });
});
