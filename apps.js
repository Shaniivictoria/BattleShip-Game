// player one shoots player two 
//if player one shoots and touches player two, then he gets points
//if player one misses then player two is still in the game.
//player two shoots at player one
// if player two shoots and touches player one then player two get points
//if player two misses then he is still in the game
//players are still in the game. 
// if player one shoots player two then player two dies and player one wins
//if player two shoots player one then player one dies and player two wins. 

alert('Save Earth from the bad Alien Ships')


//player One
const heroShip ={
hull: -20,
firepower: -5,
accuracy: .7,
}

//player 2 the 6 space ships

let badAlien1 ={
    hull: 4,
    firepower: 3,
    accuracy: .6
}

let badAlien2 ={
    hull: 4,
    firepower: 3,
    accuracy: .6
}

let badAlien3 ={
    hull: 4,
    firepower: 3,
    accuracy: .6
}

let badAlien4 ={
    hull: 4,
    firepower: 3,
    accuracy: .6
}

let badAlien5 ={
    hull: 4,
    firepower: 3,
    accuracy: .6
}

let badAlien6 ={
    hull: 4,
    firepower: 3,
    accuracy: .6
}


const badAlien= [badAlien1, badAlien2, badAlien3, badAlien4, badAlien5, badAlien6]
console.log(badAlien)

let a = badAlien.shift()
console.log(a)
console.log(badAlien)
let shoot = spaceship.firepower
console.log(shoot)

let hull = badAlien[0].hull
console.log(hull)

console.log(hull -= shoot)

if(badAlien[0].hull < 0){
    badAlien.shift()

badAlien.shift()
console.log(badAlien[0].hull)
}
console.log(badAlien)



class Alien{
    constructor (numner){
        this.alienNumber = number,
        this.hull = random(3, 6),
        this.firepower = random(2,4),
        this.accuracy = randomDecimal()
    }
}





