class Traveler {
    constructor(nome, food = 1) {
        this._nome = nome
        this._food = food
        this._isHealthy = true
    }
    get isHealthy() {
        return this._isHealthy
    }
    set isHealthy(live) {
        this._isHealthy = live
    }
    get food() {
        return this._food
    }
    set food(f) {
        this._food = f
    }

    hunt() {
        this._food += 2
    }

    eat() {
        if (this._food > 0) {
            this._food -= 1
            this._isHealthy = true
        } else {
            this._isHealthy = false
        }

    }
}


class Wagon {
    constructor(capacity, passengers = []) {
        this._capacity = capacity
        this._passengers = passengers
    }
    getAvailableSeatCount() {
        let capacidade = this._capacity
        let pessoas = this._passengers.length
        let disponivel = capacidade - pessoas
        if (disponivel >= 0) {
            return disponivel
        } else {
            return 0
        }

    }

    join(name) {
        if(this.getAvailableSeatCount() == 0){
            return "Nao temos espaco"
        }else{
            this._passengers.push(name)
        }
        
    }

    shouldQuarantine() {
        let passagueiros = this._passengers
        let quarentena = false
        for (let i = 0; i < passagueiros.length; i++) {
            if (passagueiros[i].isHealthy == false) {
                quarentena = true
            }
        }
        return quarentena
    }
    totalFood(){
        let store = 0
        let passagueiros = this._passengers
        for(let i = 0 ; i< passagueiros.length;i++){
            store +=passagueiros[i].food
        }
        return store
    }

}
let wagon = new Wagon(2);

let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');