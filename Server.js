const serviceRoutes = require("./routes/services");
const db = require("./config/database");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
dotenv.config();
app.use("/api/auth", authRoutes);
const app = express();
const profileRoutes = require("./routes/profile");
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/profile", profileRoutes);
// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to SMM Panel API",
    version: "1.0.0"
  });
})
// Server
const PORT = process.env.PORT || 3000;
app.use("/api/services", serviceRoutes);
app.listen(PORT, () => {
  console.log(`SMM Panel is running on port ${PORT}`);
});