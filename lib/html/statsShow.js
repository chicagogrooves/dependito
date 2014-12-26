$(".stats").show();

var x = d3.scale.linear()
.domain([0, d3.max(data)])
.range([0, 420]);

d3.select(".graph1")
.selectAll("div")
.data(statsData1)
.enter().append("div")
.style("width", function(d) { return x(d) + "px"; })
.text(function(d) { return d; });
