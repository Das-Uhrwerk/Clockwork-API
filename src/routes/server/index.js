"use strict";

const server = require('express').Router();
const config = app_require('config');
const all = app_require('routes/server/all');
const single = app_require('routes/server/single');

server.get('/', function(req, res) {
    res.status(200).json(config.server);
});

server.get('/all', all);
server.get('/:serverName', single);

module.exports = server;
