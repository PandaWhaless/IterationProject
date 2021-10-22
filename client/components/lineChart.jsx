import React, { Component } from 'react';
import { Line }  from 'react-chartjs-2';

// update data

const LineChart = (props) => {
  const lala = props.transactions;

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

// what data we need for line chart
// update add transaction to include month, we want to add month manually
  // add dropdown for month

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  return(
  <>
    <div className='header'>
      <h1 className='title'>Line Chart</h1>
      <div className='links'>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
)};

export default LineChart;