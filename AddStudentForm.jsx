// components/AddStudentForm.jsx
import React, { useState } from "react";

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name });
    setName("");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mt-8">Add New Student</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
