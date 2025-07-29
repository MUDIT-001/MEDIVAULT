// src/components/userDashboard/Sidebar.jsx
import React from "react";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaFileMedical,
  FaNotesMedical,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const Sidebar = ({
  activeSection,
  setActiveSection,
  setShowCommunityPage,
  setShowMedicalvault,
  setShowHealthDashboard,
}) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "vault", label: "Medical Vault", icon: <FaFileMedical /> },
    { id: "prescriptions", label: "Prescriptions & Reports", icon: <FaNotesMedical /> },
    { id: "health", label: "Health Analytics", icon: <FaChartLine /> },
    { id: "community", label: "Community", icon: <FaUsers /> },
    { id: "profile", label: "User Profile", icon: <FaUserCircle className="text-black text-2xl" /> },
  ];

  const handleClick = (itemId) => {
    if (itemId === "community") {
      setShowCommunityPage(true);
      setShowMedicalvault(false);
      setShowHealthDashboard(false);
    } else if (itemId === "vault") {
      setShowMedicalvault(true);
      setShowCommunityPage(false);
      setShowHealthDashboard(false);
    } else if (itemId === "health") {
      setShowHealthDashboard(true);
      setShowCommunityPage(false);
      setShowMedicalvault(false);
    } else {
      setShowCommunityPage(false);
      setShowMedicalvault(false);
      setShowHealthDashboard(false);
    }
    setActiveSection(itemId);
  };

  return (
    <aside className="w-64 bg-white border-r p-6 fixed top-0 left-0 h-full overflow-y-auto z-10">
      <div className="text-3xl font-bold text-blue-600 mb-10 flex items-center space-x-2">
        <span className="text-purple-600 text-4xl">🩺</span>
        <span>LOGO</span>
      </div>
      <nav className="flex flex-col space-y-6 text-lg">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => handleClick(item.id)}
            className={`flex items-center gap-3 hover:text-blue-600 ${
              activeSection === item.id ? "text-blue-600 font-semibold" : ""
            }`}
          >
            {item.icon} {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
