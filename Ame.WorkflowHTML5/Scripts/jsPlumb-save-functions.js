//// functions ////

var GetChartsURL = '<%: Url.Action("GetCharts", "HomeController") %>';
var AddChartByJsonURL = '<%: Url.Action("AddChartByJson", "HomeController") %>';

// repaint
function Repaint() {
    $("#main").resize(function () {
        jsPlumb.repaintEverything();
    });
}
// resize
function ResizeElement(el) {
    $(el).resizable();
}
// drag
function DragElement(el) {
    jsPlumb.draggable($(el));
}

// connection
function MakeConnection(connection) {
    var source = connection.sourceId;
    var target = connection.targetId;
    jsPlumb.connect({ source: source, target: target, anchor: "Continuous" });
}

// save
function Save(chartType) {

    //chart = $("#pallette-draw").html();
    chartShapes = [];
    chartConnections = [];
    chartSwimlanes = [];
    chartData = [];

    /** FOR SHAPES **/
    $(".shape").not(".pallette").each(function () {
        chartShapes.push({ id: $(this).attr('id'), label: $(this).find('.shape-label').text().trim(), class: $(this).attr('class'), left: $(this).css('left'), top: $(this).css('top'), width: $(this).css('width'), height: $(this).css('height') });
    });

    /** FOR CONNECTIONS **/
    var jsPlumbConnections = jsPlumb.getConnections();

    for (var i = 0; i < jsPlumbConnections.length; ++i) {
        chartConnections.push({ sourceId: jsPlumbConnections[i].sourceId, targetId: jsPlumbConnections[i].targetId, label: jsPlumbConnections[i].getLabel() });
    }

    /** FOR SWIMLANES **/
     $(".swimlane li").each(function () {
        chartSwimlanes.push({ html: $(this).html() });
    });

    chartData.push(chartShapes);
    chartData.push(chartConnections);
    chartData.push(chartSwimlanes);

    var chart = {
        chartName: $("#chartName").val(),
        chartDescription: $("#chartDescription").val(),
        chartType: chartType,
        chartData: JSON.stringify(chartData)
    }

    //Testing methods
    console.log(chartData);
    console.log(chart);
    console.log(JSON.stringify(chartData));

    $.ajax({
        cache: false,
        type: "POST",
        url: "/Home/Create",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(chart),
        success: function (chart) {
            console.log(chart);
        }
    });
}

// load
function Load(chart) {

    var formattedChart = chart.replace(/&quot;/g, '"');
    formattedChart = formattedChart.replace(/&lt;/g, '<');
    formattedChart = formattedChart.replace(/&gt;/g, '>');
    formattedChart = formattedChart.replace(/&gt;/g, '>');
    formattedChart = formattedChart.replace(/\n/g, ' ');
    formattedChart = formattedChart.replace(/'\'/g, '');

    console.log(formattedChart);

    var chartData = jQuery.parseJSON(formattedChart);

    console.log(chartData);

    chartShapes = chartData[0];
    chartConnections = chartData[1];
    chartSwimlanes = chartData[2];

    var html = ""
    /** FOR SHAPES **/
    for (var i in chartShapes) {
        var shape = chartShapes[i];
        html += '<div id="' + shape.id + '" class="' + shape.class + '" style="left:' + shape.left + '; top:' + shape.top + '; width:' + shape.width + '; height:' + shape.height + ' ">' 
            + '<div class="shape-label">' + shape.label + '</div><span class="drag_icon">&#10150;</span></div></div>';
    }

    console.log(html);

    /** FOR CONNECTIONS **/
    for (var j in chartConnections) {
        var connection = chartConnections[j]
        MakeConnection(connection);
    }

    /** FOR SWIMLANES **/
    for (var k in chartSwimlanes) {
        var swimlane = chartSwimlanes[k];
        console.log(swimlane);
    }

    $('#pallette-draw').append(html);
}

// clear
function Clear() {
    jsPlumb.detachEveryConnection();
    jsPlumb.reset();
    $("#pallette-draw .shape").empty().remove();
}