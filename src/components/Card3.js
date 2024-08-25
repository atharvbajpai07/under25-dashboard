import React from 'react';
import { Card, CardContent, Typography, MenuItem, Select } from '@mui/material';
import './Card3.css';

const Card3 = ({ total = 6400, startedPercentage = 60, evaluatingPercentage = 20, completedPercentage = 20 }) => {
  return (
    <Card className="card3-container">
      <CardContent>
        <div className="card3-header">
          <Typography variant="subtitle2" className="title">
            Mission Status
          </Typography>
          <Select defaultValue="All time" variant="outlined" size="small" className="time-select">
            <MenuItem value="All time">All time</MenuItem>
          </Select>
        </div>
        <Typography variant="h4" className="total-text">
          {(total / 1000).toFixed(1)} K Total
        </Typography>
        <div className="card3-body">
        <div className="donut-chart">
          <svg width="100" height="100" viewBox="0 0 42 42" className="donut">
            <circle className="donut-hole" cx="21" cy="21" r="15.915" fill="#fff"></circle>
            <circle className="donut-ring" cx="21" cy="21" r="15.915" fill="transparent" stroke="#e6e6e6" strokeWidth="10"></circle>

            <circle
              className="donut-segment started-segment"
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke="#4285F4"
              strokeWidth="10"
              strokeDasharray={`${startedPercentage} ${100 - startedPercentage}`}
              strokeDashoffset="25"
            ></circle>
            <circle
              className="donut-segment evaluating-segment"
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke="#FBBC05"
              strokeWidth="3"
              strokeDasharray={`${evaluatingPercentage} ${100 - evaluatingPercentage}`}
              strokeDashoffset={25 - startedPercentage}
            ></circle>
            <circle
              className="donut-segment completed-segment"
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke="#34A853"
              strokeWidth="3"
              strokeDasharray={`${completedPercentage} ${100 - completedPercentage}`}
              strokeDashoffset={25 - startedPercentage - evaluatingPercentage}
            ></circle>
          </svg>
        </div>
        <div className="legend">
          <div className="legend-item">
            <span className="dot started-dot"></span>
            <Typography variant="body2">Started</Typography>
            <Typography variant="body2" className="percentage">{startedPercentage}%</Typography>
          </div>
          <div className="legend-item">
            <span className="dot evaluating-dot"></span>
            <Typography variant="body2">Evaluating</Typography>
            <Typography variant="body2" className="percentage">{evaluatingPercentage}%</Typography>
          </div>
          <div className="legend-item">
            <span className="dot completed-dot"></span>
            <Typography variant="body2">Completed</Typography>
            <Typography variant="body2" className="percentage">{completedPercentage}%</Typography>
          </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Card3;
