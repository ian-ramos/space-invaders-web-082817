let crewMemberId = 0;
const store = { crewMembers: [], spaceships: [] };

class CrewMember {
  constructor(position, currentShip) {
    this.id = ++crewMemberId;
    this.position = position;
    store.crewMembers.push(this);
    currentShip
      ? (this.currentShip = currentShip)
      : (this.currentShip = "Looking for a Rig");
  }

  engageWarpDrive() {
    //in other words, if they have a ship
    if (this.currentShip !== "Looking for a Rig") {
      return this.position === "Pilot"
        ? (this.currentShip.warpDrive = "engaged!")
        : (this.currentShip.warpDrive = "disengaged");
    } else {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.currentShip !== "Looking for a Rig") {
      return this.position === "Defender"
        ? (this.currentShip.cloaked = true)
        : (this.currentShip.phasersCharge = false);
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (this.currentShip !== "Looking for a Rig") {
      return this.position === "Gunner"
        ? (this.currentShip.phasersCharge = "charged!")
        : (this.currentShip.phasersCharge = "uncharged");
    } else {
      return "had no effect";
    }
  }
}
