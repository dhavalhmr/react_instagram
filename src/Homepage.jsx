import React from 'react';
import './Homepage.css';
import Sidenav from './pages/navigation/Sidenav';
import Timelime from './pages/timeline/Timeline';

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timelime />
      </div>
    </div>
  );
}

export default Homepage;
