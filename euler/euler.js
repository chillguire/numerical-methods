function euler(funcion, condicion0T,condicion0Y, encontrarT, paso) {

	//console.log("\t t \t|\ty\t");
	//console.log("------------------------------------");
	var
	to,
	yo = condicion0Y,
	columna1,columna2,columna3,columna4,
	f=funcion,
	i=0;

	to = document.createElement('table');
	to.className = "general";
	to.id = "general";
	document.body.appendChild(to);
	
	fila = document.createElement('tr');

	columna1 = document.createElement('th');
	columna1.innerHTML = "Iteración";
	fila.appendChild(columna1);
	columna2 = document.createElement('th');
	columna2.innerHTML = "Valor de t";
	fila.appendChild(columna2);
	columna3 = document.createElement('th');
	columna3.innerHTML = "Valor de y";
	fila.appendChild(columna3);

	columna4 = document.createElement('th');
	columna4.innerHTML = "Función evaluada";
	fila.appendChild(columna4);
	
	
	fila.className = "especial";

	document.getElementById('general').appendChild(fila);

	to = condicion0T;
	for (to = condicion0T; to <= encontrarT;to+=paso){
		//console.log("\t" + to.toFixed(2) + "\t|\t" + yo.toFixed(2));
		yo+=paso*(funcionF(f,to,yo));	
		
		fila = document.createElement('tr');
		
		columna1 = document.createElement('th');
		columna1.innerHTML = i;
		fila.appendChild(columna1);

		columna2 = document.createElement('th');
		columna2.innerHTML = to.toFixed(2);
		fila.appendChild(columna2);

		columna3 = document.createElement('th');
		columna3.innerHTML = yo.toFixed(2);
		fila.appendChild(columna3);

		columna4 = document.createElement('th');
		columna4.innerHTML = f;
		fila.appendChild(columna4);
		
		document.getElementById('general').appendChild(fila);
		i += 1;
	}
	return yo;
}
 
function funcionF(fobj, to, yo) {
	
	var
	t = to,
	y = yo;

	fobj = eval(fobj);
	return fobj;
	//return t * y;
}

	guardar = document.getElementById("guardar");	

	guardar.onclick = function(){
		var
		funcion = document.getElementById("funcion").value, // Función a evaluar
		t = document.getElementById("inicialt").value, // Condición inicial
		y = document.getElementById("inicialy").value, // Condición inicial
		obj = document.getElementById("objetivo").value, // y(t) objetivo
		h = document.getElementById("paso").value, // Paso

		t = parseFloat(t);
		y = parseFloat(y);
		obj = parseFloat(obj);
		h = parseFloat(h);


		euler(funcion, t, y, obj, h);
	}