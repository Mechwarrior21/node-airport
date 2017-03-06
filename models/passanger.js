var mongoose = require('mongoose');

var passangerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date
});

var Passanger = mongoose.model('Passanger', passangerSchema);

module.exports = Passanger;