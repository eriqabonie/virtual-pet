function Pet(petName) {

 this.petName = petName; 
 this.age = 0;

}

Pet.prototype.growUp = function() {
    this.age += 1;
}


module.exports = Pet;