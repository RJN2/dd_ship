var w = 500,
		h = 200;

var svg = d3.select("#post-content")
						.insert("svg", ":first-child")
						.attr("width", w)
						.attr("height", h);

var dataset = [ 5, 10, 15, 20, 25 ];

var circles = svg.selectAll("circle")
								.data(dataset)
								.enter()
								.append("circle");

circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d;
       })
       .attr("fill", "yellow")
       .attr("stroke", "orange")
       .attr("stroke-width", function(d){
       			return d/2;
       });

// --- bar chart ---

var barPadding = 1;

var svg_bar = d3.select("#post-content")
								.insert("svg", "p:nth-child(3)")
								.attr("width", w)
								.attr("height", h);

var dataset_bar = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var bar_chart = svg_bar.selectAll("rect")
												.data(dataset_bar)
												.enter()
												.append("rect")
												.attr("x", function(d, i) {
													return i * (w / dataset_bar.length);
												})
												.attr("y", function(d){
													return h - (d * 4);
												})
												.attr("width", w / dataset_bar.length - barPadding)
												.attr("height", function(d) {
													return d * 4;
												})
												.attr("fill", function(d){
													return "rgb(0, 0, " + (d * 10) + ")";
												});

svg_bar.selectAll("text")
	.data(dataset_bar)
	.enter().append("text")
	.text(function(d){
		return d;
	})
	.attr("x", function(d, i) {
		return i * (w / dataset_bar.length) + (w / dataset_bar.length - barPadding) / 2;
	})
	.attr("y", function(d){
		return h - (d * 4) + 14;
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", "white")
	.attr("text-anchor", "middle");