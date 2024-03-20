import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Homepage from './pages/Homepage';
import { UnAuthRoute, UserAuthRoute } from './routes/RouteComponent';

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
      </Routes>
    </div>
  );
}

export default App;
