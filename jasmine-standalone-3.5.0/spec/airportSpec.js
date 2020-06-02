describe("airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    weather = jasmine.createSpyObj("weather",["isStormy"])
    weather.isStormy.and.returnValue(true);
  });

  it ("lands a plane at an airport", function() {
    expect(airport.land(plane)).toEqual('Landed');
  });

  it ("adds a plane to a hangar", function() {
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });

  it ("allows a plane to take off and confirm it left", function(){
    expect(plane.takeoff(airport)).toEqual('Left');
  });

  it ("prevents landing when airport is full", function(){
    var times = 20;
    for(var i=0; i < times; i++){
    plane = new Plane()
    airport.land(plane);}
    expect(function(){airport.land(plane);}).toThrow("Airport is full");
  });

  it ("can default airport capacity that can be overridden", function(){
    expect(airport.newcapacity(100)).toEqual(100);
  });

  it ("prevents takeoff when weather is stormy", function(){
    expect(function(){airport.takeoff(weather);}).toThrow("weather is stormy");
  });

});