// utils/otpService.js

const otpStorage = new Map(); // Map: phone -> { otp, expiresAt }

const generateOtp = (phone) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 5 * 60 * 1000; // expires in 5 minutes

  otpStorage.set(phone, { otp, expiresAt });
  return otp;
};

const verifyOtp = (phone, otpInput) => {
  const record = otpStorage.get(phone);

  if (!record) return { success: false, msg: "No OTP sent for this phone." };

  if (Date.now() > record.expiresAt) {
    otpStorage.delete(phone);
    return { success: false, msg: "OTP expired." };
  }

  if (record.otp !== otpInput) {
    return { success: false, msg: "Invalid OTP." };
  }

  otpStorage.delete(phone);
  return { success: true, msg: "OTP verified." };
};

module.exports = { generateOtp, verifyOtp };
