import axios from 'axios';
import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:2000/auth/create',
        { email, name, username, password },
        { withCredentials: true }
      );

      if (response?.data?.user) {
        // window.location.href = 'http://localhost:3000' ;
        return;
      }

      if (!response.ok) {
        const errorData = response.error.errors[0];
        throw new Error(errorData.message);
      }
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="container">
      <div className="box">
        <img
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Logo"
          className="heading"
        />
        <span>Sign up to see photos and videos from your friends.</span>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              id="email"
              type="text"
              placeholder="Mobile number or email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
            <label htmlFor="email">Mobile number or email address</label>
          </div>
          <div className="field">
            <input
              id="fullname"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Full-Name"
            />
            <label htmlFor="fullname">Full Name</label>
          </div>
          <div className="field">
            <input
              id="username"
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="User-Name"
            />
            <label htmlFor="username">User Name</label>
          </div>
          <div className="field">
            <input
              id="password"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
          {error && <p className="error">{error}</p>}
          <button className="login-button" title="Login" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
