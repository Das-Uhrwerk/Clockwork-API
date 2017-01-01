"use strict";

const routes = require('express').Router();
const server = app_require('routes/server');
const config = app_require('config');

routes.use(config.api.prefix+'server', server);

routes.get(config.api.prefix, (req, res) => {
    res.status(200).json({
        message: 'Connected!'
    });
});

module.exports = routes;
