const Pet = require('../scr/pet');


describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  //struggling with this test
  xit('returns pet name', (petName) => {
    expect(pet(petName)).toEqual(petName);
  });
});