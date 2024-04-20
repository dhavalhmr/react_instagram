/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useMounted } from '../hooks/useMount';
import '../styles/Homepage.css';
import API from '../api/axiosPrivate';

import Sidenav from '../components/Sidenav';
import Timeline from '../components/Timeline';

function Homepage() {
  // const mounted = useMounted();
  // useEffect(() => {
  //   (async () => {
  //     if (mounted) {
  //       const user = await API.get('/user/get');
  //       console.log("user:", user)
  //     }
  //   })();
  // }, [mounted]);
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
