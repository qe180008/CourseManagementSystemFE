import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Tạo dữ liệu form dưới dạng x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:5180/Auth/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Gửi dữ liệu với kiểu này
        }
      });

      console.log('Login successful:', response.data);

      // Lưu token vào localStorage
      localStorage.setItem('token', response.data.Token);

      // Điều hướng đến trang Home 
      navigate('/');
    } catch (err) {
      setError('Tên đăng nhập hoặc mật khẩu không chính xác.');
      console.error('Login error:', err);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">Username</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Username"
            className="mt-2 w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="mt-2 w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="text-red-500 mb-5">{error}</div>} {/* Hiển thị lỗi nếu có */}

        <div className="flex justify-between">
          <div className="mb-5">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className="text-gray-900 ml-2 text-sm">Remember me</label>
          </div>
          <div>
            <a href="/forgot-password" className="hover:underline text-black text-sm">Forgot password?</a>
          </div>
        </div>

        <div className="mb-7 w-full">
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
