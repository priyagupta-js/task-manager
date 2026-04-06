const User = require("../models/User");
const Task = require("../models/Task");


// ➤ GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // hide passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ➤ GET ALL TASKS
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("user", "name email");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};