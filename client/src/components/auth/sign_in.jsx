import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientLogin = ({ onClose, onOtpTrigger }) => {
  const [formData, setFormData] = useState({
    phone: "",
    aadhar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    if (!/^\d{12}$/.test(formData.aadhar)) {
      toast.error("Aadhaar number must be 12 digits");
      return;
    }

    try {
      const response = await axios.post("/api/auth/login", {
        phone: formData.phone,
        aadhaar: formData.aadhar,
        mode: "sign_up",
        role: "patient"
      });

      if (response.data.msg === "OTP sent successfully") {
        console.log("OTP sent!");
        onOtpTrigger(formData);
      } else {
        toast.error("OTP not sent: " + response.data.msg);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.msg || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg relative font-poppins">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Patient Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border rounded-lg px-4 py-2"
            required
          />

          <input
            type="text"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            placeholder="Aadhaar Number"
            className="w-full border rounded-lg px-4 py-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 transition duration-300"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientLogin;