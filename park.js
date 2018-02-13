const Park = function () {
  this.enclosure = [];
}

Park.prototype.dinosaurCount = function () {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

// Park.prototype.removeDinosaurOfType = function (type) {
  // const dinosaursOfCertainType = [];
  // for(dinosaur of this.enclosure){
  //   if(type === dinosaur.type){
  //     const index = this.enclosure.indexOf(dinosaur);
  //     dinosaursOfCertainType.push(index);
  //   }
  // }
  // for(dinosaurIndex of dinosaursOfCertainType){
  //   this.encolsure.splice(dinosaurIndex, 1);
  // }
// }

Park.prototype.dinosaursWith2OrMoreOffspring = function () {
  const dinosaurs = [];
  for (dinosaur of this.enclosure){
    if(dinosaur.offspring >= 2){
      dinosaurs.push(dinosaur);
    }
  }
  return dinosaurs;
}

module.exports = Park;
