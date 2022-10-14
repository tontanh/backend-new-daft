const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new Schema({
  user_id: {
    type: String,
    require: true,
    unique: true,
  },
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    require: true,
    default: null,
  },
  birthday: {
    type: Date,
    require: true,
    default: null,
  },
  gender: {
    type: String,
    require: true,
    default: null,
  },
  tell: {
    type: String,
    require: true,
    default: null,
  },
  imgurl: {
    type: String,
    require: true,
    default: null,
  },
  modifieddate: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
userSchema.plugin(uniqueValidator, {
  message: "User already in use",
});

const User = mongoose.model("profile", userSchema);
module.exports = User;
