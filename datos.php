<?php
$validacion = $_POST['validacion'];

switch ($validacion){
    case 'nombre':
        validarNombre();
        break;
    case 'apellido':
        validarApellido();
        break;
    case 'edad':
        validarEdad();
        break;
    case 'formulario':
        validarFormulario();
        break;
    default:
        // Nothing
}

function validarFormulario(){
    if (validarNombre() && validarApellido() && validarEdad()){
        echo true;
    }

}

function validarNombre(){
    $nombre = $_POST['nombre'];
    $validacion = $_POST['validacion'];
    if (preg_match('/^[A-Z][aA-zZ\s]{3,}$/', $nombre) && $validacion === "nombre"){
        echo $nombre;
        return true;
    }else if(preg_match('/^[A-Z][aA-zZ\s]{3,}$/', $nombre)){
        return true;
    }
    return false;
}

function validarApellido(){
    $apellido = $_POST['apellido'];
    $nombre = $_POST['nombre'];
    $validacion = $_POST['validacion'];
    if (preg_match('/^[A-Z][aA-zZ]{5,}\s[aA-zZ]{5,}$/', $apellido) && strtolower($apellido) != strtolower($nombre) && $validacion === "apellido"){
        echo $apellido;
        return true;
    }else if(preg_match('/^[A-Z][aA-zZ]{5,}\s[aA-zZ]{5,}$/', $apellido) && strtolower($apellido) != strtolower($nombre)){
        return true;
    }
    return false;
}

function validarEdad(){
    $edad = $_POST['edad'];
    $validacion = $_POST['validacion'];
    if (preg_match('/^\d?\d$/', $edad) && $edad > 18 && $validacion === "edad"){
        echo $edad;
        return true;
    }else if(preg_match('/^\d?\d$/', $edad) && $edad > 18){
        return true;
    }
    return false;
}
