import React, { useState } from "react";

const DonateForm = ({ onClose }) => {
  const [form, setForm] = useState({
    organisation: "",
    itemName: "",
    medicineType: "",
    expiryDate: "",
    quantity: "",
    contactNumber: "",
    address: "",
    confirmSafe: false,
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., validation and API call)
    alert("Donation form submitted!");
  };

  return (
    <>
      <style>{`
        /* Container */
        .donate-container {
          width: 380px;
          background: white;
          border-radius: 28px;
          padding: 25px 30px 30px 30px;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
          position: relative;
        }
        /* Close button */
        .close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          font-weight: 700;
          font-size: 20px;
          color: black;
          cursor: pointer;
          user-select: none;
          border: none;
          background: transparent;
          line-height: 1;
        }
        /* Heading */
        .donate-heading {
          font-weight: 900;
          font-size: 32px;
          line-height: 39px;
          color: #0049ff;
          margin-top: 0;
          margin-bottom: 26px;
          user-select: none;
        }
        /* Input fields styling */
        input[type="text"],
        input[type="date"],
        input[type="number"] {
          width: 100%;
          background: #d3d3d3;
          border-radius: 16px;
          border: none;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: #6e6666;
          padding: 12px 18px;
          box-sizing: border-box;
          margin-bottom: 19px;
          outline-offset: 2px;
        }
        input[type="date"] {
          color: #6e6666;
        }
        /* Flex container for Expiry Date & Quantity */
        .flex-two {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 19px;
        }
        .flex-two input {
          flex: 1;
        }
        /* Checkboxes container */
        .checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
          cursor: pointer;
          user-select: none;
        }
        .checkbox-row input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
          margin-top: 4px;
          flex-shrink: 0;
          accent-color: #6e6666; /* grey border and check */
        }
        .checkbox-text {
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: black;
          flex: 1;
        }
        .terms-link {
          color: #0049ff;
          font-weight: 900;
          text-decoration: none;
          cursor: pointer;
        }
        .terms-link:hover,
        .terms-link:focus {
          text-decoration: underline;
          outline: none;
        }
        /* Donate button */
        .donate-button {
          width: 100%;
          background: #0049ff;
          border-radius: 16px;
          font-weight: 900;
          font-size: 20px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.05em;
          color: white;
          border: none;
          padding: 16px 0;
          cursor: pointer;
          user-select: none;
          margin-top: 20px;
          transition: background-color 0.2s ease-in-out;
        }
        .donate-button:disabled {
          background: #9bb7ff;
          cursor: not-allowed;
        }
        .donate-button:not(:disabled):hover,
        .donate-button:not(:disabled):focus {
          background: #003dcc;
          outline: none;
        }

        /* Input placeholders */
        input::placeholder {
          color: #6e6666;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
        }
        /* Responsive fallback */
        @media (max-width: 420px) {
          .donate-container {
            width: 90vw;
            padding: 20px 20px 24px 20px;
            border-radius: 22px;
          }
          .flex-two {
            flex-direction: column;
          }
          .flex-two input {
            width: 100%;
          }
        }
      `}</style>

      <form className="donate-container" onSubmit={handleSubmit} noValidate>
        <button
          aria-label="Close form"
          onClick={onClose}
          type="button"
          className="close-btn"
          title="Close"
        >
          ×
        </button>
        <h1 className="donate-heading">DONATE NOW</h1>

        <input
          type="text"
          name="organisation"
          placeholder="Name of Organisation"
          value={form.organisation}
          onChange={handleChange}
          required
          autoComplete="organization"
          spellCheck={false}
          aria-label="Name of Organisation"
        />
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={form.itemName}
          onChange={handleChange}
          required
          spellCheck={false}
          aria-label="Item Name"
        />
        <input
          type="text"
          name="medicineType"
          placeholder="Medicine Type"
          value={form.medicineType}
          onChange={handleChange}
          required
          spellCheck={false}
          aria-label="Medicine Type"
        />

        <div className="flex-two">
          <input
            type="date"
            name="expiryDate"
            aria-label="Expiry Date"
            value={form.expiryDate}
            onChange={handleChange}
            required
            min="1900-01-01"
            max="2100-12-31"
          />
          <input
            type="number"
            min="1"
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            onChange={handleChange}
            required
            aria-label="Quantity"
          />
        </div>

        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={handleChange}
          required
          spellCheck={false}
          pattern="[\+\d\s\-]{7,15}"
          title="Enter a valid contact number including country code"
          aria-label="Contact Number"
          inputMode="tel"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          spellCheck={false}
          aria-label="Address"
        />

        <label className="checkbox-row" htmlFor="confirmSafe">
          <input
            type="checkbox"
            id="confirmSafe"
            name="confirmSafe"
            checked={form.confirmSafe}
            onChange={handleChange}
            required
            aria-required="true"
          />
          <span className="checkbox-text">
            I CONFIRM THIS IS SURPLUS AND SAFE TO DONATE UNDER LOCAL HEALTH REGULATION.
          </span>
        </label>

        <label className="checkbox-row" htmlFor="acceptTerms">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={form.acceptTerms}
            onChange={handleChange}
            required
            aria-required="true"
          />
          <span className="checkbox-text">
            I ACCEPT THE{" "}
            <a
              href="#terms"
              className="terms-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TERMS
            </a>{" "}
            &{" "}
            <a
              href="#conditions"
              className="terms-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              CONDITIONS
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={!(form.confirmSafe && form.acceptTerms)}
          className="donate-button"
          aria-disabled={!(form.confirmSafe && form.acceptTerms)}
        >
          DONATE
        </button>
      </form>
    </>
  );
};

export default DonateForm;

