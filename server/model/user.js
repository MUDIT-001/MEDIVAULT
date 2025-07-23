// models/user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  aadhaar: {
    type: String,
    required: true,
  },
  dob: {
    type: String, // You can change this to Date if you're using date pickers
    required: true,
  },
  role: {
    type: String,
    default: "patient", // can be 'patient', 'hospital', 'ngo'
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
