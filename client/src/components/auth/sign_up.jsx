import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = ({ onClose, onOtpTrigger }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    aadhaar: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const { name, phone, aadhaar, dob } = formData;

    if (!name || !phone || !aadhaar || !dob) {
      toast.error("Please fill in all fields");
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return false;
    }

    if (!/^\d{12}$/.test(aadhaar)) {
      toast.error("Aadhaar number must be exactly 12 digits");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

     try {
      const response = await axios.post("/api/auth/signup", {
        name: formData.name,
        phone: formData.phone,
        aadhaar: formData.aadhaar,
        dob: formData.dob,
        mode: "sign_up",
        role: "patient",
      });

      if (response.data.msg === "OTP sent successfully") {
        onOtpTrigger(formData); // pass form data to parent for OTP screen
      } else {
        toast.error("OTP not sent: " + response.data.msg);
      }
    }catch (err) {
  console.log("🧨 ERROR FROM SIGNUP:", err);
  if (err.response) {
    toast.error("Server error: " + err.response.data?.msg);
  } else if (err.request) {
    toast.error("⚠️ No response from server.");
  } else {
    toast.error("❌ Request error: " + err.message);
  }
}
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg relative font-poppins">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={formData.aadhaar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Request OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
