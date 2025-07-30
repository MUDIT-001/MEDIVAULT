import React from "react";

const EmailVerify = ({ onBack, onClose }) => {
  return (
    <div style={styles.modal}>
      {/* Close Button */}
      <button style={styles.closeButton} onClick={onClose}>
        ×
      </button>

      {/* Logo */}
      <img src="/logo1.png" alt="Logo" style={styles.logo} />

      {/* Message */}
      <p style={styles.message}>
        We will Send You <strong>EMAIL</strong> after verification within next <strong>24hrs</strong> !!!
      </p>

      {/* Back Button */}
      <button style={styles.backButton} onClick={onBack}>
        ← Back
      </button>
    </div>
  );
};

const styles = {
  modal: {
    width: "340px",
    margin: "100px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "25px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    position: "relative",
    fontFamily: "Arial, sans-serif",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  logo: {
  width: "70px",
  margin: "0 auto 20px", // centers it horizontally & gives bottom spacing
  display: "block",      // ensures it respects the margin:auto centering
},

  message: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#000",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  backButton: {
    fontSize: "16px",
    background: "none",
    border: "none",
    color: "#000",
    cursor: "pointer",
  },
};

export default EmailVerify;
