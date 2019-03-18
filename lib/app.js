/* eslint-disable no-console*/

const express = require('express');
const app = express();
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');
const connection = require('./middleware/connection');
const random = require('./routes/random');

app.use(require(cors()));
app.use(express.json());

app.use('/random', connection, random);

app.use(notFound);

app.use(handler);

module.exports = app;
