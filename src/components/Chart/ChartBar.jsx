import React from 'react';

const ChartBar = function (props) {
  let { value, label, maxValue } = props;

  const barFillHeight =
    maxValue > 0 ? `${Math.round((value / maxValue) * 100)}%` : '0%';

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
