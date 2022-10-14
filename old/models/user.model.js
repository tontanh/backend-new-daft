const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    require: true,
  },
  tell: {
    type: String,
    require: true,
    default: null,
  },
  fullname: {
    type: String,
    require: true,
    default: null,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

userSchema.plugin(uniqueValidator, {
  message: "Email/Username already in use",
});
const User = mongoose.model("user", userSchema);
module.exports = User;
