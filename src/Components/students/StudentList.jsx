// components/StudentsList.jsx
import React from "react";

const StudentsList = ({ students }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mt-8">Students List</h2>
      <ul className="mt-4">
        {students.map((student, index) => (
          <li key={index} className="py-2 border-b">{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsList;
