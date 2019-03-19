require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');
const Random = require('../lib/models/Random');

const connect = require('../lib/utils/connect');

beforeAll(() => {
  return connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return seedData(5);
});

afterAll(() => {
  return mongoose.connection.close();
});

const getQuote = () => {
  return Random
    .findOne()
    .then(quote => {
      return JSON.parse(JSON.stringify(quote));
    });
};

module.exports = {
  getQuote
};