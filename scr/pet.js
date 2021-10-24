function Pet(petName) {

 this.petName = petName; 
 this.age = 0;
 this.hunger = 0;
 this.fitness = 10;

}

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


module.exports = Pet;