const Random = require('../models/Random');
const { Router } = require('express');

module.exports = Router()

  .get('/', (req, res, next) => {
    Random
      .findOne()
      .then(quote => res.send(quote))
      .catch(next);
  });