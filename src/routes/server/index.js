"use strict";

const server = require('express').Router();
const all = require('./all');
const single = require('./single');

server.get('/', all);
server.get('/:serverName', single);

module.exports = server;
