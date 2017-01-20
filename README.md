# Clockwork-API
📶 Serverstatus | Administration API

### Install
```bash
# Build
git clone https://github.com/Das-Uhrwerk/Clockwork-API.git
yarn install

# Run
yarn run start
# or "node src/app.js" if you're on windows
# the production server will run it via pm2

# Test
curl localhost:3000/api/
```

### Routes

Currently the API only supports reading via GET, more information on the planned layout will be following up.

Route | Description
--- | ---
GET /server | List configured servers
GET /server/all | Query all serverdata
GET /server/*:servername* | Query single serverdata by servername
GET /server/all | Query all serverdata

___

### Development stack
- Node.js LTS via npm
 - [nvm 🔗](https://github.com/creationix/nvm)
 - [nvm for windows 🔗](https://github.com/coreybutler/nvm-windows)
- [Yarn 🔗](https://github.com/yarnpkg/yarn)
   - use the installer for windows

#### Recommandation:

If you are developing on Windows consider the use of [babun 🔗](http://babun.github.io/) until WSL (bash on windows) is fully ready for productive usage.
