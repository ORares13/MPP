import Players from './players';

const initialPlayers = [
    new Players(1, 'LeBron James', 'LA Lakers', 32.4),
    new Players(2, 'Luka Doncic', 'Dallas', 35.4),
    new Players(3, 'Jayson Tatum', 'Celtics', 30.3),

];

class PlayerRepo {
    constructor() {
        this.players = initialPlayers;
    }

    getAll() {
        return this.players;
    }

    getById(id) {
        return this.players.find(car => car.id === id);
    }

    add(player) {
        this.players.push(player);
    }

    update(id, updatedPlayer) {
        const index = this.players.findIndex(player => player.id === id);
        if (index !== -1) {
            this.players[index] = { ...this.players[index], ...updatedPlayer };
        }
    }

    delete(id) {
        this.players = this.players.filter(player => player.id !== id);
    }
}

export default PlayerRepo;
