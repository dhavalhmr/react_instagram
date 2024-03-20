import React from 'react';
import '../styles/Homepage.css';

import Sidenav from '../components/Sidenav';
import Timeline from '../components/Timeline'

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
