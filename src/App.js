import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './Homepage';
import './App.css';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/auth">
            <Route path="login" Component={Login} />
            <Route path="signup" Component={Signup} />
          </Route>
          <Route path="" Component={Homepage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
