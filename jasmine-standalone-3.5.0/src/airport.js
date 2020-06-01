class Airport {
  constructor(){
    this._hangar = []
  }

  planes() {
    return this._hangar;
  }

  clearForLanding(plane) {
    this._hangar.push(plane);
  }

  land(plane){
    this._hangar.push(plane)
    if (this._hangar.length < 20) {
      return "Landed";}
    else {
      throw "Airport is full";
    }
  }

  takeoff(plane){
    return "Left";
  }
}
