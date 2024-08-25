import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';  // Importing CSS for styling

// Import local logos and hamburger icon
import DashboardLogo from '../assets/logos/bar-chart-10.png';
import Frame from '../assets/logos/Frame.svg';
import AssignedLogo from '../assets/logos/user-check-01.svg';
import Under25Logo from '../assets/logos/under25.png';
import HamburgerIcon from '../assets/logos/hamburger.svg';  // Custom hamburger icon

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <img src={Under25Logo} alt="Under25 Logo" />
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <img src={HamburgerIcon} alt="Menu" />
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <img src={DashboardLogo} alt="Dashboard" className="icon" />
            {isOpen && 'Dashboard'}
          </Link>
        </li>
        <li className={location.pathname === '/opportunities' ? 'active' : ''}>
          <Link to="/opportunities">
            <img src={Frame} alt="Opportunities" className="icon" />
            {isOpen && 'Opportunities'}
          </Link>
        </li>
        <li className={location.pathname === '/assigned-to-me' ? 'active' : ''}>
          <Link to="/assigned-to-me">
            <img src={AssignedLogo} alt="Assigned to Me" className="icon" />
            {isOpen && 'Assigned to Me'}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
