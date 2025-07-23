import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTPModal = ({ isOpen, onClose, phone, mode }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // ✅ Optional frontend validation for OTP
    if (!/^\d{6}$/.test(otp)) {
      setError("OTP must be 6 digits");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("api/auth/verify-otp", {
        phone,
        otp,
        mode
      });
    if (response.data.success) {
      toast.success(response.data.msg || "OTP verified! 🎉");
      setTimeout(() => {
        onClose(); // Close the modal
      }, 1000);
    }
    else {
        setError(response.data.msg || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Enter OTP</h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Sent to <span className="font-medium">{phone}</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="6-digit OTP"
            className="border border-gray-300 rounded-lg p-3 text-center text-lg tracking-widest"
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-medium transition"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-500 hover:underline mt-1"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPModal;