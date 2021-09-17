$(document).ready(function(){
  $('#start_pop_compare').click(function(){
    $('#choice_area').addClass('invisible');
    $('#pop_compare_area').removeClass('invisible');
  });

  $('#return2choices').click(function(){
    $('#pop_compare_area').addClass('invisible');
    $('#choice_area').removeClass('invisible');
  });
 });

// Line Graph
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August'
];
const lineData = {
  labels: months.slice(0,6),
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 11, 15, 25, 20, 15],
  }]
};

const lineConfig = {
  type: 'line',
  data: lineData,
  options: {}
};

var line_area = document.getElementById('lineChart');
var myLineChart = new Chart(line_area, lineConfig);

// Bar Graph

const labels = months.slice(0,7);
const barData = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
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
      'rgb(255, 99, 132)',
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

const barConfig = {
  type: 'bar',
  data: barData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

var bar_area = document.getElementById('barChart');
var myBarChart = new Chart(bar_area, barConfig);

// Donut Chart

const donutData = {
  labels: [
    'Angry',
    'Sad',
    'Neutral'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const donutConfig = {
  type: 'doughnut',
  data: donutData,
};

var donut_area = document.getElementById('donutChart');
var myDonutChart = new Chart(donut_area, donutConfig);

// Pie Chart

const pieData = {};

const pieConfig = {
  type: 'pie',
  data: pieData,
};