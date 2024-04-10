const express = require("express");
const router = express.Router();
const {
  aurhenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} = require("../controllers/orderController");

router
  .route("/")
  .post(aurhenticateUser, createOrder)
  .get(aurhenticateUser, authorizePermissions("admin"), getAllOrders);

router.route("/showMyOrders").get(aurhenticateUser, getCurrentUserOrders);

router
  .route("/:id")
  .get(aurhenticateUser, getSingleOrder)
  .patch(aurhenticateUser, updateOrder);

module.exports = router;
