var mongoose = require('mongoose');

var Flight = require('./flight');

var terminalSchema = new mongoose.Schema({
    name: String,
    flights: [Flight.schema],
    capacity: Number
});

var Terminal = mongoose.model('Terminal', terminalSchema);

module.exports = Terminal;