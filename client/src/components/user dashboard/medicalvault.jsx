// src/components/userDashboard/MedicalVault.jsx
import React, { useState } from "react";
import { FaDownload, FaTrash } from "react-icons/fa";

const MedicalVault = () => {
  const [showRecords, setShowRecords] = useState(false);
  const [documents, setDocuments] = useState([
    { name: "MA Card", type: "PDF" },
    { name: "Disability ID", type: "JPG" },
    { name: "Vaccination", type: "PNG" },
  ]);
  const [documentName, setDocumentName] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleUpload = () => {
    if (!documentName || !category) return;
    setDocuments([...documents, { name: documentName, type: category }]);
    setDocumentName("");
    setCategory("");
  };

  const handleDelete = (index) => {
    const updated = [...documents];
    updated.splice(index, 1);
    setDocuments(updated);
  };

  const handleDownload = (doc) => {
    alert(`Pretending to download: ${doc.name}`);
    // Future: Replace with actual download logic
  };

  return (
    <div id="medical-vault" className="p-6 scroll-mt-24">
        <>
          <h2 className="text-2xl font-semibold mb-2">Medical Vault</h2>
          <p className="text-sm text-gray-500 mb-4">
            All your government medical documents stored securely
          </p>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search medical records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded-md mb-6"
          />

          {/* Upload Section */}
          <div className="border rounded-lg p-4 mb-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Upload New Document</h3>

            <div className="mb-3">
              <input type="file" className="mb-2" />
              <p className="text-xs text-gray-500">File Types: PDF, JPG, PNG</p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <input
                type="text"
                placeholder="Document Name"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
                className="flex-1 border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex-1 border p-2 rounded"
              />
            </div>

            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Upload Document
            </button>
          </div>

          {/* Documents Table */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-3">
              Your Stored Medical Documents
            </h3>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Document</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Tools</th>
                </tr>
              </thead>
              <tbody>
                {documents
                  .filter((doc) =>
                    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((doc, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="p-2">{doc.name}</td>
                      <td className="p-2">{doc.type}</td>
                      <td className="p-2 flex gap-3">
                        <FaDownload
                          onClick={() => handleDownload(doc)}
                          className="text-gray-600 hover:text-black cursor-pointer"
                        />
                        <FaTrash
                          onClick={() => handleDelete(idx)}
                          className="text-gray-600 hover:text-red-500 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
    </div>
  );
};

export default MedicalVault;
