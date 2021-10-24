const Pet = require('../scr/pet');


describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  //struggling with this test
  //you call the function here in the test in order to match the outcome with the expected 
  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.petName).toEqual('Fido');
  });

  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });

  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it('has a initial hunger of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.hunger).toEqual(0);
  });

    // need to figure out how to save and call the inital so I can decrease by subtracting when the grow up fuction is called
  it('increments the hunger by 5', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it('has a initial fitness of 10', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });

     // need to figure out how to save and call the inital so I can decrease by subtracting when the grow up fuction is called
  it('decrease the fitness by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

});