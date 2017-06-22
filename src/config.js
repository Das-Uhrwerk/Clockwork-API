"use strict";

var config = {};
var serverStorage = app_require('config/server.json');

// API Settings
config.api = {};
config.api.port = 3000;
config.api.prefix = '/api/';

config.cron = {};
config.cron.enabled = true;

config.log = {};
config.log.path = './log';

// Server Settings
config.server = serverStorage;

// export
module.exports = config;
