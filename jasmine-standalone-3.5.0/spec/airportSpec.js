describe("plane landing", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it ("lands a plane at an airport", function() {
    expect(airport.land(plane)).toEqual('Landed');
  });

  it ("allows a plane to take off and confirm it left", function(){
    expect(airport.takeoff(plane)).toEqual('Left');
  });

  it ("prevents landing when airport is full", function(){
    var times = 20;
    for(var i=0; i < times; i++){
    airport.land(plane);}
    expect(function(){airport.land(plane); }).toThrow("Airport is full");
  });

});