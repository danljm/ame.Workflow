//// functions ////

var GetChartsURL = '<%: Url.Action("GetCharts", "HomeController") %>';
var AddChartByJsonURL = '<%: Url.Action("AddChartByJson", "HomeController") %>';

// repaint
function Repaint() {
    $("#main").resize(function () {
        jsPlumb.repaintEverything();
    });
}
// размер
function ResizeEl(el) {
    $(el).resizable();
}
// drag
function DragEl(el) {
    jsPlumb.draggable($(el));
}

// save
function Save(chartType) {

    //chart = $("#pallette-draw").html();
    chartShapes = [];
    $(".shape").not(".pallette").each(function () {
        chartShapes.push({ id: $(this).attr('id'), html: $(this).html(), left: $(this).css('left'), top: $(this).css('top'), width: $(this).css('width'), height: $(this).css('height') });
    });

    var chartConnections = jsPlumb.getConnections();

    var chart = {
        chartName: $("#chartName").val(),
        chartType: chartType,
        shapes: chartShapes
        //connections: chartConnections 
    }

    console.log(chart);

    $.ajax({
        cache: false,
        type: "POST",
        url: "Home/AddChartByJson",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(chart),
        success: function (chart) {
            console.log(chart);
        }
    });
}

// load
function Load() {
    var s = "";
    for (var i in Objs) {
        var o = Objs[i];
        console.log(o);
        s += '<div id="' + o.id + '" class="shape rectangle" style="left:' + o.left + '; top:' + o.top + '; width:' + o.width + '; height:' + o.height + ' "> ' + o.html + '</div>';
    }
    $('#pallette-draw').html(chart);

    /** Externalize into a function to be shared */
    var shapes = $(".shape");

    jsPlumbDemo.init();
}

// clear
function Clear() {
    jsPlumb.detachEveryConnection();
    jsPlumb.reset();
    $("#pallette-draw").empty();
}