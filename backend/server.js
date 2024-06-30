const dotenv = require("dotenv");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authMiddleware = require("./models/auth");

const {
  authenticateToken,
  authorizeAdmin,
} = require("./middlewares/authMiddleware");
dotenv.config();

const app = express();
app.use(cors());
app.use((req, res, next) => {
  const allowedOrigins = ["https://www.alphapipnetwork.com"];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, auth-token");
  next();
});

app.get("/api", (req, res) => {
  res.send("Server is running");
});
app.get("/admin", authenticateToken, authorizeAdmin, (req, res) => {
  // This route handler will only be executed if the user is an admin

  res.send({ message: "Welcome to the admin-only route!", alert: true });
});

// Serve static files from the uploads directory
app.use("/uploads", express.static("uploads"));

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});
const PORT = 4000 || 4000;
const mongoUrl = process.env.MONGO_URL;

// Routes

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Mongo connection successful"))
  .catch((err) => console.error("Mongo connection failed", err));

app.use("/api", authMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
