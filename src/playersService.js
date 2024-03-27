
import PlayerRepo from './playerRepo';

const playerRepo = new PlayerRepo();

const PlayerService = {
    getallPlayers: () => playerRepo.getAll(),
    getPlayerbyId: (id) => playerRepo.getById(id),
    addPlayer: (player) => playerRepo.add(player),
    updatePlayer: (id, playerUpdated) => playerRepo.update(id, playerUpdated),
    deletePlayer: (id) => playerRepo.delete(id)
};

export default PlayerService;
