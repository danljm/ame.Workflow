;(function() {
	
	window.jsPlumbDemo = {
			
		init : function() {
			
			jsPlumb.importDefaults({
				Connector:"Flowchart",
				PaintStyle:{ lineWidth:1, strokeStyle:"#5BAB54" },
				Endpoint: "Blank",
				//EndpointStyle: { fillStyle:"#5BAB54" },
                ConnectionOverlays : [ [ "Arrow", { location:-10 } ] ]
			});
			  
			var shapes = $(".shape");

			// make everything draggable
			jsPlumb.draggable(shapes);

            jsPlumb.bind("connection", function(info) {
                info.connection.getOverlay("label").setLabel(info.connection.id);
            });

            jsPlumb.bind("click", function(c) { 
				jsPlumb.detach(c); 
			});
				
			// loop through them and connect each one to each other one.
			for (var i = 0; i < shapes.length; i++) {

                jsPlumb.makeSource(shapes[i], {
					filter: ".drag_icon",
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