"use strict";

const data = require('../../config/server.json');

module.exports = (req, res) => {
  let serverName = req.params.serverName;
  let server = data[serverName];
  res.status(200).json(server);
};
