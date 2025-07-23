// App.js
import { useState } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import axios from "axios";

import Navbar from "./components/landing page/navbar";
import Hero from "./components/landing page/hero";
import Stats from "./components/landing page/stats";
import About from "./components/landing page/about";
import Features from "./components/landing page/features";
import CTA from "./components/landing page/cta";
import Footer from "./components/landing page/footer";
import ScrollToTop from "./components/landing page/scrolltotop";

import SignupModal from "./components/auth/sign_up";
import LoginModal from "./components/auth/sign_in";
import OTPModal from "./components/auth/otpmodel";

function App() {
  const [authModal, setAuthModal] = useState({ type: null, role: null });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpPhone, setOtpPhone] = useState("");

  const handleAuthClick = (type, role) => {
    setAuthModal({ type, role });
  };

  const handleCloseModal = () => {
    setAuthModal({ type: null, role: null });
  };

  return (
    <>
      <Navbar onAuthClick={handleAuthClick} />
      <Hero />
      <Stats />
      <About />
      <Features />
      <CTA onAuthClick={handleAuthClick} />
      <Footer />
      <ScrollToTop />

      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      {authModal.type === "sign_up" && authModal.role === "patient" && (
        <SignupModal
          isOpen={true}
          onClose={handleCloseModal}
          onOtpTrigger={(formData) => {
            console.log("Signup data:", formData);
            setOtpPhone(formData.phone);
            setShowOtpModal(true);
          }}
        />
      )}

      {authModal.type === "login" && authModal.role === "patient" && (
        <LoginModal
          isOpen={true}
          onClose={handleCloseModal}
          onOtpTrigger={(formData) => {
            console.log("Login data:", formData);
            setOtpPhone(formData.phone);
            setShowOtpModal(true);
          }}
        />
      )
    }
      {showOtpModal && (
          <OTPModal
            isOpen={true}
            phone={otpPhone}
            mode={authModal.type}
            onClose={() => setShowOtpModal(false)}
          />
        )}

    </>
  );
}

export default App;
