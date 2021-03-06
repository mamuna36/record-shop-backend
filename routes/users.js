const express = require("express");
const router = express.Router();
const { validateInputs } = require("../middleware/validator");
const { userValidationRules } = require("../lib/validation/userRules");

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  loginUser,
  verifyEmail,
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(validateInputs(userValidationRules), addUser);

router.route("/login").post(loginUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser, getUsers);
router.get("/verify/:emailToken", verifyEmail);

module.exports = router;
