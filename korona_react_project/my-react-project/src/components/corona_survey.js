
import { display } from '@mui/system';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from "react";

export default function Corona_survey() {
  const [patients, setPatients] = useState([]);
  const [month, setMonth] = useState([]);
  const [monthName, setMonthName] = useState('');

  // useEffect(() => {
  //   if (clients.length == 0) {
  //     axios.get('http://localhost:4003/clients/')
  //       .then(response => {
  //         setPatients(response.data);
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }, [patients])

  useEffect(() => {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
    const monthDays = [];
    for (let i = 1; i <= monthEnd.getDate(); i++) {
      monthDays.push(i);
    }
    setMonth(monthDays);
    setMonthName(monthStart.toLocaleString('default', { month: 'long' }));
  }, [])

  const countPatientsByDay = (day) => {
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
    const count = patients.filter(patients => {
      if (patients.positive_result_date && patients.recovery_date) {
        const positiveResultDate = new Date(patients.positive_result_date);
        const recoveryDate = new Date(patients.recovery_date);
        return (
          day >= positiveResultDate.getDate() &&
          day <= recoveryDate.getDate() &&
          positiveResultDate >= startDate &&
          recoveryDate <= endDate
        );
      }
      return false;
    }).length;
    return count;
  }

  const chartData = {
    labels: month,
    datasets: [
      {
        label: 'Active Clients by Day',
        data: month.map(day => countPatientsByDay(day)),
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1
      }
    ]
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      axis: 'y',
      // label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(0, 0, 240)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="chart-container" style={{ width: '1200px', height: '1100px' }}>
      <h2>Csummary view</h2>
      <Line data={data} options={chartOptions} />
    </div>
  );
}