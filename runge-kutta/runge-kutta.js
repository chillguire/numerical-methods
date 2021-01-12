function rungeKutta(funcion, condicion0T,condicion0Y, encontrarT, paso){

	//console.log("\t t \t|\ty\t");
	//console.log("------------------------------------");
	var
	to,
	yo = condicion0Y,
	columna,fila,
	i=0,
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
		columna.innerHTML = "k1";
		to.appendChild(columna);

		columna = document.createElement('th');
		columna.innerHTML = "k2";
		to.appendChild(columna);

		columna = document.createElement('th');
		columna.innerHTML = "k3";
		to.appendChild(columna);

		columna = document.createElement('th');
		columna.innerHTML = "k4";
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
		
		//console.log("\t" + to.toFixed(2) + "\t|\t" + yo.toFixed(2));
		
		k1 = paso * funcionF(f,to, yo);
		k2 = paso * funcionF(f,(to + (paso / 2.0)),(yo + (k1 / 2.0)));
		k3 = paso * funcionF(f,(to + (paso / 2.0)),(yo + (k2 / 2.0)));
		k4 = paso * funcionF(f,to + paso,yo + k3);

		yo += ((k1 + (2.0 * k2) + (2.0 * k3) + k4)/6);

		
		fila = document.createElement('tr');
	
		columna = document.createElement('th');
		columna.innerHTML = i;
		fila.appendChild(columna);
	
		columna = document.createElement('th');
		columna.innerHTML = f;
		fila.appendChild(columna);
	
		columna = document.createElement('th');
		columna.innerHTML = k1.toFixed(2);
		fila.appendChild(columna);
	
		columna = document.createElement('th');
		columna.innerHTML = k2.toFixed(2);
		fila.appendChild(columna);
	
		columna = document.createElement('th');
		columna.innerHTML = k3.toFixed(2);
		fila.appendChild(columna);
	
		columna = document.createElement('th');
		columna.innerHTML = k4.toFixed(2);
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

		rungeKutta(funcion, t, y, obj, h);
	}