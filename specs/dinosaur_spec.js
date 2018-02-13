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

})
