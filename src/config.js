var config = {};

// API Settings
config.api = {};
config.api.port = 3000;

// Server Settings
config.server = {
    "teamspeak3": {
        "port": 7777,
        "host": "das-uhrwerk.de"
    },
    "starbound": {
        "port": 21025,
        "host": "das-uhrwerk.de"
    },
    "arkse": {
        "port": 8888,
        "host": "das-uhrwerk.de"
    }
};

//config.server = [1,2,3];
/*
config.server['teamspeak3'] = {};
config.server['teamspeak3'].host = "das-uhrwerk.de";
config.server['teamspeak3'].port = 7777;

config.server['starbound'] = {};
config.server['starbound'].host = "das-uhrwerk.de";
config.server['starbound'].port = 21025;

config.server['arkse'] = {};
config.server['arkse'].host = "das-uhrwerk.de";
config.server['arkse'].port = 8888;
*/
// export
module.exports = config;
