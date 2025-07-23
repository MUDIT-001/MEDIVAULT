// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const {
  handleSignUp,
  handleLogin,
  handleVerifyOtp,
  handleRequestOtp,
} = require("../controller/authcontroler");

// 📍 POST /signup
router.post("/signup", handleSignUp);


// 📍 POST /login
router.post("/login", handleLogin);

// 📍 POST /verify-otp
router.post("/verify-otp", handleVerifyOtp);
router.post("/request-otp", handleRequestOtp); 

module.exports = router;
