const fs = require("fs");
const userService = require("../services/users.services.js");
var ownerToken = require("../middleware/owner");
const path = require('path');


insert = (req, res, next) => {
  req.body.user_id = ownerToken.id;
  userService.insert(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

userProfile = (req, res, next) => {
  // console.log(ownerToken.id + 'eee');
  id = ownerToken.id;
  userService.userProfile({ id }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

userUpdate = (req, res, next) => {
  var id = ownerToken.id;
  var body = req.body;
  userService.updateUser({ id, body }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success update",
      data: result,
    });
  });
};

async function profileImage  (req, res, next) {
  var id = ownerToken.id;
  req.body.imgurl = req.file.filename;
  body = { imgurl: req.body.imgurl };
  var oldImage;
  // get image
  await userService.userProfile({ id }, (error, result) => {
    if (error) {
      console.log("not found image");
    }
    oldImage = result.imgurl;
    // console.log(oldImage);
  });
  userService.updateUser({ id, body }, (error, result) => {
    if (error) {
      return next(error);
    }
    // if(result)
    return res.status(200).send({
      message: "Success update",
      data: result,
    });
  });
  
  fs.unlink(path.join("public/profile/"+ oldImage), function (err) {
    if (err) {
      console.error(err);
    } else console.log("update image and Old Image File has been Deleted");
  });
};
module.exports = { insert, userProfile, userUpdate, profileImage };
