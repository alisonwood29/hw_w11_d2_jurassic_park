const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function () {

  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('T-Rex', 3);
  });

  it('should have a type', function () {
    assert.strictEqual(dinosaur.type, 'T-Rex');
  });

  it('should have a number of offspring', function () {
    assert.strictEqual(dinosaur.offspring, 3);
  })

})
