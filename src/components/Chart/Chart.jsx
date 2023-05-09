import React from 'react';
import ChartBar from './ChartBar';

const Chart = function (props) {
  const dataPointValues = props.dataPoints.map(e => e.value);
  const totalMaximun = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map(e => (
        <ChartBar
          key={e.label}
          value={e.value}
          label={e.label}
          maxValue={totalMaximun}
        />
      ))}
    </div>
  );
};

export default Chart;
