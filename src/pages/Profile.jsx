import React from 'react';
import TopNav from '../components/TopNav';
import ViewDashboard from '../components/ViewDashboard';
import ProfileDetails from '../components/ProfileDetails';
import About from '../components/About';
import ProfileButtons from '../components/ProfileButtons';
import Highlights from '../components/Highlights';
import Tabs from '../components/Tabs';
import PostGrid from '../components/PostGrid';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  background-color: #000;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function Profile() {
  return (
    <div>
      <ProfileWrapper>
        <TopNav />
        <ViewDashboard />
        <ProfileDetails />
        <About />
        <ProfileButtons />
        <Highlights />
        <Tabs />
        <PostGrid />
      </ProfileWrapper>
    </div>
  );
}

export default Profile;
