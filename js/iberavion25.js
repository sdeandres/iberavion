

var ieversion =/*@cc_on function(){ switch(@_jscript_version){ case 1.0:return 3;
      case 3.0:return 4;case 5.0:return 5; case 5.1:return 5; case 5.5:return 5.5;
      case 5.6:return 6; case 5.7:return 7; }}()||@*/0;
/* Si es Internet Explorer 6 
	if (ieversion == 6) {		
		alert("¡ATENCIÓN!\n\nSu navegador de Internet está obsoleto,\nPor favor, actualize su navegador para poder ver correctamente esta página web.\n\nAl pulsar ACEPTAR, será reenviado a una página de información.\n\nGracias,\niberavion.es");   
		var deep="";
		if  (numDeep==0) deep+="./";
		for (i=0; i<numDeep; i++ ) {
			deep+="../";}		
		window.location.href=deep+"html/misc/info_navegadores.html";
	}
	*/

function goIndex(num) {
	var deep = "";
	for (i = 0; i < num; i++) {
		deep += "../";
	}
	location.href = deep + "index.html";
}

function goDeep(num, pagina) {
	var deep = "";
	if (num == 0) deep += "./";
	for (i = 0; i < num; i++) {
		deep += "../";
	}
	//alert("goDeep:"+(deep+pagina));	
	window.location.href = deep + pagina;
}


function goDeepOut(num, pagina, ancho, alto) {
	var deep = "";
	if (num == 0) deep += "./";
	for (i = 0; i < num; i++) {
		deep += "../";
	}
	//alert("goDeep:"+(deep+pagina));	
	//window.location.href = deep+pagina;
	var medidas = ' width=' + ancho + ',height=' + alto + ',resizable=yes';
	window.open(deep + pagina, 'windowname', medidas);
	return false;
}

function msgSorteo() {
	//alert("www.iberavion.es\n\nNUESTROS VIAJES SON SIN SORTEOS.");
}

function goExit(url) {
	//window.open(url,'_blank');
}


function includeHTML() {
	alert("includeHTML");
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) { elmnt.innerHTML = this.responseText; }
					if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
}
