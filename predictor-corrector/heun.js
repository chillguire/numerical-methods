function heun(funcion, condicion0T,condicion0Y, encontrarT, paso, corrector){

	//console.log("\t t \t|\ty\t");
	//console.log("------------------------------------");
	var
	to,
	ynext,yo = condicion0Y,
	columna,fila,
	x,i=0,
	f=funcion;

	to = document.createElement('table');
	to.className = "general";
	to.id = "general";
	document.body.appendChild(to);
	
	to = document.createElement('tr');

	columna = document.createElement('th');
	columna.innerHTML = "Iteración";
	to.appendChild(columna);

	columna = document.createElement('th');
	columna.innerHTML = "Función evaluada";
	to.appendChild(columna);

	columna = document.createElement('th');
	columna.innerHTML = "Valor de t";
	to.appendChild(columna);
	
	columna = document.createElement('th');
	columna.innerHTML = "Valor de y";
	to.appendChild(columna);
	
	to.className = "especial";

	document.getElementById('general').appendChild(to);


	to = condicion0T;
	for (to = condicion0T; to <= encontrarT;to+=paso){
		
		ynext = euler(f,to,yo,paso);

		for (x = 0; x <= corrector;x++){
			ynext = yo + (paso/2)*((funcionF(f,to,yo))+(funcionF(f,(to + paso),ynext)));
		}
		yo = ynext;
		//console.log("\t" + to.toFixed(2) + "\t|\t" + yo.toFixed(2));
		fila = document.createElement('tr');
	
		columna = document.createElement('th');
		columna.innerHTML = i;
		fila.appendChild(columna);
	
		columna = document.createElement('th');
		columna.innerHTML = f;
		fila.appendChild(columna);
	
		columna = document.createElement('th');
		columna.innerHTML = to.toFixed(2);
		fila.appendChild(columna);
		
		columna = document.createElement('th');
		columna.innerHTML = yo.toFixed(2);
		fila.appendChild(columna);
	
		document.getElementById('general').appendChild(fila);
		i+=1
	}
	return yo;
}

function euler(f, to,yo, h) {
	var
	to,
	yo,
	f;

	yo+=h*(funcionF(f,to,yo));
	
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
		corrector = document.getElementById("corrector").value;

		t = parseFloat(t);
		y = parseFloat(y);
		obj = parseFloat(obj);
		h = parseFloat(h);
		corrector = parseInt(corrector);

		heun(funcion, t, y, obj, h, corrector);
	}