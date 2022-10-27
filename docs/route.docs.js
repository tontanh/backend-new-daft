const userDocs = require("./users.docs")
const followDocs = require("./follow.docs")
const routeDocs = {
  "/api/signup": userDocs.signup,
  "/api/login": userDocs.login,
  "/api/refreshToken": userDocs.refreshToken,
  "/api/refreshToken/delete": userDocs.logout,
  "/api/users/details": userDocs.user_details,
  "/api/users/profile": userDocs.user_profile_insert,
  "/api/users/profile_update": userDocs.user_profile_update,
  "/api/users/update_image_profile": userDocs.update_image_profile,
  "/api/users/profile_search": userDocs.user_findAll,
  "/api/follow":followDocs.follow,
  "/api/follow/delete":followDocs.unfollow,
  "/api/follow/user_following":followDocs.following
};

module.exports = { routeDocs };
