import Gorilla from './Gorilla.js'
import TrainedGorilla from './TrainedGorilla.js'

const benGorilla = new Gorilla('Ben', '200kg')
const kingKongGorilla = new Gorilla('King Kong', '20,000kg')
const harambeGorilla = new TrainedGorilla('Harambe', '400kg') 

console.log(benGorilla.eat());
console.log(benGorilla.sleep());
console.log(benGorilla.dailyRoutine());
console.log(kingKongGorilla.sleep());

console.log(harambeGorilla.cartwheel());