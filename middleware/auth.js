const jwt = require("jsonwebtoken");
const ownerToken = require("./owner");
const auth = async (req, res, next) => {
  // const token = req.header("x-access-token");
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(403)
      .json({ error: true, message: "Access Denied: No token provided" });
  try {
    const tokenDetails = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_PRIVATE_KEY
    );
    req.user = tokenDetails;
    ownerToken.id = tokenDetails._id;
    // console.log(tokenDetails._id);
    next();
  } catch (err) {
    // console.log(err);
    res
      .status(403)
      .json({ error: true, message: "Access Denied: Invalid token" });
  }
};

module.exports = auth;
