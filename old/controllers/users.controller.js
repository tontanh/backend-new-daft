const bcryptjs = require("bcryptjs");
const userService = require("../services/users.services");
var ownerToken = require("../middlewares/owner");

exports.register = (req, res, next) => {
  const { password } = req.body;
  const salt = bcryptjs.genSaltSync(10);
  req.body.password = bcryptjs.hashSync(password, salt);
  // (req.body.image = req.file.path),
  userService.register(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  userService.login({ username, password }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

exports.userProfile = (req, res, next) => {
  var username = ownerToken.ownerToken;
  userService.userProfile({ username }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
  // return res
  //   .status(200)
  //   .json({ message: "Authorized user!" });
};


exports.userUpdate = (req, res, next) => {
  var id = ownerToken.id;
  var body = req.body;
  userService.updateUser({ id,body }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success update",
      data: result,
    });
  });
  // return res
  //   .status(200)
  //   .json({ message: "Authorized user!" });
};