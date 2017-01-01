"use strict";

const express = require('express');
const routes = require('./routes');
const app = express();
const config = require('./config');

app.use('/', routes);

/*app.get('/', function(req, res) {
    checkServer(req, res);
});*/

app.listen(config.api.port, function() {

});
