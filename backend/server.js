require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  authenticateToken,
  authorizeAdmin,
} = require("./middlewares/authMiddleware");
const authMiddleware = require("./models/auth");

const app = express();
const PORT = process.env.PORT || 4000;
const mongoUrl = process.env.MONGO_URL;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes
app.get("/api", (req, res) => {
  res.send("Server is running");
});

app.get("/admin", authenticateToken, authorizeAdmin, (req, res) => {
  res.send({ message: "Welcome to the admin-only route!", alert: true });
});

app.use("/api", authMiddleware);

// MongoDB Connection
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Mongo connection successful"))
  .catch((err) => console.error("Mongo connection failed", err));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
