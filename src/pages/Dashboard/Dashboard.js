import React from "react";
import Card1 from "../../components/Card1";
import Card2 from "../../components/Card3";
import Card3 from "../../components/Card2";
import "./Dashboard.css";
import InfoSection from "../../components/InfoSection";
import OpportunityChart from "../../components/OpportunityChart";
import BasicLineChart from "../../components/BasicLineChart";

function Dashboard() {
  const totalOpportunities = 6400;
  const value1 = 2300;
  const value2 = 2000;
  const value3 = 2100;

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-card-container">
          <div className="card1-container">
            <Card1
              totalOpportunities={totalOpportunities}
              value1={value1}
              value2={value2}
              value3={value3}
            />
          </div>
          <div className="card3-container">
            <Card3
              started={30}
              evaluating={50}
              completed={20}
              totalOpportunities={totalOpportunities}
            />
          </div>
          <div className="card2-container">
            <Card2
              branded={60}
              nonBranded={40}
              totalOpportunities={totalOpportunities}
            />
          </div>
          
        </div>
        <InfoSection />
        <div className="chart-container">
          <div className="opportunit-chart-container">
            <OpportunityChart />
          </div>

          <div className="basic-line-chart-container">
            <BasicLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
