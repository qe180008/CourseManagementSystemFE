import React, { useState } from 'react';
import axios from 'axios';

function Regester() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  // Hàm gửi yêu cầu đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();

    // Tạo dữ liệu form dưới dạng x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('FullName', fullname);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phonenumber', phone);

    try {
      // Gửi yêu cầu đăng ký đến API
      const response = await axios.post('http://localhost:5180/Auth/register', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Gửi dữ liệu với kiểu này
        }
      });

      console.log('Registration successful:', response.data);

      // Có thể thêm logic để điều hướng hoặc thông báo khi đăng ký thành công
      alert('Đăng ký thành công!');
    } catch (err) {
      setError('Đăng ký không thành công.');
      console.error('Registration error:', err);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        {[
          { content: "Fullname", id: "name", type: "text", placeholder: "Fullname" },
          { content: "Username", id: "username", type: "text", placeholder: "Your username" },
          { content: "Email", id: "email", type: "email", placeholder: "Your email" },
          { content: "Password", id: "password", type: "password", placeholder: "Password" },
          { content: "PhoneNumber", id: "phone", type: "text", placeholder: "PhoneNumber" }
        ].map((element, index) => (
          <div className="" key={index}>
            <label htmlFor={element.id} className="block text-sm font-medium text-gray-900">
              {element.content}
            </label>
            <div className="mt-2 w-full mb-5">
              <input
                id={element.id}
                name={element.id}
                type={element.type}
                placeholder={element.placeholder}
                className="block w-full py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
                value={element.id === 'name' ? fullname : 
                        element.id === 'username' ? username : 
                        element.id === 'email' ? email : 
                        element.id === 'password' ? password : phone}
                onChange={(e) => 
                  element.id === 'name' ? setFullname(e.target.value) :
                  element.id === 'username' ? setUsername(e.target.value) :
                  element.id === 'email' ? setEmail(e.target.value) :
                  element.id === 'password' ? setPassword(e.target.value) :
                  setPhone(e.target.value)
                }
              />
            </div>
          </div>
        ))}
        
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <div className="mb-7 w-full mt-[2rem]">
          <button
            type="submit"
            className="flex w-full justify-center bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-white hover:text-black rounded-lg"
          >
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default Regester;
