"use strict";

/*
 * App related require
 *
 * Though this is arguable, this opens up a simple solution to make
 * routing efficent eg: const route = app_require('routes/server/all')
 *
 */
global.app_require = function(name) {
    return require(__dirname + '/' + name);
}

const express = require('express');
const routes = app_require('routes');
const config = app_require('config');

const app = express();

app.use('/', routes);

app.get('*', function(req, res){
  res.status(404).json({message:"Not found!"});
});


app.listen(config.api.port, function() {
    // reserve this place for logging, and CLI output.
});
