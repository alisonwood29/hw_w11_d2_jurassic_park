const Park = function () {
  this.enclosure = [];
}

Park.prototype.dinosaurCount = function () {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

module.exports = Park;
