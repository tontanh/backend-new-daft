const userService = require("../services/users.services.js");
var ownerToken = require("../middleware/owner");
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

// userUpdate = (req, res, next) => {
//   var id = ownerToken.id;
//   var body = req.body;
//   userService.updateUser({ id,body }, (error, result) => {
//     if (error) {
//       return next(error);
//     }
//     return res.status(200).send({
//       message: "Success update",
//       data: result,
//     });
//   });
// return res
//   .status(200)
//   .json({ message: "Authorized user!" });
// };

module.exports = { insert,userProfile };
