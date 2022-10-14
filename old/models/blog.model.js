const mongoose = require("mongoose");
const { Schema } = mongoose;
const blogSchema = new Schema({
  owner_id: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  subCategory: {
    type: Array,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  cover: String,
});
blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
