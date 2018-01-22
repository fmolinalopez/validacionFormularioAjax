function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
        // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function validarNombre() {
    miXHR = objetoXHR();

    llamadaAsincronaNombre();
}

function llamadaAsincronaNombre() {
    miXHR.open('POST', 'datos.php');
    miXHR.onreadystatechange = comprobarEstadoPeticionNombre;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "nombre="+document.getElementById("nombre").value+"&validacion="+"nombre";
    miXHR.send(datos);
}

function comprobarEstadoPeticionNombre(){
    if (this.readyState === 4 && this.status === 200){
        let nombre = document.getElementById("nombre");
        nombre.classList.remove("incorrecto");
        nombre.classList.remove("correcto");
        if (this.responseText){
            document.getElementById("form").disabled = false;
            nombre.className += "correcto";
        }else {
            document.getElementById("form").disabled = true;
            nombre.className += "incorrecto";
        }
    }
}

function validarApellido() {
    miXHR = objetoXHR();

    llamadaAsincronaApellido();
}

function llamadaAsincronaApellido() {
    miXHR.open('POST', 'datos.php');
    miXHR.onreadystatechange = comprobarEstadoPeticionApellido;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "nombre="+document.getElementById("nombre").value+"&validacion="+"apellido"+"&apellido="+document.getElementById("apellido").value;
    miXHR.send(datos);
}

function comprobarEstadoPeticionApellido(){
    if (this.readyState === 4 && this.status === 200){
        let apellido = document.getElementById("apellido");
        apellido.classList.remove("incorrecto");
        apellido.classList.remove("correcto");
        if (this.responseText){
            document.getElementById("form").disabled = false;
            apellido.className += "correcto";
        }else {
            document.getElementById("form").disabled = true;
            apellido.className += "incorrecto";
        }
    }
}

function validarEdad() {
    miXHR = objetoXHR();

    llamadaAsincronaEdad();
}

function llamadaAsincronaEdad() {
    miXHR.open('POST', 'datos.php');
    miXHR.onreadystatechange = comprobarEstadoPeticionEdad;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "edad="+document.getElementById("edad").value+"&validacion="+"edad";
    miXHR.send(datos);
}

function comprobarEstadoPeticionEdad(){
    if (this.readyState === 4 && this.status === 200){
        let edad = document.getElementById("edad");
        edad.classList.remove("incorrecto");
        edad.classList.remove("correcto");
        if (this.responseText){
            document.getElementById("form").disabled = false;
            edad.className += "correcto";
        }else {
            document.getElementById("form").disabled = true;
            edad.className += "incorrecto";
        }
    }
}

function validarFormulario() {
    miXHR = objetoXHR();

    llamadaAsincronaFormulario();
}

function llamadaAsincronaFormulario() {
    miXHR.open('POST', 'datos.php');
    miXHR.onreadystatechange = comprobarEstadoPeticionFormulario;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let datos = "nombre="+document.getElementById("nombre").value+"&validacion="+"formulario"+"&apellido="+document.getElementById("apellido").value+"&edad="+document.getElementById("edad").value;
    miXHR.send(datos);
}

function comprobarEstadoPeticionFormulario(){
    if (this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
        if (this.responseText == true){
            console.log("dentro")
            window.location.href="show.php?nombre="+document.getElementById("nombre").value+"&apellido="+document.getElementById("apellido").value+"&edad="+document.getElementById("edad").value;
        } else {
            document.getElementById("form").disabled = true;
        }
    }
}

