const express = require("express");
const router = express.Router();
const {
  aurhenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  createProuduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");

const {getSingleProductReviews} = require("../controllers/reviewController")
router
  .route("/")
  .post([aurhenticateUser, authorizePermissions("admin")], createProuduct)
  .get(getAllProducts);

router
  .route("/uploadImage")
  .post([aurhenticateUser, authorizePermissions("admin")], uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([aurhenticateUser, authorizePermissions("admin")], updateProduct)
  .delete([aurhenticateUser, authorizePermissions("admin")], deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);
module.exports = router;
