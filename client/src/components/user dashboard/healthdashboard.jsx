// src/components/userDashboard/HealthDashboard.jsx
import React, { useState } from "react";

const HealthDashboard = () => {
  const [showAddData, setShowAddData] = useState(false);
  const [data, setData] = useState({
    bp: { systolic: 120, diastolic: 80, date: "2025-07-25" },
    sugar: { value: 95, fasting: true, date: "2025-07-25" },
    cholesterol: { value: 90, date: "2025-07-25" },
  });

  const [form, setForm] = useState({
    systolic: "",
    diastolic: "",
    sugar: "",
    fasting: "true",
    cholesterol: "",
    date: "",
  });

  const classifyBP = (s, d) => {
    if (s < 90 || d < 60) return "Low";
    if (s <= 120 && d <= 80) return "Normal";
    if (s <= 139 || d <= 89) return "Elevated";
    return "High";
  };

  const classifySugar = (value, fasting) => {
    if (fasting === "true") {
      if (value < 70) return "Low";
      if (value <= 99) return "Optimal";
      return "High";
    } else {
      if (value < 140) return "Optimal";
      return "High";
    }
  };

  const classifyCholesterol = (value) => {
    if (value < 100) return "Serious";
    if (value < 200) return "Normal";
    return "High";
  };

  const handleSubmit = () => {
    setData({
      bp: {
        systolic: form.systolic,
        diastolic: form.diastolic,
        date: form.date,
      },
      sugar: {
        value: form.sugar,
        fasting: form.fasting === "true",
        date: form.date,
      },
      cholesterol: {
        value: form.cholesterol,
        date: form.date,
      },
    });
    setShowAddData(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Health Analytics</h2>
        <button
          onClick={() => setShowAddData(!showAddData)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
        >
          {showAddData ? "Close" : "Add Data"}
        </button>
      </div>

      {showAddData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-xl shadow-inner">
          <div>
            <label className="block text-sm mb-1">Systolic / Diastolic</label>
            <input
              type="number"
              placeholder="Systolic"
              className="w-full mb-1 p-2 border rounded"
              onChange={(e) => setForm({ ...form, systolic: e.target.value })}
            />
            <input
              type="number"
              placeholder="Diastolic"
              className="w-full p-2 border rounded"
              onChange={(e) => setForm({ ...form, diastolic: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Blood Sugar</label>
            <input
              type="number"
              placeholder="mg/dL"
              className="w-full p-2 border rounded mb-1"
              onChange={(e) => setForm({ ...form, sugar: e.target.value })}
            />
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => setForm({ ...form, fasting: e.target.value })}
            >
              <option value="true">Fasting</option>
              <option value="false">Post Meal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Cholesterol</label>
            <input
              type="number"
              placeholder="mg/dL"
              className="w-full p-2 border rounded mb-2"
              onChange={(e) => setForm({ ...form, cholesterol: e.target.value })}
            />
            <label className="block text-sm mb-1">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <div className="col-span-full mt-4">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-100 p-4 rounded-xl text-center shadow">
          <h4 className="text-lg font-semibold text-red-700">Blood Pressure</h4>
          <p className="text-2xl font-bold text-red-800">
            {data.bp.systolic}/{data.bp.diastolic} mmHg
          </p>
          <p className="text-sm text-red-600">{classifyBP(data.bp.systolic, data.bp.diastolic)}</p>
          <p className="text-xs text-gray-500 mt-1">Measured on: {data.bp.date}</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-xl text-center shadow">
          <h4 className="text-lg font-semibold text-blue-700">Blood Sugar</h4>
          <p className="text-2xl font-bold text-blue-800">{data.sugar.value} mg/dL</p>
          <p className="text-sm text-blue-600">
            {classifySugar(data.sugar.value, data.sugar.fasting.toString())}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {data.sugar.fasting ? "Fasting" : "Post Meal"} • Measured on: {data.sugar.date}
          </p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl text-center shadow">
          <h4 className="text-lg font-semibold text-green-700">Cholesterol</h4>
          <p className="text-2xl font-bold text-green-800">{data.cholesterol.value} mg/dL</p>
          <p className="text-sm text-green-600">
            {classifyCholesterol(data.cholesterol.value)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Measured on: {data.cholesterol.date}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard;
