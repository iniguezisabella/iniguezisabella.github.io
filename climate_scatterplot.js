// const data = d3.csv('https://iniguezisabella.github.io/globalTempsData.csv');
// // const data = [
// //     { year: 2020, Jan: 5, Feb: 6, Mar: 10, Apr: 15, May: 20, Jun: 25, Jul: 30, Aug: 29, Sep: 22, Oct: 16, Nov: 10, Dec: 5 },
// //     { year: 2021, Jan: 4, Feb: 5, Mar: 9, Apr: 14, May: 19, Jun: 24, Jul: 29, Aug: 28, Sep: 21, Oct: 15, Nov: 9, Dec: 4 },
// //     // ... more data points for different years
// //   ];
// const margin = { top: 20, right: 20, bottom: 30, left: 50 },
// width = 800 - margin.left - margin.right,
// height = 500 - margin.top - margin.bottom;

// const svg = d3.select("svg")
// .attr("width", width + margin.left + margin.right)
// .attr("height", height + margin.top + margin.bottom)
// .append("g")
// .attr("transform", `translate(${margin.left},${margin.top})`);

// const x = d3.scaleBand()
// .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
// .range([0, width]);

// const y = d3.scaleLinear()
// .domain([-10, 40])
// .nice()
// .range([height, 0]);

// const xAxis = d3.axisBottom(x);
// const yAxis = d3.axisLeft(y);

// svg.append("g")
// .attr("class", "x axis")
// .attr("transform", `translate(0,${height})`)
// .call(xAxis);

// svg.append("g")
// .attr("class", "y axis")
// .call(yAxis);

// const update = (year) => {
// const filteredData = data.find(d => d.year === year);
// const months = Object.keys(filteredData).filter(key => key !== 'year');
// const points = months.map(month => ({ month, temp: filteredData[month] }));

// const circles = svg.selectAll(".point")
//     .data(points, d => d.month);

// circles.enter().append("circle")
//     .attr("class", "point")
//     .attr("cx", d => x(d.month) + x.bandwidth() / 2)
//     .attr("cy", d => y(d.temp))
//     .attr("r", 5)
//     .merge(circles)
//     .transition()
//     .duration(500)
//     .attr("cx", d => x(d.month) + x.bandwidth() / 2)
//     .attr("cy", d => y(d.temp));

// circles.exit().remove();
// };

// d3.select("#yearSlider").on("input", function() {
// const year = +this.value;
// d3.select("#yearLabel").text(year);
// update(year);
// });

// update(2020); // Initial

// Define margins and dimensions
const margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = 800 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// Create an SVG container
const svg = d3.select("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Define scales
const x = d3.scaleBand()
.domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
  .range([0, width]);

const y = d3.scaleLinear()
  .domain([-0.02, 0.03]) // data range: 0.02664, -0.01044
  .nice()
  .range([height, 0]);

// Define axes
const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y);

// Append axes to the SVG
svg.append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0,${height})`)
  .call(xAxis);

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

  // Update function to update the scatter plot
  const update = (year) => {
    const filteredData = data.find(d => d.year === year);
    const months = Object.keys(filteredData).filter(key => key !== 'year');
    const points = months.map(month => ({ month, temp: filteredData[month] }));

    const circles = svg.selectAll(".point")
      .data(points, d => d.month);

    circles.enter().append("circle")
      .attr("class", "point")
      .attr("cx", d => x(d.month) + x.bandwidth() / 2)
      .attr("cy", d => y(d.temp))
      .attr("r", 5)
      .merge(circles)
      .transition()
      .duration(500)
      .attr("cx", d => x(d.month) + x.bandwidth() / 2)
      .attr("cy", d => y(d.temp));

    circles.exit().remove();
  };
  
// Load CSV data // https://iniguezisabella.github.io/globalTempsData.csv
d3.csv('/Users/isabellainiguez/git/iniguezisabella.github.io/globalTempsData.csv').then(data => { 
  // Convert numerical values from strings to numbers
  data.forEach(d => {
    d.year = +d.year;
    for (let month in d) {
      if (month !== "year") {
        d[month] = +d[month];
      }
    }
  });

  // Event listener for the slider
  d3.select("#yearSlider").on("input", function() {
    const year = +this.value;
    d3.select("#yearLabel").text(year);
    update(year);
  });

  update(2023); // Initial render
});