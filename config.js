const repoConfig = require("../config/index.js")
if(!repoConfig) throw new Error("Cannot find the config module!")
module.exports = repoConfig