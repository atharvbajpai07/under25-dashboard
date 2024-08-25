import React from "react";
import MultiProgressBar from "../helpers/MultiProgressBar";
import "./Card1.css";
import { MenuItem, Select } from "@mui/material";

function Card1({ totalOpportunities, value1, value2, value3 }) {
  const percentage1 = (value1 / totalOpportunities) * 100;
  const percentage2 = (value2 / totalOpportunities) * 100;
  const percentage3 = (value3 / totalOpportunities) * 100;

  return (
    <div className="card1-app1">
      <div className="card-header-app1">
        <div className="title-container">
        <h3 className="secondary-text-app1">Total No. of Opportunities</h3>
        <h1 className="primary-text-app1 total-amount-app1">
          {(totalOpportunities / 1000).toFixed(1)}k
        </h1>
        </div>
        <Select defaultValue="All time" variant="outlined" size="small">
          <MenuItem value="All time">All time</MenuItem>
        </Select>
      </div>
      <div className="card-content-app1">
        
        <MultiProgressBar
          progressValues={[percentage1, percentage2, percentage3]}
          colors={["#FD904B", "#334BFF", "#67AB75"]}
        />
        <div className="legend-app1">
          <div className="legend-item1-app1">
            <div
              className="legend-color-app1"
              style={{ backgroundColor: "#FD904B" }}
            ></div>
            <span className="primary-text-app1">
              {(value1 / 1000).toFixed(1)}k
            </span>
            <span className="secondary-text-app1 card-objective-app1">
              No. of Missions
            </span>
          </div>
          <div className="legend-item1-app1">
            <div
              className="legend-color-app1"
              style={{ backgroundColor: "#334BFF" }}
            ></div>
            <span className="primary-text-app1">
              {(value2 / 1000).toFixed(1)}k
            </span>
            <span className="secondary-text-app1 card-objective-app1">
              No. of Giveaways
            </span>
          </div>
          <div className="legend-item1-app1">
            <div
              className="legend-color-app1"
              style={{ backgroundColor: "#67AB75" }}
            ></div>
            <span className="primary-text-app1">
              {(value3 / 1000).toFixed(1)}k
            </span>
            <span className="secondary-text-app1 card-objective-app1">
              No. of Jobs/Internship
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
