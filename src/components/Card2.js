import React from 'react';
import {CardContent, MenuItem, Select, Typography} from '@mui/material';
import './Card2.css';

const Card2 = ({total = 6400, brandedPercentage = 60, nonBrandedPercentage = 20}) => {
    return (
        <div className="card2-app2">
            <div className="card2-header">
                <Typography variant="subtitle2" className="title">
                    Branded vs Non-Branded
                </Typography>
                <Select defaultValue="All time" variant="outlined" size="small">
                    <MenuItem value="All time">All time</MenuItem>
                </Select>
            </div>
            <Typography variant="h4" className="total-text">
                {(total / 1000).toFixed(1)} K Total
            </Typography>
            <div className="card2-body">
                <div className="donut-chart">
                    <svg width="100" height="100" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" cx="21" cy="21" r="15.915" fill="#fff"></circle>
                        <circle className="donut-ring" cx="21" cy="21" r="15.915" fill="transparent" stroke="#e6e6e6"
                                strokeWidth="3"></circle>

                        <circle
                            className="donut-segment branded-segment"
                            cx="21"
                            cy="21"
                            r="15.915"
                            fill="transparent"
                            stroke="#FBBC04"
                            strokeWidth="3"
                            strokeDasharray={`${brandedPercentage} ${100 - brandedPercentage}`}
                            strokeDashoffset="25"
                        ></circle>
                    </svg>
                </div>
                <div className="legend">
                    <div className="legend-item">
                        <span className="dot branded-dot"></span>
                        <Typography variant="body2">Branded</Typography>
                        <Typography variant="body2" className="percentage">{brandedPercentage}%</Typography>
                    </div>
                    <div className="legend-item">
                        <span className="dot non-branded-dot"></span>
                        <Typography variant="body2">Non-Branded</Typography>
                        <Typography variant="body2" className="percentage">{nonBrandedPercentage}%</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;
