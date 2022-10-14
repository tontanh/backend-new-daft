const blogController = require("../controllers/blog.controller");
const routerBlog = require("express").Router();
const upload = require("../controllers/image.controller");

routerBlog.post("/post", upload.upload.single("cover"), blogController.blog);
routerBlog.post("/comment", blogController.comment);
routerBlog.post("/category", blogController.category);
// routerBlog.get("/cover", express.static(path.join(__dirname, "../uploads")));
routerBlog.get("/cover", (req, res) => {
  res.status(200).send("silge done");
});
module.exports = routerBlog;
