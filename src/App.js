import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Opportunities from './pages/Opportunities/Opportunities';
import AssignedToMe from './pages/AssignedToMe/AssignedToMe';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';  // Import global CSS

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Header isSidebarOpen={isSidebarOpen} />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/assigned-to-me" element={<AssignedToMe />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
