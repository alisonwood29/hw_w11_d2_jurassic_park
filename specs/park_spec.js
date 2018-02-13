const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur');

describe('Park', function () {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park();
    dinosaur = new Dinosaur('Stegasaurus', 2)
  })

  it('should have an enclosure', function () {
    assert.deepStrictEqual(park.enclosure, []);
  })

  it('should have an empty enclosure to begin', function () {
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 0);
  })

  it('should be able to add a dinosaur', function () {
    park.addDinosaur(dinosaur);
    assert.deepStrictEqual(park.enclosure, [dinosaur])
  } )

})
