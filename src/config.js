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

// export
module.exports = config;
