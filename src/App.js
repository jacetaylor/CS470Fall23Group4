import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setMessage('All fields are required');
    } else {
      setMessage('Registration successful');
      // Replace with actual registration logic (e.g., sending data to a server)
    }
  };

  return (
    <div className="App">
      <h1>Customer Registration</h1>
      <div className="form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button onClick={handleRegistration}>Register</button>
        </div>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;


