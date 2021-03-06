var mongoose = require('mongoose');

var Terminal = require('./terminal');

var airportSchema = new mongoose.Schema({
    name: String,
    country: String,
    terminals: [Terminal.schema],
    opened: Date
});

var Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;