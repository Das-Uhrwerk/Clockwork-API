"use strict";

const routes = require('express').Router();
const server = require('./server');

routes.use('/server', server);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
