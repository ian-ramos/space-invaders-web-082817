let id = 0;
const all = [];

class Spaceship {
  constructor(
    name,
    crew,
    phasers,
    shields,
    cloaked = false,
    warpDrive = "disengaged",
    //don't actually need docked b/c we set the property below based on crew
    docked,
    phasersCharge = "uncharged"
  ) {
    this.id = ++id;
    all.push(this);
    this.name = name;
    this.crew = crew; //an array of crewmembers
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.crew.length === 0 ? (this.docked = true) : (this.docked = false); //if the array is empty
    this.phasersCharge = phasersCharge;
    this.crew.forEach(member => (member.currentShip = this));
  }
}
