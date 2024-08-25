import React from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import './Header.css';
import UserAvatar from "../assets/logos/Rectangle 77.svg"

function Header() {
  const location = useLocation();

  const renderRouteName = () => {
    if (location.pathname === '/') {
      return <div>
       <h2>Dashboard</h2>
       <p>Opportunity analysis</p> </div>;
    }
    return null;
  };

  const renderRightContent = () => {
    return (
      <div className="right-content">
        {location.pathname !== '/' && (
          <Button variant="contained" color="primary">
            + Create Mission
          </Button>
        )}
        <div className="user-details">
          <p>Welcome,</p>
          <h3>John Doe</h3>
        </div>
        <img src={UserAvatar} alt="Under25 Logo" />
        </div>
    );
  };

  return (
    <div className="header">
      <div className="left-content">
        {renderRouteName()}
      </div>
      {renderRightContent()}
    </div>
  );
}

export default Header;
