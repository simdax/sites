"use strict";
	
var compteur=0;

function keyPressed(e) {
	if (e.key == " ") {
		var a = context.getImageData(compteur, 0, 1, 200);
		console.log(a);
		compteur++;
	}
}

this.onkeypress	= keyPressed;

