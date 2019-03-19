const Random = require('../lib/models/Random');
const Chance = require('chance');
const chance = new Chance();

module.exports = function(count = 5) {
  const quotes = [...Array(count)].map((_, i) => ({
    quote: chance.sentence()
  }));

  return Random.create(quotes);
}