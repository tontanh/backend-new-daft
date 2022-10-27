const followService = require("../services/follow.services");
const userProfile = require("../services/users.services");
var ownerToken = require("../middleware/owner");
const { object } = require("joi");

insert = (req, res, next) => {
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

followDelete = (req, res, next) => {
  id1 = ownerToken.id;
  id2 = req.body.follow_id;
  followService.unfollow({ id1, id2 }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};
async function following(req, res, next) {
  id = ownerToken.id;
  var data;
  await followService.following({ id }, (error, result) => {
    if (error) {
      return next(error);
    }
    data = result;
  });

  // console.log(data);
  var arrayOfStrings = data.map(function (data1) {
    return data1.scond_id;
  });

  // get profile following
  follow_id = arrayOfStrings;
  // console.log(follow_id)
  userProfile.userProfileSearch(follow_id, (error, result) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    // console.log(found);
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
}

module.exports = { followDelete, insert, following };
