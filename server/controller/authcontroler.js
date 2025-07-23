// controllers/authController.js

const { generateOtp, verifyOtp } = require("../utils/otpmanage");
const User = require("../model/user");
const tempUserData = require("../utils/tempuserdata"); // Adjust path if needed


// TEMPORARY store for user data before OTP is verified
const handleRequestOtp = async (req, res) => {
  try {
    const { name, phone, aadhaar, dob, role } = req.body;

    if (!name || !phone || !aadhaar || !dob || !role) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const otp = generateOtp(phone);
    console.log(`📲 OTP for ${phone}: ${otp}`);

    // Store signup data temporarily
    tempUserData.set(phone, { name, phone, aadhaar, dob, role });

    // Auto-delete after 5 minutes (optional)
    setTimeout(() => tempUserData.delete(phone), 5 * 60 * 1000);

    return res.status(200).json({ msg: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP Request Error:", error);
    return res.status(500).json({ msg: "Server Error" });
  }
};

// 📍 SIGN-UP flow: Step 1
const handleSignUp = async (req, res) => {
  const { name, phone, dob, aadhaar, mode, role } = req.body;

  if (!name || !phone || !dob || !aadhaar || !mode || !role) {
    return res.status(400).json({ msg: "All fields required" });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ phone }, { aadhaar }]
    });
    
    if (existingUser) {
      return res.status(404).json({ msg: "User already exists" });
    }

    const otp = generateOtp(phone);
    tempUserData.set(phone, { name, phone, dob, aadhaar, mode, role }); // store all for later save

    console.log(`🔐 [SIGN-UP] OTP for ${phone}: ${otp}`);

    return res.status(200).json({ msg: "OTP sent successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

// 📍 LOGIN flow: Step 1
const handleLogin = async (req, res) => {
  const { phone, aadhaar, mode, role } = req.body;

  if (!phone || !aadhaar || !mode || !role) {
    return res.status(400).json({ msg: "All fields required" });
  }

  try {
    const user = await User.findOne({ phone, aadhaar });
    if (!user) {
      return res.status(404).json({ msg: "User not found. Please sign up." });
    }

    const otp = generateOtp(phone);
    console.log(`🔐 [LOGIN] OTP for ${phone}: ${otp}`);

    return res.status(200).json({ msg: "OTP sent successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

// 📍 OTP VERIFY (Both Sign-up & Login)
const handleVerifyOtp = async (req, res) => {
  try {
    const { phone, otp, mode } = req.body;

    if (!phone || !otp || !mode) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const isValid = verifyOtp(phone, otp);
    if (!isValid) {
      return res.status(401).json({ msg: "Invalid or expired OTP." });
    }

    if (mode === "sign_up") {
      const userData = tempUserData.get(phone);

      if (!userData) {
        return res.status(400).json({ msg: "No signup data found for this number. Please restart signup." });
      }
    
      const { name, dob, aadhaar, role } = userData;

      // Create the user now
      const newUser = new User({ name, phone, dob, aadhaar, role });

      await newUser.save();

      // Optional: clean up temp user data after use
      tempUserData.delete(phone);
      //otpStorage.delete(phone);

      return res.status(200).json({ msg: "User created successfully", user: newUser });}

    // Handle login case
    if (mode === "login") {
      const user = await User.findOne({ phone });

      return res.status(200).json({ msg: "Login successfullllllllllllllllll.", user });
    }

    return res.status(400).json({ msg: "Invalid mode." });
  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};


module.exports = {
  handleSignUp,
  handleLogin,
  handleVerifyOtp,
  handleRequestOtp,
};
