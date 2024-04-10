const express = require("express");
const router = express.Router();
const {
  aurhenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

router
  .route("/")
  .get(aurhenticateUser, authorizePermissions("admin", "owner"), getAllUsers);

router.route("/showMe").get(aurhenticateUser,showCurrentUser);
router.route("/updateUser").patch(aurhenticateUser,updateUser);
router.route("/updateUserPassword").patch(aurhenticateUser,updateUserPassword);

router.route("/:id").get(aurhenticateUser, getSingleUser);

module.exports = router;
