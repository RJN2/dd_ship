d3.select("#post-content")
	.insert("p", ":nth-child(4)")
	.text("This text is provided through d3.js. Of course this is probably pointless, and better written in Markdown. However, still nice to know that it can be done.")
	.attr("id", "d3para");

var dataset = [ ];

for (var i = 0; i < 25; i++) {
	var newNumber = Math.random() * 30;
	dataset.push(newNumber);
}

d3.select("#test-bed").selectAll("div")
	.data(dataset)
	.enter()
	.append("div")
	.attr("class", "bar")
	.style("height", function(d){
		barHeight = d * 5;
		return barHeight + "px";
	});

