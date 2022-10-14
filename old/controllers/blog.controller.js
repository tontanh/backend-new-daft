const blogService = require("../services/blog.service");
var ownerToken = require("../middlewares/owner");
exports.blog = (req, res, next) => {
  req.body.owner_id = ownerToken.id;
  req.body.cover = req.file.filename;
  blogService.blog(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

exports.comment = (req, res, next) => {
  req.body.author_id = ownerToken.id;
  blogService.comment(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

exports.category = (req, res, next) => {
  blogService.category(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};
