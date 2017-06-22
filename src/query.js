"use strict";

const gamedig = require('gamedig');
const async = require('async');
const config = app_require('config');

module.exports = {
    checkServer: function(req, res, serverName) {
        if (serverName) {
            if(config.server[serverName]){
              this.getServer(serverName)(function(data, state) {
                  res.status(200).json(state);
              });
            } else {
              res.status(404).json({message:"Not found!"});
            }
        } else {
            async.parallel(
                this.bundleServers(),
                function(err, results) {
                    res.status(200).json(results);
                }
            );
        }
    },

    bundleServers: function() {
        var returnval = {};
        for (var element in config.server) {
            returnval[element] = this.getServer(element);
        }
        return returnval;
    },

    getServer: function(serverName) {
        return function(callback) {
            gamedig.query({
                    type: serverName,
                    port: config.server[serverName].port,
                    host: config.server[serverName].host
                },
                function(state) {

                    callback(null, state);
                }
            );
        }
    }
}
