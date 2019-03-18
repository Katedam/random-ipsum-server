const mongoose = require('mongoose');

const randomSchema = new mongoose.Schema({
  quote: String
});

module.exports = mongoose.model('Random', randomSchema);
