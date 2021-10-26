function Pet(petName) {

 this.petName = petName; 
 this.age = 0;
 this.hunger = 0;
 this.fitness = 10;

}
// Didn't understand the getter function and how to use and test it
/**Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
   
}**/

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}

Pet.prototype.walk = function() {
    const MAXIMUM_FITNESS = 10;
    if ((this.fitness + 4) <= 10 ) {
        this.fitness += 4;
      } else {
        this.fitness = MAXIMUM_FITNESS;
      }
   
}


Pet.prototype.feed = function () {
    const MINIMUN_HUNGER = 0;
    if ((this.hunger - 3) > 0) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUN_HUNGER;
    }

 

}

Pet.prototype.checkUp = function () {
    const amGood = 'I feel great!';
    const walkMe = 'I need a walk';
    const feedMe = 'I am hungry';
    const amDying = 'I am hungry AND I need a walk';

    if (this.fitness <= 3 && this.hunger >= 5) {
        this.status = amDying;
    } else if (this.fitness <= 3) {
        this.status = walkMe;
    } else if (this.hunger >= 5) {
        this.status = feedMe;
    } else {
        this.status = amGood;
    }


}

//need to try this with a getter method
Pet.prototype.isAlive = function () {
    const dying = false;
    const thriving = true;

    if (this.fitness <= 0) {
        this.health = dying;
    } else if (this.hunger >= 10) {
        this.health = dying;
    } else if (this.age >= 30) {
        this.health = dying;
    } else {
        this.health = thriving;
    }
    
}





module.exports = Pet;