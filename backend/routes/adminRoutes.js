const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  getAllTasks,
} = require("../controllers/adminController");

// only admin can access
router.get("/users", auth, role("admin"), getAllUsers);
router.get("/tasks", auth, role("admin"), getAllTasks);

module.exports = router;