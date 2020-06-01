class Airport {
  constructor(){
    this._hangar = []
  }

  planes() {
    return this._hangar;
  }

  add(plane) {
    this._hangar.push(plane);
  }

  land(plane){
    if (this._hangar.length < 20) {
      this.add(plane)
      return "Landed";}
    else {
      throw "Airport is full";
    }
  }
};
