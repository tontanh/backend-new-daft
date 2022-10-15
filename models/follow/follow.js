const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  first_id: {
    type: String,
    require: true,
  },
  scond_id: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["user", "admin", "super_admin"],
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
const User = mongoose.model("follow", userSchema);
module.exports = User;
