const userController = require("../controllers/users.controller");
const router = require("express").Router();
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", userController.userProfile);
router.put("/update", userController.userUpdate);
module.exports = router;
