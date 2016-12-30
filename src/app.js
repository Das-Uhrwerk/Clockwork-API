var express = require('express');
var gamedig = require('gamedig');
var async = require('async');
var util = require('util');
var app = express();
var config = require('./config');

app.get('/', function(req, res) {
    checkServer(req, res);
});

app.listen(config.api.port, function() {

});

function checkServer(req, res) {
    async.parallel(
        getServer(),
        function(err, results) {
            res.end(JSON.stringify(results));
        }
    );
}

function getServer() {
    var returnval = {};

    for (var element in config.server) {
        returnval[element] = function(callback) {
            gamedig.query({
                    type: element,
                    port: config.server[element].port,
                    host: config.server[element].host
                },
                function(state) {
                    callback(null, state);
                }
            );
        }
    }

    //console.log(util.inspect(returnval, true, 10, true));
    return returnval;
}
