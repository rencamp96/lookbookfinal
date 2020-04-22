function init() {
	var imgWidth = window.innerWidth / 100 * 23;
	var imgHeight = (imgWidth / 864) * 1296;
	var imgWidthMedium = window.innerWidth / 100 * 35;
	var imgHeightMedium = (imgWidthMedium / 864) * 1296;
	var imgWidthMovil = window.innerWidth / 100 * 55;
	var imgHeightMovil = (imgWidthMovil / 864) * 1296;

	// --------- Center Landing Page Horizontally -----------
	var contentHeight = document.getElementById("cuadroRojo1").offsetHeight;
	var totalHeight = document.documentElement.scrollHeight;
	margin = (totalHeight - (contentHeight / 5 * 6.5)) / 2;
	marginMedium = (totalHeight - (contentHeight / 5 * 9)) / 2;
	marginMovil = (totalHeight - (contentHeight / 5 * 12)) / 2;

	// --------- Center Content Media Queries -----------
	if (window.innerWidth >= 1060) {
		document.getElementById('center').style.top = margin + 'px';
	}
	if (window.innerWidth <= 1060 && window.innerWidth >= 600) {
		document.getElementById('center').style.top = marginMedium + 'px';
	}
	if (window.innerWidth <= 600) {
		document.getElementById('center').style.top = 10 + 'vw';
	}

	var windowHeight = window.innerHeight;
	var videoHeight = document.getElementById("fashionfilm").offsetHeight;
	console.log("window" + windowHeight);
	console.log("video" + videoHeight);

	var videoPosY = (windowHeight-videoHeight)/2;
	document.getElementById("fashionfilm").style.top = videoPosY + "px";

}

function myFunction() {
	var creditos = document.getElementById('creditos').style.display = 'inline-block';
	document.getElementById('backlight').style.display = 'inline-block';

	const body = document.body;
	if (creditos = 'inline-block'){
		body.style.position = 'fixed';
	} else {
		body.style.position = 'relative';
	}
};

function myFunctionClose() {
	var creditos = document.getElementById('creditos').style.display = 'none';
	document.getElementById('backlight').style.display = 'none';

	const body = document.body;
	if (creditos = 'none'){
		body.style.position = 'relative';
	} else {
		body.style.position = 'fixed';
	}
};


function myFunction2() {
	document.getElementById('fashionfilm').style.display = 'inline-block';
	document.getElementById('backlight2').style.display = 'inline-block';
	document.getElementById('closebtn_fashionfilm').style.display = 'inline-block';

	const body = document.body;
	if (ffDisplay = 'inline-block'){
  	body.style.position = 'fixed';
	}

	var windowHeight = window.innerHeight;
	var videoHeight = document.getElementById("fashionfilm").offsetHeight;
	var videoPosY = (windowHeight-videoHeight)/2;
	document.getElementById("fashionfilm").style.top = videoPosY + "px";
};

function myFunction2Close(){
	var ffDisplay2 = document.getElementById('fashionfilm').style.display='none';
	document.getElementById('backlight2').style.display='none';

	const body = document.body;
	if (ffDisplay2 = 'none'){
		body.style.position = 'relative';
	} else {
		body.style.position = 'fixed';
	}
}

function myFunction3() {
	document.getElementById('look2').style.zIndex = 10;
	document.getElementById('look3').style.zIndex = 0;
	document.getElementById('look1').style.zIndex = 5;
};

function myFunction4() {
	document.getElementById('look2').style.zIndex = 5;
	document.getElementById('look3').style.zIndex = 10;
	document.getElementById('look1').style.zIndex = 0;
};

function myFunction5() {
	document.getElementById('look1').style.zIndex = 11;
};

function myFunction6() {
	document.getElementById('look5').style.zIndex = 10;
	document.getElementById('look6').style.zIndex = 5;
};

function myFunction7() {
	document.getElementById('look6').style.zIndex = 10;
	document.getElementById('look5').style.zIndex = 5;
};

window.addEventListener("load", () => {
	init();
});

window.addEventListener('resize', () => {
	init();
})
