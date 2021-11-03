const Pet = require('../scr/pet');


describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

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

  it('increments the hunger by 5', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it('has a initial fitness of 10', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });

  it('decrease the fitness by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it('feed should decrease hunger by 3', () => {
    const pet = new Pet('Fido');

    pet.hunger = 5;
    pet.feed();

    expect(pet.hunger).toEqual(2);
  });

  it('decrease hunger to minimun of 0', () => {
    const pet = new Pet('Fido');

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  it('checkup fitness 3 or less', () => {
    const pet = new Pet('Fido');

    pet.fitness = 3;
    pet.checkUp();

    expect(pet.status).toEqual('I need a walk');
  });

  it('checkup fitness 3 or less', () => {
    const pet = new Pet('Fido');

    pet.hunger = 5;
    pet.checkUp();

    expect(pet.status).toEqual('I am hungry');
  });

  it('checkup fitness is 3 or less and hunger is 5 or more', () => {
    const pet = new Pet('Fido');

    pet.fitness = 3;
    pet.hunger = 5;
    pet.checkUp();

    expect(pet.status).toEqual('I am hungry AND I need a walk');
  });

  it('checkup fitness is more than 3 and hunger less than 5', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.hunger = 4;
    pet.checkUp();

    expect(pet.status).toEqual('I feel great!');
  });

  it('check if pet is alive', () => {
    const pet = new Pet('Fido');

    pet.age = 29;
    pet.hunger = 9;
    pet.fitness = 1;

    expect(pet.isAlive).toEqual(true);
  });

});

  //Throwing Errors

  describe('feed', () => {

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
  });


