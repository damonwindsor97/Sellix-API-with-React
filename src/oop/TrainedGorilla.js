import Gorilla from './Gorilla.js'

export default class TrainedGorilla extends Gorilla {
    constructor(name, weight){
        super(name, weight)
    }

    cartwheel() {
        return `${this.name} is doing a cartwheel!`
    }

    backflip() {
        return `${this.name} is doing a backflip`
    }

    circusAct() {
        return `${this.cartwheel()} ${this.backflip} ${super.poundChest()}`
    }
}