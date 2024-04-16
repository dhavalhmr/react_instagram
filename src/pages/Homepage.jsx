import React, { useEffect } from 'react';
import '../styles/Homepage.css';
import API from '../api/axiosPrivate';

import Sidenav from '../components/Sidenav';
import Timeline from '../components/Timeline';
import { useMounted } from '../hooks/useMount';

function Homepage() {
  const mounted = useMounted();
  useEffect(() => {
    (async () => {
      if (mounted) {
        const user = await API.get('/user/get');
      }
    })();
  }, [mounted]);
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
