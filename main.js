	function buscaAlumno(idT){
		let $URL_REST = "http://www.proyectos.arcelia.net/omg/src/public/alumnos";
		var celdas = ["matricula","nombre", "curp","sexo","ciudad","detalle"];
		var nRow = 1;
		var tabla = document.getElementById(idT);
		var numeroRenglones = tabla.rows.length;


		var renglones = tabla.getElementsByTagName('tr');
		for (var i = numeroRenglones - 1; i > 0; i--){
			tabla.deleteRow(renglones[i]);
		}

		nRow = 0;
		var endPoint = $URL_REST;
		if (document.getElementById("matricula").value!= "") {
			endPoint = $URL_REST + "/" + document.getElementById("matricula").value;
			document.getElementById("matricula").value = "";
		}
		var numeroRenglones = tabla.rows.length;
		

		

			fetch(endPoint)
			.then(response => response.json())
			.then(data => {
				
				data.data.forEach(alumno => {
					var renglon = tabla.insertRow(nRow);

					for (i = 0; i <celdas.length; i++) {
						var celda = renglon.insertCell(i);

						switch(celdas[i]){
							case "matricula":
								var textoCelda = document.createTextNode(alumno.clave_alu);
								break;
							case "nombre":
								var textoCelda = document.createTextNode(alumno.nombre+" "+alumno.ap_paterno+" "+alumno.ap_materno);
								break;
							case "curp":
								var textoCelda = document.createTextNode(alumno.curp);
								break;
							case "sexo":
								var textoCelda = document.createTextNode(alumno.sexo);
								break;
							case "ciudad":
								var textoCelda = document.createTextNode(alumno.ciudad);
								break;
							case "detalle":
								var textoCelda = document.createElement("button");
								textoCelda.textContent="Ver";
								textoCelda.classList.add("btn","btn-success");
								textoCelda.setAttribute("id", "botonId"+i);

								textoCelda.addEventListener("click", (function(tId){
									return function(){
										//alert(alumno.clave_alu);
										//alert(window.location.href);
										window.open("detalle.html?matricula="+alumno.clave_alu);
										//window.location.href = "http://www.gorissen.info/Pierre/mapsgoogleMapLocation.php?lat="+elemA+"&lon="+elemB+"&setLatLon=Set";
										//alert(document.getElementById(tId).value);
									}
								}
								)("botonId"+i),false);
								break;
						}
						celda.appendChild(textoCelda);
					}
					nRow++;
				})
			})
			.catch(error => console.log("Error: ", error));
		}
			function cargaDatos(){
		//var url=window.location.href;
	let url = new URL(window.location.href)
	let searchParams = new URLSearchParams(url.search);
	let matricula=searchParams.get('matricula');


	let $URL_REST = "http://www.proyectos.arcelia.net/omg/src/public/alumnos/"+matricula;
	var celdas = ["matricula","nombre", "curp","sexo","ciudad","peso","estatura","direccion","colonia","cp","delegacion","telefono","celular","email","detalle"];

	var tabla = document.getElementById("tablaDatos");
	nRow = 1;

	var endPoint = $URL_REST;

	console.log(endPoint);

	fetch(endPoint)
	.then(response => response.json())
	.then(data => {

		data.data.forEach(alumno => {
			var renglon = tabla.insertRow(nRow);

			for (i = 0; i <celdas.length; i++) {
				var celda = renglon.insertCell(i);

				switch(celdas[i]){
					case "matricula":
						var textoCelda = document.createTextNode(alumno.clave_alu);
						break;
					case "nombre":
						var textoCelda = document.createTextNode(alumno.nombre+" "+alumno.ap_paterno+" "+alumno.ap_materno);
						break;
					case "curp":
						var textoCelda = document.createTextNode(alumno.curp);
						break;
					case "sexo":
						var textoCelda = document.createTextNode(alumno.sexo);
						break;
					case "ciudad":
						var textoCelda = document.createTextNode(alumno.ciudad);
					case "sexo":
						var textoCelda = document.createTextNode(alumno.sexo);
						break;
					case "estatura":
						var textoCelda = document.createTextNode(alumno.estatura);
						break;
					case "direccion":
						var textoCelda = document.createTextNode(alumno.direccion);
						break;
					case "colonia":
						var textoCelda = document.createTextNode(alumno.colonia);
						break;
					case "cp":
						var textoCelda = document.createTextNode(alumno.cp);
						break;
					case "delegacion":
						var textoCelda = document.createTextNode(alumno.delegacion);
						break;
					case "telefono":
						var textoCelda = document.createTextNode(alumno.telefono);
						break;
					case "celular":
						var textoCelda = document.createTextNode(alumno.celular);
						break;
					case "email":
						var textoCelda = document.createTextNode(alumno.email);
						break;
				}
				celda.appendChild(textoCelda);
			}
			nRow++;
		})
	})
	.catch(error => console.log("Error: ", error));	
	}
