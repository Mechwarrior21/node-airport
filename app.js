var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-airport');

var Airport = require('./models/airport');
var Flight = require('./models/flight');
var Passanger = require('./models/passanger');
var Terminal = require('./models/terminal');

var flight1 = new Flight();
flight1.from = "CDG France";
flight1.to = "JFK New-York, USA";
flight1.airline = "American Airlines"
flight1.passangers = 0;
flight1.save(function(){
    console.log("Flight saved")
});

var flight2 = new Flight();
flight2.from = "Heathrow UK";
flight2.to = "JFK New-York, USA";
flight2.airline = "British Airways"
flight2.passangers = 0;
flight2.save(function(){
    console.log("Flight saved")
});

var terminal1 = new Terminal();
terminal1.name = "Terminal 1"
terminal1.flights = [flight1, flight2]
terminal1.capacity = 234324;
terminal1.save(function(){
    console.log("Terminal saved")
});

var airport1 = new Airport();
airport1.name = "JFK";
airport1.country = "USA"
airport1.terminals = [terminal1]
airport1.opened = "1990-03-05";
airport1.save(function(){
    console.log("Airport saved")
});