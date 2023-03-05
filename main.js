class spaceship{
    constructor(hull,firepower,accuracy){
        this.hull= hull;
        this.firepower= firepower;
        this.accuracy = accuracy;
    }

    attack(alienship){
       console.log(this.hull, 'You been hit');
       return this;
    }

    attackback(spaceship){
        console.log(this.hull, 'You been hit, Take cover');
        return this
    }


}

    function randomGivenInterval(min, max){
        return Math.floor(Math.random()* (max-min + 1) + min)
    }

const spaceship  = new spaceship(20, 5, .7);
const alienship1 = new alienship(4,3,.7);
const alienship2 = new alienship(4,3,.7);
const alienship3 = new alienship(4,3,.7);
const alienship4 = new alienship(4,3,.7);
const alienship5 = new alienship(4,3,.7);
const alienship6 = new alienship(4,3,.7);

const alienship = [alienship1,alienship2,alienship3,alienship4,alienship5,alienship6];

