const Follow = require("../models/follow/follow");

async function insert(params, callback) {
  // if (params.username == undefined) {
  //   return callback({ message: " Username Required" });
  // }
  const user = new Follow(params);
  user
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function unfollow({ id1, id2 }, callback) {
  const data = await Follow.remove({
    $and: [{ "first_id:": id1 }, { "scond_id:": id2 }],
  })
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function following({ id }, callback) {
  const data = await Follow.find({ "first_id:": id })
  .then((response) => {
    return callback(null, response);
  })
  .catch((error) => {
    return callback(error);
  });
}

module.exports = {
  insert,
  unfollow,
  following,
};
