const jwt = require("jsonwebtoken");
var ownerToken = require("../middlewares/owner");

function authenticateToken(req, res, next) {
  const userService = require("../services/users.services");
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, "web-blog-jungerMan", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    ownerToken.ownerToken = req.user.data;
    var username = ownerToken.ownerToken;
    userService.userProfile({ username }, (error, result) => {
      if (error) {
        return next(error);
      }
      ownerToken.id = result.id;
      next();
    });
  });
}

function generateAccessToken(username) {
  return jwt.sign({ data: username }, "web-blog-jungerMan", {
    expiresIn: "2h",
  });
}

module.exports = {
  authenticateToken,
  generateAccessToken,
};
