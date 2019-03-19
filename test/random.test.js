require('dotenv').config();
require('../lib/utils/connect')();
const mongoose = require('mongoose');

const request = require('supertest');
const app = require('../lib/app.js');
const seedData = require('./seedData');

describe('route', () => {
  beforeEach(done => {
    mongoose.connection.dropDatabase((done()));
  });

  beforeEach(() => seedData());

  afterAll(done => {
    mongoose.connection.close();
    done();
  });

  it('returns a random ipsum quote', () => {
    return request(app)
    .get('/random')
    .then(res => {
      expect(res.body).toEqual({
        quote: expect.any(String),
        __v: 0,
        _id: expect.any(String)
      })
    })
  });
});
