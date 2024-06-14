const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
  authenticateToken,
  authorizeAdmin,
} = require("../middlewares/authMiddleware");
const userModel = require("./user");

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const role = "user";

    const user = new userModel({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    await user.save();

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
        .replace("{role}", role),
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

module.exports = router;
