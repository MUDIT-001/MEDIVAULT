// src/components/Stats.jsx
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <motion.section
      className="flex justify-between px-[120px] pt-[50px] pb-[40px] items-center font-poppins bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Left Text */}
      <div className="max-w-[45%]">
        <h2 className="text-[28px] font-extrabold text-black mb-3 leading-tight">
          Trust-Building <br /> Statistics at a Glance
        </h2>
      </div>

      {/* Right Stats */}
      <div className="max-w-[50%]">
        <p className="text-[14px] text-gray-700 leading-relaxed mb-6">
          MediVault is committed to being open about how we work, keeping
          your data safe with strong security, and following honest and
          ethical practices in building our healthcare platform from the very
          beginning.
        </p>

        <div className="flex gap-12">
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-700">Encrypted & Secure</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-700">Private & Transparent</p>
          </div>
        </div>

        <p className="text-sm text-[#000] mt-4 underline underline-offset-4 cursor-pointer font-medium">
          Learn more &gt;
        </p>
      </div>
    </motion.section>
  );
};

export default Stats;
