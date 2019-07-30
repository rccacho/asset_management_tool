var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/asset_management_tool" );

var User = require('./user');
var Device = require('./device');

module.exports = {
  User: User,
  Device: Device
};