describe("airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
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

});
