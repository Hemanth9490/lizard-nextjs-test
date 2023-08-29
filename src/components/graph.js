'use client';
import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

const ChartComponent = ({ data }) => {
  // console.log(data, 'data');
  useEffect(() => {
    createChart();
  }, []);

  const createChart = () => {
    c3.generate({
      bindto: '#chart',
      size: {
        height: 180,
        width: 1050,
      },
      color: {
        pattern: ['#FF8110']
      },
      data: {
        columns: [['Out of range Alerts', 30, 200, 100]],
        type: 'bar',
      },
      axis: {
        rotated: true,
      },
    });
  };

  return <div id="chart" className="w-[500px]"></div>;
};

export default ChartComponent;
