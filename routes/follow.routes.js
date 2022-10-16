const { Router } = require("express");
// const auth =require("../middleware/auth.js";
const auth = require("../middleware/auth.js");
// const roleCheck =require("../middleware/roleCheck.js";
const followController = require("../controllers/follow.controller");
const router = Router();
router.post("/", auth, followController.insert);
router.delete("/delete", auth, followController.followDelete);
module.exports = router;
