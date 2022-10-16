
 const followService = require("../services/follow.services");
 var ownerToken = require("../middleware/owner");


exports.insert = (req, res, next) => {
    req.body.first_id = ownerToken.id;
    followService.insert(req.body, (error, result) => {
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: result,
      });
    });
  };

  exports.followDelete = (req, res, next) => {
    id1 = ownerToken.id;
    id2 = req.body.follow_id;
    followService.unfollow({ id1,id2 }, (error, result) => {
      if (error) {
        return next(error);
      }
      return res.status(200).send({
        message: "Success",
        data: result,
      });
    });
  };