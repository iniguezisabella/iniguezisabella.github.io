
async function init() {

const data = await d3.csv('https://iniguezisabella.github.io/data/sales.csv');
// const data =
//  [{'Genre': 'Action','NA_Sales': 861.77,'EU_Sales': 516.48,'JP_Sales': 158.65,'Other_Sales': 184.92000000000002,'Global_Sales':1722.84},
//  {'Genre': 'Adventure','NA_Sales': 101.93,'EU_Sales': 63.74,'JP_Sales': 51.99,'Other_Sales': 16.7,'Global_Sales': 234.59},
//  {'Genre': 'C','NA_Sales': 101.93,'EU_Sales': 63.74,'JP_Sales': 51.99,'Other_Sales': 16.7,'Global_Sales': 234.59},
//  {'Genre': 'D','NA_Sales': 861.77,'EU_Sales': 516.48,'JP_Sales': 158.65,'Other_Sales': 184.92000000000002,'Global_Sales':1722.84}]
console.log(data);

var width = 200;
var height = 200;
// var x = d3.scaleBand().domain([0,1,2,3,4,5,6,7,8,9,10,11]).range([0,width]);
var x = d3.scaleBand()
.domain(data.map(d => d.Genre))// .domain(['Action', 'Adventure', 'Fighting', 'Misc', 'Platform', 'Puzzle', 'Racing', 'Role-Playing', 'Shooter', 'Simulation', 'Sports','Strategy'])
.range([0, width])
.padding(0.2);

var y = d3.scaleLinear().domain([0,1800]).range([height,0])
var margin = 50;

d3.select("svg")
  .attr("width", width + 2*margin)
  .attr("height", height + 2*margin)
  .append("g")
   .attr("transform", "translate("+margin+","+margin+")")
  .selectAll('rect').data(data).enter().append('rect') //bars
   .attr("x",function(d,i) {return x(d.Genre);}) // {return x(i);})
   .attr("y",function(d,i) {return y(d.Global_Sales);}) // {return y(d);})
   .attr('width', x.bandwidth())
   .attr('height',function(d,i) {return height - y(d.Global_Sales);})
   .attr("fill", "#69b3a2")

d3.select("svg").append("g")
  .attr("transform", "translate("+margin+","+margin+")")
  .call(d3.axisLeft(y));

d3.select("svg").append("g")
  .attr("transform", "translate("+margin+","+(height+margin)+")")
  .call(d3.axisBottom(x));

}

// ---------------------------------------------------------------

// // set the dimensions and margins of the graph
// const margin = {top: 10, right: 30, bottom: 20, left: 50},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// const svg = d3.select("svg")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

// // Parse the Data "https://iniguezisabella.github.io/data/sales.csv"
// d3.csv("data/sales.csv").then( function(data) {

//   // List of subgroups = header of the csv files = soil condition here
//   const subgroups = data.columns.slice(1)

//   // List of groups = species here = value of the first column called group -> I show them on the X axis
//   const groups = data.map(d => (d.group))

//   // Add X axis
//   const x = d3.scaleBand()
//       .domain(groups)
//       .range([0, width])
//       .padding([0.2])
//   svg.append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(d3.axisBottom(x).tickSizeOuter(0));

//   // Add Y axis
//   const y = d3.scaleLinear()
//     .domain([0, 1750])
//     .range([ height, 0 ]);
//   svg.append("g")
//     .call(d3.axisLeft(y));

//   // color palette = one color per subgroup
//   const color = d3.scaleOrdinal()
//     .domain(subgroups)
//     .range(['#e41a1c','#377eb8','#4daf4a', 'ffff00'])

//   //stack the data? --> stack per subgroup
//   const stackedData = d3.stack()
//     .keys(subgroups)
//     (data)

//   // Show the bars
//   svg.append("g")
//     .selectAll("g")
//     // Enter in the stack data = loop key per key = group per group
//     .data(stackedData)
//     .join("g")
//       .attr("fill", d => color(d.key))
//       .selectAll("rect")
//       // enter a second time = loop subgroup per subgroup to add all rectangles
//       .data(d => d)
//       .join("rect")
//         .attr("x", d => x(d.data.group))
//         .attr("y", d => y(d[1]))
//         .attr("height", d => y(d[0]) - y(d[1]))
//         .attr("width",x.bandwidth())
// })