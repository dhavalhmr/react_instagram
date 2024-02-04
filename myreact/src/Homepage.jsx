import React from 'react';
import './Homepage.css';
import Sidenav from './navigation/Sidenav';
import Timelime from './timeline/Timelime';

function Homepage() {
  return (
    <div>
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
