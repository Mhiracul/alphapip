const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define transaction schema
const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  },
  proofFilePath: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"], // Example statuses, adjust as needed
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export Transaction model
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
