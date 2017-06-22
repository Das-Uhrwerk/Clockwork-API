"use strict";

const data = app_require('config/server.json');
const query = app_require('query');

module.exports = (req, res) => {
    query.checkServer(req, res);
};
