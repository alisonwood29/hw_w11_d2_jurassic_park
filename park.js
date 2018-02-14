const Park = function () {
  this.enclosure = [];
}

Park.prototype.dinosaurCount = function () {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaurOfType = function (type) {
  const dinosaursToKeep = [];
  for(const dinosaur of this.enclosure){
    if(dinosaur.type !== type) dinosaursToKeep.push(dinosaur);
  }
  this.enclosure = dinosaursToKeep;
}

Park.prototype.dinosaursWith2OrMoreOffspring = function () {
  const dinosaurs = [];
  for (const dinosaur of this.enclosure){
    if(dinosaur.offspring >= 2){
      dinosaurs.push(dinosaur);
    }
  }
  return dinosaurs;
}

Park.prototype.calculateDinosaurs = function (numberOfYears) {
  let dinosaurCalculation = 0;
  for(const dinosaur of this.enclosure){
    let dinosaurNumber = (1 + dinosaur.offspring) ** numberOfYears;
    dinosaurCalculation += dinosaurNumber;
  }
  return dinosaurCalculation;
}

module.exports = Park;
