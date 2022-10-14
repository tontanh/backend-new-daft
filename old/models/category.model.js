const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  decs: {
    type: String,
    require: true,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
categorySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});
const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
