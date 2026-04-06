const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");


dotenv.config()
connectDB();

const app = express()
app.use(cors());
app.use(express.json());

app.get("/" , (req,res) =>{
    res.send("API is running...");
});
// authRoutes
const authRoutes = require("./routes/authRoutes");
app.use("/auth",authRoutes);

// test routes
const testRoutes = require("./routes/testRoutes");
app.use("/test", testRoutes);

//task routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

// admin routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 5000

app.listen( PORT, () =>{
    console.log('Server running on port ${PORT}');

});

const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: "admin@test.com" });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      await User.create({
        name: "Admin",
        email: "admin@test.com",
        password: hashedPassword,
        role: "admin",
      });

      console.log("✅ Admin created");
    } else {
      console.log("ℹ️ Admin already exists");
    }
  } catch (error) {
    console.log(error);
  }
};

