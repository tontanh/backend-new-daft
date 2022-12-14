const User = require("../models/user/user.profile.js");

async function insert(params, callback) {
  // if (params.username == undefined) {
  //   return callback({ message: " Username Required" });
  // }
  const user = new User(params);
  user
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function userProfile({ id }, callback) {
  const user = await User.findOne({ user_id: id });

  if (user != null) {
    // var gg = (null, { ...user.toJSON() });
    // console.log(gg.id);
    return callback(null, { ...user.toJSON() });
  } else {
    return callback({ message: "User not Existed" });
  }
}
async function userAll(txt, callback) {
  // console.log(txt)

  const user = await User.find(txt)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function userProfileSearch(follow_id, callback) {
  // console.log(follow_id);
  const projection = {
    _id: 0,
    firstname: 1,
    lastname: 1,
    imgurl: 1,
  };
  const user = await User.find(
    { user_id: { $in: follow_id } },
    { firstname: 1, lastname: 1, user_id: 1, imgurl: 1 }
  )
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function updateUser({ id, body }, callback) {
  const user = await User.updateOne({ user_id: id }, { $set: body })
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

module.exports = {
  insert,
  userProfile,
  updateUser,
  userProfileSearch,
  userAll,
};
