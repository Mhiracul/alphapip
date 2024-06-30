const mongoose = require("mongoose");

const walletBalanceSchema = new mongoose.Schema({
  eth: { type: Number, default: 0 },
  btc: { type: Number, default: 0 },
  xrp: { type: Number, default: 0 },
  xlm: { type: Number, default: 0 },
  xdc: { type: Number, default: 0 },
  algo: { type: Number, default: 0 },
  miota: { type: Number, default: 0 },
  ada: { type: Number, default: 0 },
  hbar: { type: Number, default: 0 },
  qtum: { type: Number, default: 0 },
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: String,

  bitcoinAddress: {
    type: String,
  },
  resetToken: {
    type: String,
  },
  tetherAddress: {
    type: String,
  },
  status: {
    type: String,
    enum: ["suspended", "activated", "disabled"],
    default: "activated",
  },

  accountBalance: {
    type: Number,
    default: 0,
  },
  tradingAccount: {
    type: Number,
    default: 0,
  },
  phoneNumber: {
    type: Number,
  },

  ipAddress: {
    type: String,
    default: null,
  },
  country: String, // New field for country
  signupDate: {
    type: Date,
    default: Date.now,
  },
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  walletBalances: { type: walletBalanceSchema, default: () => ({}) },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
