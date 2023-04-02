import Animal from './Animal.js'

export default class Gorilla extends Animal {
    constructor(name, weight){
        super(name, weight)
    }
    climbTree() {
        return `${this.name} is climbing a tree`
    }
    poundChest(){
        return `${this.name} is pounding his chest`
    }
    dailyRoutine(){
        return `${super.wake()} ${this.poundChest()} ${super.eat()} ${this.climbTree()}`
    }
}