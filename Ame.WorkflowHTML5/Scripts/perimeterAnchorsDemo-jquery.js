;(function() {
	
	window.jsPlumbDemo = {
			
		init : function() {
			
			jsPlumb.importDefaults({
				Connector:"Flowchart",
				PaintStyle:{ lineWidth:1, strokeStyle:"#5BAB54" },
				Endpoint: "Blank",
				//EndpointStyle: { fillStyle:"#5BAB54" },
                ConnectionOverlays : [ 
                        [ "PlainArrow", { location:-10 } ] ]
			});
			  
			var shapes = $(".shape");

			// make everything draggable
			jsPlumb.draggable(shapes);

            jsPlumb.bind("connection", function(info) {
                win.open();
                info.connection.getOverlay("Label").setLabel();
            });

            jsPlumb.bind("dblclick", function(c) { 
				jsPlumb.detach(c); 
			});
				
			// loop through them and connect each one to each other one.
			for (var i = 0; i < shapes.length; i++) {

                jsPlumb.makeSource(shapes[i], {
					anchor: "Continuous",
					connector: "Flowchart"
				});

                jsPlumb.makeTarget(shapes[i], {
                    dropOptions: { hoverClass:"dragHover" },
                    anchor: "Continuous"
                    
                });	
			}
    }    
  }
  
})();