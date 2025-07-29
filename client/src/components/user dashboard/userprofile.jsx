import { useState, useEffect } from "react";

const getBmiLabel = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal";
  if (bmi < 29.9) return "Overweight";
  return "Obese";
};

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "pranjali35",
    fullName: "Pranjali Desai",
    age: 35,
    gender: "Female",
    bloodGroup: "B+",
    height: 162,
    weight: 58,
    bmi: "",
    cholesterol: 170,
    allergies: "Penicillin, Pollen",
    chronicConditions: "Type 2 Diabetes, Hypertension",
    medications: "Metformin 500mg (daily), Amlodipine 5mg (daily)",
    surgeries: "Gallbladder Removal (2021)",
    covidVaccine: "2 doses, booster due in Sept 2025",
    tetanus: "2023",
    address: "12, Shraddha Residency, Pune",
    emergencyContact: {
      name: "Ankit Desai",
      relation: "Husband",
      phone: "98765XXXXX"
    }
  });

  useEffect(() => {
    const heightInMeters = profile.height / 100;
    const bmiCalc = (profile.weight / (heightInMeters ** 2)).toFixed(1);
    setProfile(prev => ({ ...prev, bmi: bmiCalc }));
  }, [profile.height, profile.weight]);

  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleEmergencyChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      emergencyContact: { ...prev.emergencyContact, [field]: value }
    }));
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src="/user-icon.png"
            alt="User"
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
          />
          <div>
            <input
              disabled={!isEditing}
              className={`text-xl font-semibold ${
                isEditing ? "border-b-2 border-blue-400" : ""
              } bg-transparent`}
              value={profile.username}
              onChange={(e) => handleChange("username", e.target.value)}
            />
            <p className="text-sm text-gray-600">Medical Profile</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 text-white rounded-lg transition ${
            isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <hr className="mb-6" />

      {/* Sections */}
      <SectionBlock title="🧍 Basic Info">
        <Section label="Full Name" field="fullName" value={profile.fullName} onChange={handleChange} isEditing={isEditing} />
        <Section label="Age" field="age" value={profile.age} onChange={handleChange} isEditing={isEditing} />
        <Section label="Gender" field="gender" value={profile.gender} onChange={handleChange} isEditing={isEditing} />
        <Section label="Blood Group" field="bloodGroup" value={profile.bloodGroup} onChange={handleChange} isEditing={isEditing} />
        <Section label="Height (cm)" field="height" value={profile.height} onChange={handleChange} isEditing={isEditing} />
        <Section label="Weight (kg)" field="weight" value={profile.weight} onChange={handleChange} isEditing={isEditing} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">BMI</label>
          <p className="text-gray-900 bg-gray-100 px-4 py-2 rounded">
            {profile.bmi} ({getBmiLabel(profile.bmi)})
          </p>
        </div>
        <Section label="Residential Address" field="address" value={profile.address} onChange={handleChange} isEditing={isEditing} />
      </SectionBlock>

      <SectionBlock title="💊 Medical Info">
        <Section label="Cholesterol (mg/dL)" field="cholesterol" value={profile.cholesterol} onChange={handleChange} isEditing={isEditing} />
        <Section label="Allergies" field="allergies" value={profile.allergies} onChange={handleChange} isEditing={isEditing} />
        <Section label="Chronic Conditions" field="chronicConditions" value={profile.chronicConditions} onChange={handleChange} isEditing={isEditing} />
        <Section label="Medications" field="medications" value={profile.medications} onChange={handleChange} isEditing={isEditing} textarea />
        <Section label="Surgical History" field="surgeries" value={profile.surgeries} onChange={handleChange} isEditing={isEditing} textarea />
      </SectionBlock>

      <SectionBlock title="💉 Vaccination">
        <Section label="COVID-19 Vaccine" field="covidVaccine" value={profile.covidVaccine} onChange={handleChange} isEditing={isEditing} />
        <Section label="Tetanus Vaccine" field="tetanus" value={profile.tetanus} onChange={handleChange} isEditing={isEditing} />
      </SectionBlock>

      <SectionBlock title="🚨 Emergency Contact">
        <Section
          label="Name"
          value={profile.emergencyContact.name}
          field="name"
          onChange={(f, v) => handleEmergencyChange("name", v)}
          isEditing={isEditing}
        />
        <Section
          label="Relation"
          value={profile.emergencyContact.relation}
          field="relation"
          onChange={(f, v) => handleEmergencyChange("relation", v)}
          isEditing={isEditing}
        />
        <Section
          label="Phone"
          value={profile.emergencyContact.phone}
          field="phone"
          onChange={(f, v) => handleEmergencyChange("phone", v)}
          isEditing={isEditing}
        />
      </SectionBlock>

      <div className="mt-8 text-right">
        <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
          Sign Out
        </button>
      </div>
    </div>
  );
};

const SectionBlock = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
);

const Section = ({ label, value, field, onChange, isEditing, textarea = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {isEditing ? (
      textarea ? (
        <textarea
          className="w-full border px-3 py-2 rounded-md"
          value={value}
          rows={2}
          onChange={(e) => onChange(field, e.target.value)}
        />
      ) : (
        <input
          type="text"
          className="w-full border px-3 py-2 rounded-md"
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
        />
      )
    ) : (
      <p className="text-gray-900 bg-gray-100 px-4 py-2 rounded">{value}</p>
    )}
  </div>
);

export default ProfilePage;