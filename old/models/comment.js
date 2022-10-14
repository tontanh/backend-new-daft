const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema({
  owner_blog_id: {
    type: String,
    require: true,
    unique: true,
  },
  author_id: {
    type: String,
    require: true,
    unique: true,
  },
  message: {
    type: String,
    require: true,
    unique: true,
  },
  status: {
    type: Number,
    require: true,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
commentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});

const Comment = mongoose.model("comments", commentSchema);
module.exports = Comment;
