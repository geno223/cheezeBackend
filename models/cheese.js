const mongoose = require('./connection');

const CheeseSchema = new mongoose.Schema({
    name: String,
    image: String,
    countryOfOrign: String,
});

const Cheese = mongoose.model('Cheese', CheeseSchema);

module.exports = Cheese