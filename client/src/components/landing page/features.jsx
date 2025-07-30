import React from "react";

const features = [
  {
    title: "Medical vault",
    description: "Securely store and access your government medical documents anytime, anywhere.",
    image: "/11.jpeg",
  },
  {
    title: "Hosp record switch",
    description: "Access complete medical history instantly through a secure Patient ID—no repeats, no delays.",
    image: "/12.jpeg",
  },
  {
    title: "Mental Health Chatbot",
    description: "24/7 AI chatbot for mood tracking, self-care, and compassionate mental health support.",
    image: "/13.jpeg",
  },
  {
    title: "Symptom Checker, diet planner",
    description: "AI-powered symptom checker with instant, personalized diet plans for smarter healing.",
    image: "/14.jpeg",
  },
  {
    title: "Caregiver & Family Access",
    description: "MediVault lets caregivers securely view records and updates, keeping your loved ones informed and involved in your care.",
    image: "/caregiver.jpg",
  },
  {
    title: "Dashboard Insights",
    description: "MediVault’s Dashboard shows clear graphs and charts of your health trends, helping you track progress and make informed decisions easily.",
    image: "/dashboard.jpg",
  },
];

const allFeatures = [...features, ...features];

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-white font-poppins overflow-hidden"
    >
      <div className="px-[120px]">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Key Features of Medi-Vault
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10">
          Discover how Medi-vault is transforming healthcare. Our innovative
          features are designed to enhance access and improve patient outcomes.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-marquee w-max">
          {allFeatures.map((feature, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] h-[380px] bg-gray-100 rounded-md flex flex-col items-center justify-start p-5 shadow-md"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[180px] object-contain bg-white mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-center text-gray-700 px-2 mt-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;