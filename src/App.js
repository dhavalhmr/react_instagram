import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { UnAuthRoute, UserAuthRoute } from './routes/RouteComponent';
import './App.css';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth">
          <Route path="login" element={<UnAuthRoute Component={Login} />} />
          <Route path="signup" element={<UnAuthRoute Component={Signup} />} />
        </Route>
        <Route
          path="/homepage"
          element={<UserAuthRoute Component={Homepage} />}
        />
        <Route
          path="/profile"
          element={<UserAuthRoute Component={Profile} />}
        />
      </Routes>
    </div>
  );
}

export default App;
