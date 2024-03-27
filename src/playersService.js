import PlayerRepo from './playerRepo';

class PlayerService {
    constructor() {
        this.playerRepo = new PlayerRepo();

    }

    getallPlayers() {
        return this.playerRepo.getAll();
    }

    getPlayerbyId(id) {
        return this.playerRepo.getById(id);
    }

    addPlayer(player) {
        player.id = this.playerRepo.getNextID();
        this.playerRepo.add(player);
    }

    updatePlayer(id, playerUpdated) {
        this.playerRepo.update(id, playerUpdated);
    }

    deletePlayer(id) {
        this.playerRepo.delete(id);
    }
}

export default PlayerService;
