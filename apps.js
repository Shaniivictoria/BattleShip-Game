// player one shoots player two 
//if player one shoots and touches player two, then he gets points
//if player one misses then player two is still in the game.
//player two shoots at player one
// if player two shoots and touches player one then player two get points
//if player two misses then he is still in the game
//players are still in the game. 
// if player one shoots player two then player two dies and player one wins
//if player two shoots player one then player one dies and player two wins. 

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