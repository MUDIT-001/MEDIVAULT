import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white px-[120px] py-10 font-poppins"
    >
      <div className="flex justify-between flex-wrap gap-10">
        {/* Left Section */}
        <div className="max-w-[30%]">
          <img
            src="/logo1.png"
            alt="MediVault Logo"
            className="mb-4 w-[160px]"
          />
          <p className="text-gray-400 text-sm mb-2">
  Empowering digital healthcare with secure and connected solutions.
</p>
<p className="text-gray-400 text-sm mb-2">
  📞 <span className="font-semibold">Contact:</span> +91 9876543210
</p>
{/* Email Section */}
          <p className="text-gray-400 text-sm mb-2">
            📧 <span className="font-semibold"> Email:</span> info@medivault.com
          </p>
          

          <div className="flex gap-4 text-xl text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Middle Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/donate">Donate Supplies</a></li>
          </ul>
        </div>

        {/* Right Links */}
        <div>
          <h3 className="font-bold mb-3">Resources</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm pt-10 mt-10 border-t border-gray-700">
        © {new Date().getFullYear()} MediVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
