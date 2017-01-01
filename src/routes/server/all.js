"use strict";

const data = require('../../config/server.json');
const query = require('../../query');

module.exports = (req, res) => {
  query.checkServer(req, res);
};
