"use strict";
	
var compteur=0;

function keyPressed(e) {
	if (e.key == " ") {
		var a = context.getImageData(compteur, 0, 1, 200);
	}
}

function timeBar(){
	context.fillStyle="black";
	context.fillRect(compteur, 0, 1, 400);
	compteur++;
	context.fillStyle="red";
	context.fillRect(compteur, 0, 1, 400);
}

this.onkeypress	= function(e) {
	keyPressed(e);
	var go=function() {
		timeBar();
		if(compteur < 200){
			setTimeout(go, 10);
		}	
	};
	go();
}

