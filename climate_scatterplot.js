const data = await d3.csv('https://iniguezisabella.github.io/globalTempsData.csv');

const margin = { top: 20, right: 20, bottom: 30, left: 50 },
width = 800 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

const svg = d3.select("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleBand()
.domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
.range([0, width]);

const y = d3.scaleLinear()
.domain([-10, 40])
.nice()
.range([height, 0]);

const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y);

svg.append("g")
.attr("class", "x axis")
.attr("transform", `translate(0,${height})`)
.call(xAxis);

svg.append("g")
.attr("class", "y axis")
.call(yAxis);

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

d3.select("#yearSlider").on("input", function() {
const year = +this.value;
d3.select("#yearLabel").text(year);
update(year);
});

update(2020); // Initial
