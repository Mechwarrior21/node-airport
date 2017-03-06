var mongoose = require('mongoose');

var Passanger = require('./passanger');

var flightSchema = new mongoose.Schema({
    from: String,
    to: String,
    airline: String,
    passangers: [Passanger.schema]
});

var Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;