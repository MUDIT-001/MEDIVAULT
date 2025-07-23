import React from "react";

const CTA = () => {
  return (
    <section className="bg-gradient-to-b from-[#e6edff] to-[#f2f6ff] px-[120px] py-20 font-poppins">
      <h2 className="text-4xl font-extrabold text-center mb-12 leading-tight">
        Who Are You? Find Your Place in <br />
        Our Healthcare Network
      </h2>

      <div className="flex justify-between text-center gap-8 mb-10">
        {/* User Card */}
        <div className="flex-1">
          <img
            src="/1.png"
            alt="User"
            className="w-[60px] h-[60px] mx-auto mb-4"
          />
          <h3 className="font-bold text-lg mb-2">
            For All Users – Smart Health Access for Everyone
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            Patients and general users can log in to view their health records,
            connect with care providers, and access personalized services.
          </p>
          <p className="text-sm text-black font-medium underline underline-offset-4 cursor-pointer">
            Sign In &gt;
          </p>
        </div>

        {/* Organization Card */}
        <div className="flex-1">
          <img
            src="/2.png"
            alt="Org"
            className="w-[60px] h-[60px] mx-auto mb-4"
          />
          <h3 className="font-bold text-lg mb-2">
            For Organizations – Make an Impact
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            Organizations can log in to donate resources, collaborate with NGOs,
            and support healthcare initiatives across the country.
          </p>
          <p className="text-sm text-black font-medium underline underline-offset-4 cursor-pointer">
            Organization Login &gt;
          </p>
        </div>

        {/* Community Card */}
        <div className="flex-1">
          <img
            src="/3.png"
            alt="Community"
            className="w-[60px] h-[60px] mx-auto mb-4"
          />
          <h3 className="font-bold text-lg mb-2">
            Join the Community – Stay Informed & Connected
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            Be part of our public health network! Read and upload blogs, news,
            and articles. Create your profile and make your voice heard.
          </p>
          <p className="text-sm text-black font-medium underline underline-offset-4 cursor-pointer">
            Join the Network &gt;
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
