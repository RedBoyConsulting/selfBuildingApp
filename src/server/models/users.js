const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  userType: { type: String, require: true },
  userPwd: { type: String, require: true }
});

module.exports = mongoose.model("users", userSchema);
