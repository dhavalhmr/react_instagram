import React from 'react';
import './Homepage.css';
import Sidenav from './navigation/Sidenav';
import Timelime from './timeline/Timeline';

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Timelime />
      </div>
      <div className="homepage__timeline">
        <Sidenav />
      </div>
    </div>
  );
}

export default Homepage;
