const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// user route
router.get("/user", auth, (req, res) => {
  res.json({ msg: "User route accessed", user: req.user });
});

// admin route
router.get("/admin", auth, role("admin"), (req, res) => {
  res.json({ msg: "Admin route accessed" });
});

module.exports = router;