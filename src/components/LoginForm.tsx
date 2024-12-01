import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onLogin?: () => void; // Make onLogin optional
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form refresh
  
    console.log('Submitting form:', formData); // Log form data for debugging
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log('Response from server:', data); // Log server response for debugging
  
      if (response.ok) {
        localStorage.setItem('token', data.token); // Store the token for authentication
        console.log('Login successful!');
        navigate('/')
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err.message);
      setError(err.message); // Update the error state
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 w-full rounded mb-4"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full rounded mb-4"
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
