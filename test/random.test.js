const request = require('supertest');
const app = require('../lib/app.js');

describe('route', () => {
  it('returns a random ipsum quote', () => {
    return request(app)
    .get('/random')
    .then(res => {
      expect(res.body).toEqual({
        text: expect.any(String),
        __v: 0,
        _id: expect.any(String)
      })
    })
  });
});
