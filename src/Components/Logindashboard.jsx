import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginDashboard = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    navigate(`/${role}-login`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4">
        <button
          onClick={() => handleLogin('teacher')}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Teacher Login
        </button>
        <button
          onClick={() => handleLogin('parent')}
          className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Parent Login
        </button>
        <button
          onClick={() => handleLogin('principal')}
          className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-700"
        >
          Principal Login
        </button>
        <button
          onClick={() => handleLogin('student')}
          className="w-full py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-700"
        >
          Student Login
        </button>
      </div>
    </div>
  );
};

export default LoginDashboard;
