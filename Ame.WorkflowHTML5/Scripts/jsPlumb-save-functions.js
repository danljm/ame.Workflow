//// functions ////

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
function Save() {
    //$(".shape").resizable("destroy");

    chart = $("#pallette-draw").html();
    Objs = [];
    $(".shape").not(".pallette").each(function () {
        Objs.push({ id: $(this).attr('id'), html: $(this).html(), left: $(this).css('left'), top: $(this).css('top'), width: $(this).css('width'), height: $(this).css('height') });
    });
    console.log(chart);
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