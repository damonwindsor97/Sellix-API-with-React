export default class Animal {
    constructor(name, weight){
        this.name = name
        this.weight = weight
    }
    eat(){
        return `${this.name} is eating`
    }
    sleep(){
        return `${this.name} is sleeping`
    }
    wake(){
        return `${this.name} is waking up`
    }
}