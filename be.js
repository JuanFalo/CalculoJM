function Calcular() {
	var objVbb = document.getElementById("Vbb");
	var objVt  = document.getElementById("Vt");
	var objDc  = document.getElementById("Dc");
	var objCc  = document.getElementById("Cc");
	var objEj  = document.getElementById("Ej");
	var objDj  = document.getElementById("Dj");

	var Vbb = parseFloat(objVbb.value);
	var Vt  = parseFloat(objVt.value);
	var Dc  = parseFloat(objDc.value);
	var Cc  = parseFloat(objCc.value);
	var Ej  = parseFloat(objEj.value);
	var Dj  = parseFloat(objDj.value);

	var RC = 1 + (3.1415 * Dc * Dc * Cc)/(4 * (Vbb + Vt)+(3.1415 * Dj * Dj * Ej));
	document.getElementById("texto").value = RC.toString() + ' : 1';

	}
