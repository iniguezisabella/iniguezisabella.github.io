{/* <html>
    <script src="https://d3js.org/d3.v6.min.js"></script>
    <body onload='init()'>
        <svg width="300" height="300"></svg>
        <script>
            async function init(){
                const data = await d3.csv('https://flunky.github.io/cars2017.csv');

                var width = 300;
                var height = 300;
                var margin = 50;

                var x = d3.scaleLog().base(10).domain([10,150]).range([0,200]); 
                var y = d3.scaleLog().base(10).domain([10,150]).range([200,0]);

                var xaxis = d3.axisBottom(x).tickValues([10,20,50,100]).tickFormat(d3.format("~s"));
                var yaxis = d3.axisLeft(y).tickValues([10,20,50,100]).tickFormat(d3.format("~s"));

                d3.select("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate("+margin+","+margin+")")
                .selectAll('circle').data(data).enter().append('circle')
                .attr("cx",function(d) {return x(d.AverageCityMPG);})
                .attr("cy",function(d) {return y(d.AverageHighwayMPG);})
                .attr("r", function(d) {return 2+1*d.EngineCylinders;})

                d3.select("svg").append("g")
                .attr("transform", "translate("+margin+","+margin+")")
                .call(yaxis);

                d3.select("svg").append("g")
                .attr("transform", "translate("+margin+","+(200+margin)+")")
                .call(xaxis);
            }
        </script>
    </body>
</html> */}



// const data =
//  [{'Genre': 'Action','NA_Sales': 861.77,'EU_Sales': 516.48,'JP_Sales': 158.65,'Other_Sales': 184.92000000000002,'Global_Sales':1722.84},
//  {'Genre': 'Adventure','NA_Sales': 101.93,'EU_Sales': 63.74,'JP_Sales': 51.99,'Other_Sales': 16.7,'Global_Sales': 234.59},
//  {'Genre': 'C','NA_Sales': 101.93,'EU_Sales': 63.74,'JP_Sales': 51.99,'Other_Sales': 16.7,'Global_Sales': 234.59},
//  {'Genre': 'D','NA_Sales': 861.77,'EU_Sales': 516.48,'JP_Sales': 158.65,'Other_Sales': 184.92000000000002,'Global_Sales':1722.84}]

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