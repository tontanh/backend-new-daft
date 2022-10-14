const { Router } = require("express");
// const auth =require("../middleware/auth.js";
const auth = require("../middleware/auth.js");
// const roleCheck =require("../middleware/roleCheck.js";
const profileController = require("../controllers/users.controller.js");

const router = Router();
router.get("/details", auth,profileController.userProfile);
router.post("/profile", auth, profileController.insert);
router.put("/profile_update", auth, profileController.userUpdate);
module.exports = router;
