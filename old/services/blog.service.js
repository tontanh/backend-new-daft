const Blog = require("../models/blog.model");
const Comment = require("../models/comment");
const Category = require("../models/category.model");
async function blog(params, callback) {
  const blog = new Blog(params);
  blog
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function comment(params, callback) {
  const comment = new Comment(params);
  comment
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function category(params, callback) {
  const category = new Category(params);
  category
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

module.exports = { blog ,comment,category};
