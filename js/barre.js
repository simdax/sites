"use strict";
	
var compteur = 0;

function keyPressed() {
	var a = context.getImageData(compteur, 0, 1, 200).data;
	var uns = [];
	for (var i = a.length - 1; i >= 0; i -= 4) {
		if(a[i] == 0){
			uns.push(a[i])}
	};
	console.log(uns);
	document.getElementById("coucou").innerHTML = a.length;
}

function timeBar(){
	context.fillStyle="black";
	context.fillRect(compteur, 0, 1, 400);
	compteur++;
	context.fillStyle="red";
	context.fillRect(compteur, 0, 1, 400);
	keyPressed();
}

this.onkeypress	= function(e) {
	if (e.key == " ") {
		var go=function() {
			timeBar();
			if(compteur < 200){
				setTimeout(go, 10);
			}	
		};
		go();
	}
}

