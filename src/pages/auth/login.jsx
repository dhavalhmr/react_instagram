import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:2000/auth/login',
        { username, password },
        { withCredentials: true }
      );

      if (response.redirected) {
        window.location.href = response.url;
        return;
      }

      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);

      setError('');
      console.log('Login successful');
      if (response.status !== 200) {
        const errorData = response.error.errors[0];
        throw new Error(errorData.message);
      } else {
        console.log('true');
        navigate('/homepage');
      }
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
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              id="username"
              type="text"
              placeholder="Phone number, username, or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
            <label htmlFor="username">Phone number, username, or email</label>
          </div>
          <div className="field">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
          {error && <p className="error">{error}</p>}
          <button className="login-button" title="Login" type="submit">
            Log In
          </button>
          <div className="separator">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <div className="other">
            <button className="fb-login-btn" type="button">
              <i className="fa fa-facebook-official fb-icon"></i>
              <span className="">Log in with Facebook</span>
            </button>
            <a className="forgot-password" href="login">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      <div className="box">
        <p>
          Don't have an account?{' '}
          <a className="signup" href="signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
