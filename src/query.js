"use strict";

const gamedig = require('gamedig');
const async = require('async');
const config = require('./config');

module.exports = {
  checkServer: function (req, res) {
      async.parallel(
          this.getServer(),
          function(err, results) {
            res.status(200).json(results);
          }
      );
  },

  getServer: function () {
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
      return returnval;
  }
}
