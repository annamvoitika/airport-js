class Airport {
  constructor(capacity){
    this._hangar = []
    var capacity = capacity;
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

  newcapacity(number){
    let capacity = number
    return capacity;
  }

  takeoff(weather){
    if (weather.isStormy() == true) {
      throw "weather is stormy";
    }
    else {
      return "safe to fly";
    }
  }
};
