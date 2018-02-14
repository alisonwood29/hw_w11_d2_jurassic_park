const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur');

describe('Park', function () {

  let park;
  let dinosaur;
  let tyrannosaurus;
  let dilophosaurus;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park();
    dinosaur = new Dinosaur('Stegasaurus', 2);
    tyrannosaurus = new Dinosaur('tyrannosaurus', 3);
    dilophosaurus = new Dinosaur('dilophosaurus', 2);
    dinosaur1 = new Dinosaur('T-Rex', 2);
    dinosaur2 = new Dinosaur('T-Rex', 3);
    dinosaur3 = new Dinosaur('Velociraptor', 1);
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
    assert.deepStrictEqual(park.enclosure, [dinosaur]);
  } )

  it('should be able to remove all dinosaur of certain type', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaurOfType('T-Rex');
    assert.deepStrictEqual(park.enclosure, [dinosaur3]);
  })

  it('should be able to get dinosaurs with offspring 2 or more', function () {
    // const dinosaur1 = new Dinosaur('T-Rex', 2);
    // const dinosaur2 = new Dinosaur('T-Rex', 3);
    // const dinosaur3 = new Dinosaur('Velociraptor', 1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaursWith2OrMoreOffspring();
    assert(actual, [dinosaur1, dinosaur2])
  })

  describe('Dinosaur Number Predictions', function () {

    it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 16);
  });

  it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 25);
  });
  })


})
