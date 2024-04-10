const express = require("express");
const router = express.Router();
const { aurhenticateUser } = require("../middleware/authentication");
const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

router.route("/").post(aurhenticateUser, createReview).get(getAllReviews);
router
  .route("/:id")
  .get(getSingleReview)
  .patch(aurhenticateUser,updateReview)
  .delete(aurhenticateUser,deleteReview);

module.exports = router;
