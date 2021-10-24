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

});