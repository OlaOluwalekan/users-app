const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/users");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").delete(deleteUser).get(getUser).patch(updateUser);

module.exports = router;
