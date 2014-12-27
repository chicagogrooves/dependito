$(".stats").show();

/*
  TODO
    - get x, y scales working
    - place single tick to indicate scale
    - bucket the results
*/
var x = d3.scale.linear()
.domain([0, d3.max(data)])
.range([0, 100]);

d3.select(".graph1")
.selectAll("div")
.data(statsData1)
.enter().append("div")
.style("width", function(d) { return d*2 + "px"; });
