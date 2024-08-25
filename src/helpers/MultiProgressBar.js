import React from 'react';
import './MultiProgressBar.css';

function MultiProgressBar({ progressValues, colors }) {
  return (
    <div className="multi-progress-bar">
      {progressValues.map((value, index) => (
        <div
          key={index}
          className="progress-segment"
          style={{
            width: `${value}%`,
            backgroundColor: colors[index],
          }}
        ></div>
      ))}
    </div>
  );
}

export default MultiProgressBar;
