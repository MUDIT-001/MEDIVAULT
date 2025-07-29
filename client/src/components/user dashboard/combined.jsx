// src/components/userDashboard/UserDashboard.jsx
import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaFileMedical,
  FaNotesMedical,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

import Sidebar from "./sidebar";
import Community from "./community";
import ProfilePage from "./userprofile";
import HealthDashboard from "./healthdashboard";
import ViewRecords from "./medicalvault"; // Replaced inline ViewRecords
import PrescriptionReports from "./prescriptionreports";

const CombinedDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showCommunityPage, setShowCommunityPage] = useState(false);
  const [showMedicalvault, setShowMedicalvault] = useState(false);
  const [showHealthDashboard, setShowHealthDashboard] = useState(false);
  const [showPrescriptionsPage, setShowPrescriptionsPage] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false);


  const reports = [
    { title: "Blood Test Report", date: "Jan 15, 2025" },
    { title: "Prescription - Dr. Smith", date: "Jan 12, 2025" },
    { title: "X-Ray Results", date: "Jan 10, 2025" },
    { title: "Annual Checkup", date: "Dec 28, 2024" },
    { title: "Medication List", date: "Dec 25, 2024" },
    { title: "Allergy Test", date: "Dec 20, 2024" },
  ];
   const vitals = [
    { name: "Blood Pressure", value: "120/80 mmHg", color: "bg-red-100" },
    { name: "Blood Sugar", value: "95 mg/dL", color: "bg-green-100" },
    { name: "Cholesterol", value: "180 mg/dL", color: "bg-purple-100" },
  ];
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "vault", label: "Medical Vault", icon: <FaFileMedical /> },
    { id: "prescriptions", label: "Prescriptions & Reports", icon: <FaNotesMedical /> },
    { id: "health", label: "Health Analytics", icon: <FaChartLine /> },
    { id: "community", label: "Community", icon: <FaUsers /> },
    { id: "profile", label: "User Profile", icon: <FaUserCircle className="text-black text-2xl" /> },
  ];

return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setShowCommunityPage={setShowCommunityPage}
        setShowMedicalvault={setShowMedicalvault}
        setShowHealthDashboard={setShowHealthDashboard}
      />

      {showCommunityPage ? (
        <div className="ml-64 flex-1 overflow-y-auto bg-gray-50 p-8">
          <button className="mb-6 text-blue-600 hover:underline" onClick={() => setShowCommunityPage(false)}>
            ← Back to Dashboard
          </button>
          <Community />
        </div>
      ) : showMedicalvault ? (
        <div className="ml-64 flex-1 overflow-y-auto bg-gray-50 p-8">
          <button className="mb-6 text-blue-600 hover:underline" onClick={() => setShowMedicalvault(false)}>
            ← Back to Dashboard
          </button>
          <ViewRecords />
        </div>
      ) : showHealthDashboard ? (
        <div className="ml-64 flex-1 overflow-y-auto bg-gray-50 p-8">
          <button className="mb-6 text-blue-600 hover:underline" onClick={() => setShowHealthDashboard(false)}>
            ← Back to Dashboard
          </button>
          <HealthDashboard />
        </div>
      ) : showPrescriptionsPage ? (
        <div className="ml-64 flex-1 overflow-y-auto bg-gray-50 p-8">
          <button className="mb-6 text-blue-600 hover:underline" onClick={() => setShowPrescriptionsPage(false)}>
            ← Back to Dashboard   
            </button>
            <PrescriptionReports/>
            </div>
      ) : showProfilePage ? (
       <div className="ml-64 flex-1 overflow-y-auto bg-gray-50 p-8">
         <button className="mb-6 text-blue-600 hover:underline" onClick={() => setShowProfilePage(false)}>
           ← Back to Dashboard
          </button>
          <ProfilePage />
          </div>
)
 : (
        <main className="ml-64 flex-1 p-8 overflow-y-auto scroll-smooth space-y-8">
          <section id="dashboard" className="scroll-mt-24">
            <h1 className="text-3xl font-bold mb-6">Welcome back to MediVault 👋</h1>
          </section>

          <section id="vault" className="scroll-mt-24 w-full bg-blue-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">Medical Vault</h2>
            <p className="text-gray-600 mb-4">Store and manage your medical documents securely.</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
              onClick={() => setShowMedicalvault(true)}
            >
              View Records
            </button>
          </section>

          <section id="prescriptions" className="scroll-mt-24 w-full bg-blue-100 p-6 rounded-2xl shadow border">
            <h2 className="text-xl font-bold mb-4">Prescription and reports</h2>
            <p className="text-gray-600 mb-4">View and manage your prescriptions and medical reports.</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
              onClick={() => setShowPrescriptionsPage(true)}
            >
              View Prescriptions and Reports
            </button>
          </section>

          <section id="health" className="scroll-mt-24">
             <HealthDashboard />
          </section>
          <section id="community" className="scroll-mt-24 w-full bg-blue-100 p-6 rounded-2xl shadow border">
            <h2 className="text-xl font-bold mb-4">Community</h2>
            <p className="text-gray-600 mb-4">Connect with others and share experiences.</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
              onClick={() => setShowCommunityPage(true)}
            >
              Explore Community
            </button>
          </section>

          <section id="profile" className="scroll-mt-24 w-full bg-blue-100 p-6 rounded-2xl shadow border">
            <h2 className="text-xl font-bold">User Profile</h2>
            <p className="text-gray-600 mb-4">Manage your profile and settings.</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
              onClick={() => setShowProfilePage(true)}
            >
              User Profile
            </button>

          </section>
        </main>
      )}
    </div>
  );
};

export default CombinedDashboard;

