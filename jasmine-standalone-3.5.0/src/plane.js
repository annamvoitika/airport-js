class Plane {
  takeoff(airport){
    airport._hangar.pop();
    return "Left";
  }

  land(weather){
    if(weather.isStormy() == true){
      throw "weather is stormy";
    }
    else {
      "safe to land";
    }
  }
};
