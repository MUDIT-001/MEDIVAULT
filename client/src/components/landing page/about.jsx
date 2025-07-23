// src/components/About.jsx

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-gradient-to-br from-[#e6edff] to-[#e9f0ff] rounded-t-[20px] px-[120px] py-[80px] font-poppins"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center">
        {/* Left Side Text */}
        <div className="w-[50%] pr-10">
          <h2 className="text-4xl font-extrabold text-black mb-6">
            Why We Exist
          </h2>

          <p className="text-gray-800 text-[16px] leading-relaxed mb-5">
            We started MediVault because we saw a gap—and felt like it should be fixed. Medical records scattered, patients struggling to switch hospitals, and life-saving supplies going unused—it didn’t sit right with us.
          </p>

          <p className="text-gray-800 text-[16px] leading-relaxed">
            So we built a platform that’s secure, easy to use, and made for everyone. Whether you are a rural patient, a caregiver, or a hospital staff member—MediVault gives you the tools to take control, share securely, and access care smarter. It’s our way of making healthcare more human.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="w-[45%]">
          <img
            src="/abt_img.png" // <- 🖼️ Place this in public/ folder
            alt="Why We Exist"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
