const { Router } = require("express");
// const auth =require("../middleware/auth.js";
const auth = require("../middleware/auth.js");
// const roleCheck =require("../middleware/roleCheck.js";
const followController = require("../controllers/users.controller.js");

router.post("/profile", auth, profileController.insert);
module.exports = router;
