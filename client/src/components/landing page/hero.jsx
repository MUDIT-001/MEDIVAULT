// src/components/Hero.jsx
const Hero = ({ onAuthClick }) => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#e6edff] to-[#e9f0ff] rounded-b-[20px] px-[120px] pt-[100px] pb-[60px] font-poppins"
    >
      <div className="flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-[50%]">
          <h1 className="text-5xl font-bold text-black leading-tight mb-5">
            Empowering Healthcare <br />
            <span className="text-black">Anytime, Anywhere</span>
          </h1>
          <p className="text-gray-600 text-[16px] mb-6 leading-relaxed">
            MediVault is a secure digital gateway to healthcare. <br />
            One can store, access and share medical records with ease. From
            smart donations to mental health support, we bring tomorrow’s
            healthcare to you today.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-[#333] transition"
              onClick={() => onAuthClick("login", "patient")}>
              Donate Supplies
            </button>
            <button className="border-2 border-black px-5 py-2 rounded-full text-black hover:bg-[#0000000c] transition"
              onClick={() => onAuthClick("login", "patient")}>
              Access Records
            </button>
          </div>

          {/* Trusted Stats Line */}
          <p className="text-sm text-gray-500 pt-4">
            ✅ 10,000+ records secured &nbsp;|&nbsp;
            🏥 500+ hospitals connected &nbsp;|&nbsp;
            👤 50K+ users onboard
          </p>
        </div>

        {/* Right Illustration */}
        <div className="w-[45%]">
          <img
            src="/hero_img.png"
            alt="Hero"
            className="w-full max-w-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

