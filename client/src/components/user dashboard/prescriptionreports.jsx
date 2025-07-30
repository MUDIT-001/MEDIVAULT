import React, { useState } from "react";
import { FaDownload, FaTrash, FaEye } from "react-icons/fa";
import { FiTag, FiCalendar } from "react-icons/fi";

const dummyData = [
  {
    name: "Blood Test Results - Complete Panel",
    date: "Jan 15, 2025",
    size: "2.4 MB",
    tags: ["#BloodTest", "#Lab", "#Routine"],
  },
  {
    name: "Cardiology Consultation Notes",
    date: "Jan 8, 2025",
    size: "0.9 MB",
    tags: ["#Cardiology", "#Consultation", "#Heart"],
  },
  {
    name: "Chest X-Ray Report",
    date: "Jan 10, 2025",
    size: "5.8 MB",
    tags: ["#XRay", "#Imaging", "#Chest"],
  },
  {
    name: "Diabetes Medication Prescription",
    date: "Dec 28, 2024",
    size: "0.7 MB",
    tags: ["#Diabetes", "#Prescription", "#Metformin"],
  },
  {
    name: "Malaria Treatment Prescription",
    date: "Jan 12, 2025",
    size: "1.2 MB",
    tags: ["#Malaria", "#Prescription", "#Antimalarial"],
  },
  {
    name: "MRI Brain Scan",
    date: "Dec 25, 2024",
    size: "12.3 MB",
    tags: ["#MRI", "#Brain", "#Imaging"],
  },
];

const PrescriptionReports = ({ onBack }) => {
  const [search, setSearch] = useState("");

  const filteredData = dummyData.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-6 py-6">
      {/* Back Button */}

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Prescriptions & Records</h2>
          <p className="text-gray-500">
            Manage your medical documents with tags and filters
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Upload Document
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-3 mb-4 items-center">
        <input
          type="text"
          placeholder="Search documents and tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 border rounded w-full md:w-auto"
        />
        <button className="flex items-center gap-1 border px-3 py-2 rounded text-sm">
          <FiTag /> Tags
        </button>
        <button className="flex items-center gap-1 border px-3 py-2 rounded text-sm">
          <FiCalendar /> Date Range
        </button>
        <select className="border p-2 rounded text-sm">
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Document Count */}
      <p className="mb-4 text-gray-500">
        Showing {filteredData.length} of {dummyData.length} documents
      </p>

      {/* Document Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredData.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-sm p-4 flex flex-col justify-between"
          >
            <div className="mb-2">
              <h3 className="font-semibold text-md">{doc.name}</h3>
              <p className="text-sm text-gray-500">
                {doc.date} • {doc.size}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              {doc.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <button className="hover:text-black flex items-center gap-1">
                <FaEye /> View
              </button>
              <button className="hover:text-black flex items-center gap-1">
                <FaDownload /> Download
              </button>
              <button className="hover:text-red-500 flex items-center gap-1">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionReports;
