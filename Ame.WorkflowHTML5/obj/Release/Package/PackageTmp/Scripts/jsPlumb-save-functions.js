﻿//// functions ////

var GetChartsURL = '<%: Url.Action("GetCharts", "HomeController") %>';
var AddChartByJsonURL = '<%: Url.Action("AddChartByJson", "HomeController") %>';

var isDrag = false;

function ToggleMode() {

    ToggleDrag(isDrag);
    ToggleConnector(isDrag);

    isDrag = !isDrag;

    if (isDrag) {
        $('#toggleButton').val('Drag');
        $("#toggleButton").css("background-color", "#FF751F");
        $("#toggleButton").css("border", "1px solid #FF751F");
    } else {
        $('#toggleButton').val('Connect');
        $("#toggleButton").css("background-color", "#3085d6");
        $("#toggleButton").css("border", "1px solid #3085d6");
    }
}

function ToggleDrag(isDrag) {
    var shapes = $('.shape').not(".pallette");
    shapes.each(function () {

        if (!isDrag) {
            $(this).draggable('enable');
        } else {
            $(this).draggable('disable');
        }
    });
}

function ToggleConnector(isDrag) {

    var shapes = $('.shape').not(".pallette");
    var s = jsPlumb.setSourceEnabled(shapes, isDrag);
    var t = jsPlumb.setTargetEnabled(shapes, isDrag);

    console.log(s);
    console.log(t);
}

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
        chartShapes.push({ id: $(this).attr('id'), label: $(this).text().trim(), class: $(this).attr('class'), left: $(this).css('left'), top: $(this).css('top'), width: $(this).css('width'), height: $(this).css('height') });
    });

    /** FOR CONNECTIONS **/
    var jsPlumbConnections = jsPlumb.getConnections();

    for (var i = 0; i < jsPlumbConnections.length; ++i) {
        chartConnections.push({ sourceId: jsPlumbConnections[i].sourceId, targetId: jsPlumbConnections[i].targetId, label: jsPlumbConnections[i].getLabel() });
    }

    /** FOR SWIMLANES **/
     $(".li-head").each(function () {
        chartSwimlanes.push({ label: $(this).text().trim() });
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
            $("#Success").show().delay(5000).fadeOut();
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
        html += '<div id="' + shape.id + '" class="' + shape.class + '" style="left:' + shape.left + '; top:' + shape.top + '; width:' + shape.width + '; height:' + shape.height + ' ">' + shape.label + '</div>';
    }

    

    

    console.log(html);

    //Need to set before doing other stuff
    $('#pallette-draw').append(html);

    var shapes = $('.shape').not(".pallette");

    shapes.draggable({
        drag: function () {
            jsPlumb.repaintEverything();
        }
    });

    shapes.click(function () {
        $(this).addClass('edit');
        win.open();
    });

    shapes.each(function () {
        if (!$(this).hasClass('stickyNote') || !$(this).hasClass('component')) {
            jsPlumb.makeTarget($(this), { dropOptions: { hoverClass: "dragHover" }, anchor: "Continuous" });

            jsPlumb.makeSource($(this), {
                anchor: "Continuous",
                connector: "Flowchart"
            });
        }
    });
    

    /** FOR CONNECTIONS **/
    for (var j in chartConnections) {
        var connection = chartConnections[j]
        MakeConnection(connection);
    }

    /** FOR SWIMLANES **/
    $('.swimlane-wrapper').empty();
    for (var k in chartSwimlanes) {
        var swimlane = chartSwimlanes[k];
        console.log(swimlane);
        AddSwimlane(swimlane.label);
    }  
}

// clear
function Clear() {
    jsPlumb.detachEveryConnection();
    jsPlumb.reset();
    $("#pallette-draw .shape").empty().remove();
    $("#chartName").val('');
    $("#chartDescription").val('');
}