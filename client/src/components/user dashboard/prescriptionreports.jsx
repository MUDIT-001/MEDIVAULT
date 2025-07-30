import React, { useState } from "react";
import { FaDownload, FaTrash, FaEye } from "react-icons/fa";

const PrescriptionReports = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Blood Test Results - Complete Panel",
      date: new Date("2025-01-15"),
      size: "2.4 MB",
      tags: ["#BloodTest", "#Lab", "#Routine"],
    },
    {
      id: 2,
      name: "Cardiology Consultation Notes",
      date: new Date("2025-01-08"),
      size: "0.9 MB",
      tags: ["#Cardiology", "#Consultation", "#Heart"],
    },
    {
      id: 3,
      name: "Chest X-Ray Report",
      date: new Date("2025-01-10"),
      size: "5.8 MB",
      tags: ["#XRay", "#Imaging", "#Chest"],
    },
    {
      id: 4,
      name: "Diabetes Medication Prescription",
      date: new Date("2024-12-28"),
      size: "0.7 MB",
      tags: ["#Diabetes", "#Prescription", "#Metformin"],
    },
    {
      id: 5,
      name: "Malaria Treatment Prescription",
      date: new Date("2025-01-12"),
      size: "1.2 MB",
      tags: ["#Malaria", "#Prescription", "#Antimalarial"],
    },
    {
      id: 6,
      name: "MRI Brain Scan",
      date: new Date("2024-12-25"),
      size: "12.3 MB",
      tags: ["#MRI", "#Brain", "#Imaging"],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const tag = prompt("Enter tags for this document (comma separated):") || "General";
    const newDoc = {
      id: Date.now(),
      name: file.name,
      date: new Date(),
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      tags: tag.split(",").map((t) => `#${t.trim()}`),
      file,
    };
    setDocuments((prev) => [...prev, newDoc]);
  };

  const handleDelete = (id) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleView = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url, "_blank");
  };

  const filteredDocs = documents
    .filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "atoz":
          return a.name.localeCompare(b.name);
        case "ztoa":
          return b.name.localeCompare(a.name);
        case "oldest":
          return a.date - b.date;
        default:
          return b.date - a.date;
      }
    });

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Prescriptions & Reports</h2>

      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <input
          type="file"
          onChange={handleUpload}
          className="file-input file-input-bordered file-input-primary"
        />
        <input
          type="text"
          placeholder="Search by name or tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered"
        />
        <select
          className="select select-bordered"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="atoz">A-Z</option>
          <option value="ztoa">Z-A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="bg-white border rounded-xl p-4 shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold truncate mb-1">{doc.name}</h3>
              <p className="text-sm text-gray-500 mb-1">
                Tags: {doc.tags.map((tag, i) => (
                  <span key={i} className="text-blue-600 mr-2">{tag}</span>
                ))}
              </p>
              <p className="text-sm text-gray-400 mb-3">
                Uploaded: {doc.date.toLocaleDateString()} • {doc.size}
              </p>
            </div>
            {doc.file && (
              <div className="flex justify-between items-center text-sm">
                <button
                  onClick={() => handleView(doc.file)}
                  className="btn btn-sm btn-outline"
                >
                  <FaEye className="mr-1" /> View
                </button>
                <button
                  onClick={() => handleDownload(doc.file)}
                  className="btn btn-sm btn-outline"
                >
                  <FaDownload className="mr-1" /> Download
                </button>
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="btn btn-sm btn-outline btn-error"
                >
                  <FaTrash className="mr-1" /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionReports;
