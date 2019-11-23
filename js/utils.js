//standardize svg creation

var format1d = d3.format(".1f");
var formatYear = d3.timeFormat("%Y");

function makeSvg(vis, chartType) {
  return d3.select('#' + vis.parentElement)
      .append('div')
      .attr('class', 'svg-container ' + chartType)
      .append('svg')
      .attr('height', vis.height + vis.margin.top + vis.margin.bottom)
      .attr('width', vis.width + vis.margin.left + vis.margin.right)
      .append('g')
      .attr('transform', 'translate(' + vis.margin.left + ',' + vis.margin.top + ')');
}

// for linechart
var parseTime = d3.timeParse("%Y");
formatValue = d3.format(".2s");

// For plot flow chart
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x = text.attr('x'),
        y = text.attr("y"),
        dy = 0,
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}


var heroColors = {
  avengers: '2C2A89',
  guardians: '369F4D',
  black_panther: '0C0B13',
  captain_america: '000042',
  thor: '03ADE9',
  iron_man: 'E30022',
  hulk: 'A2CD48',
  captain_marvel: 'F3D403',
  doctor_strange: '454253',
  ant_man: '5E6674',
  spider_man: '7E1F27',
  black_widow: '000000'
};
