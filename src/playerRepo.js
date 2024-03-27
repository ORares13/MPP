import Players from './players';



class PlayerRepo {
    constructor() {
        this.players = [];
        this.players.push(new Players(1, 'LeBron James', 'LA Lakers', 32.4));
        this.players.push(new Players(2, 'Luka Doncic', 'Dallas', 35.4));
        this.players.push(new Players(3, 'Jayson Tatum', 'Celtics', 30.3));
        this.nextID = 4;
    }

    getAll() {
        return this.players;
    }

    getById(id) {
        return this.players.find(car => car.id === id);
    }

    add(player) {
        this.players.push(player);
        this.nextID++;
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

    getNextID() {
        return this.nextID;
    }


}

export default PlayerRepo;
