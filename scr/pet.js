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




module.exports = Pet;