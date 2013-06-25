;(function() {
	
	window.jsPlumbDemo = {
			
		init : function() {
			
			jsPlumb.importDefaults({
				Connector:"Flowchart",
				PaintStyle:{ lineWidth:1, strokeStyle:"#ffa500" },
				Endpoint:"Blank",
				EndpointStyle:{ fillStyle:"#ffa500" },
                ConnectionOverlays : [
					[ "Arrow", { location:-10 } ],
                    [ "Label", { label:"", id:"label" }]
				]
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

            /*$('#pallette-draw').droppable({
                drop: function(event, ui) {
                    
                    if (ui.item.hasClass("clone")) {
                        // This is a new item
                        ui.item.removeClass("clone");

                        jsPlumb.makeSource(ui.item, { filter:".drag_icon", anchor:"Continuous", connector: "Flowchart" });

                        jsPlumb.makeTarget(ui.item, { dropOptions:{ hoverClass:"dragHover" }, anchor: "Continuous" });

                        jsPlumb.setDraggable(ui.item, true);
                    
                    }             
                }
            });*/


				
			// loop through them and connect each one to each other one.
			for (var i = 0; i < shapes.length; i++) {

                jsPlumb.makeSource(shapes[i], {
					filter:".drag_icon",
					anchor:"Continuous",
					connector: "Flowchart"
				});

                /*jsPlumb.makeSource(shapes[i], {
                    anchor: "Continuous",
                    //anchors: "Perimeter", shape:$(shapes[i]).attr("data-shape"), rotation:$(shapes[i]).attr("data-rotation")
                });*/

                jsPlumb.makeTarget(shapes[i], {
                    dropOptions:{ hoverClass:"dragHover" },
                    anchor: "Continuous",
                    //anchors: "Perimeter", shape:$(shapes[i]).attr("data-shape"), rotation:$(shapes[i]).attr("data-rotation")
                });

				/*for (var j = i + 1; j < shapes.length; j++) {						
					jsPlumb.connect({
						source:shapes[i],  // just pass in the current node in the selector for source 
						target:shapes[j],
						// here we supply a different anchor for source and for target, and we get the element's "data-shape"
						// attribute to tell us what shape we should use, as well as, optionally, a rotation value.
						anchors:[
							[ "Perimeter", { shape:$(shapes[i]).attr("data-shape"), rotation:$(shapes[i]).attr("data-rotation") }],
							[ "Perimeter", { shape:$(shapes[j]).attr( "data-shape"), rotation:$(shapes[j]).attr("data-rotation") }]
						]
					});				
				}*/	
			}
    }    
  }
  
})();