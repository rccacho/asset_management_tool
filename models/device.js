var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  name: String,
  type: String,
  width: String,
  operating_system: String,
  image: String,
  borrow_date: String,
  return_date: String,
  available: Boolean,
  charged: Boolean,
  working: Boolean
});

var Device = mongoose.model('Device', DeviceSchema);

module.exports = Device;