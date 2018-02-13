const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur');

describe('Park', function () {

  let park;

  beforeEach(function () {
    park = new Park();
  })

  it('should have an enclosure', function () {
    assert.deepStrictEqual(park.enclosure, []);
  })

  it('should have an empty enclosure to begin', function () {
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 0);
  })

})
