/* variable general para validar el email*/
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*
 * funcion que nos permite poder limpiar los mensajes de login y registro
 * donde se muestran los requerimientos para cada campo
 * en la variable x se recibe el total de mensajes a borrar
 *
 * ejemplo 
 * si x es 1
 * mensaje+x da mensaje1
 */
function limpiamensajes(x)
{
    //sumamos la variable x en 1 para comenzar el for en 1 y no en 0
    x++
    for(var a=1; a < x; a++)
    {
        // limpiamos los id que contienen mensajes mas su identificador personl
        // ejemplo el id esta como mensaje1 mensaje2 mensaje3 etc
        var muestro = "mensaje" + a;
        document.getElementById(muestro).innerText = "";
    }
}
/*
* funcion que permite abrir una ventana modal con un mensaje
* se pasan 3 variables
* la primera es el titulo principal de la ventana modal
* modalmensaje1 y modalmensaje2 son campos para mostrar el mensaje
* que deseemos mostrar
* la funcion se llama de la manera siguiente 
* abrirmodal("titulo principal","primera linea de texto","segunda linea de texto");
*/
function abrirmodal(titulo,modalmensaje1,modalmensaje2)
{
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalMensaje1").innerText = modalmensaje1;
    document.getElementById("modalMensaje2").innerText = modalmensaje2;
    $('#ventanaexito').modal('show');
}
/* 
* validacion del formulario de registro 
*
* id de los campos input
* #correoreg    - input de correo
* #passreg      - input password
* #repreg       - input repita la constraseña
* #generoreg    - select de genero musical favorito
* #edadreg      - edad del usuario
* #aceptoreg    - acepto terminos de uso
* 
*
*
*/
function validaregistro(formreg){
    //limpiamos los campos de mensaje
    limpiamensajes(6);
    //validamos si el Email trae campos vacios
    if(formreg.correoreg.value.trim().length==0)
    {
        //msjcorreoreg
        document.getElementById("mensaje1").innerText = "*** El Email es obligatorio ***";
        return false;
    }
    //validamos que el Email sea valido
    if (!re.test(formreg.correoreg.value)) {
        //msjemaillog
        document.getElementById("mensaje1").innerText = "*** El Email NO es Valido ***";
        return false;
    }
    //validamos que la password no traiga espacios vacios
    if(formreg.passreg.value.trim().length==0)
    {
        //passreg
        document.getElementById("mensaje2").innerText = "*** La Contraseña es obligatoria ***";
        return false;
    }
    //validamos que la password traiga mas de 8 caracteres
    if(formreg.passreg.value.length < 8)
    {
        document.getElementById("mensaje2").innerText = "*** La Contraseña debe tener minimo 8 caracteres ***";
        return false;
    }
    //validamos que las password sean iguales
    if(formreg.passreg.value != formreg.repreg.value)
    {
        document.getElementById("mensaje3").innerText = "*** Las Contraseñas deben ser iguales ***";
        return false;
    }
    // validamos el select de genero musical preferido
    if(formreg.generoreg.value == "")
    {
        document.getElementById("mensaje4").innerText = "*** Debes elegir un Genero Musical ***";
        return false;
    }
    // validamos el checkbox de edad
    if(formreg.edadreg.value == "")
    {
        document.getElementById("mensaje5").innerText = "*** Debes elegir una Edad ***";
        return false;
    }
    // validamos el acepto terminos
    if(!formreg.aceptoreg.checked)
    {
        document.getElementById("mensaje6").innerText = "*** Debes Aceptar los terminos ***";
        return false;
    }
    // mostramos mensaje de registro exitoso

    //return true;
    abrirmodal("REGISTRO EXITOSO","Tu registro fué exitoso.","Busca tu Canción favorita");
    return false;
}
/* fin validacion del formulario de registro */

/* 
* validacion del formulario de inicio de session
*
* id de los campos input
* #correolog    - input de correo
* #passlog      - input password
*
*/
function validaLogin(formlogin){
    //limpiamos los campos mensajes
    limpiamensajes(2);
    //validamos que el correo no traiga espacios innecesarios
    if(formlogin.correolog.value.trim().length==0)
    {
        //msjemaillog
        document.getElementById("mensaje1").innerText = "*** El Email es obligatorio ***";
        return false;
    }
    /* validamos que el Email sea valido */
    if (!re.test(formlogin.correolog.value)) {
        //msjemaillog
        document.getElementById("mensaje1").innerText = "*** El Email NO es Valido ***";
        return false;
    }
    /* validamos que no venga vacia la password */
    if(formlogin.passlog.value.trim().length==0)
    {
        //msjconlog
        document.getElementById("mensaje2").innerText = "*** La Password es obligatoria ***";
        return false;
    }
    /* enviamos un mensaje que el login esta correcto */
    abrirmodal("Login de Sessión","Has ingresado exitosamente.","Continua visitando el sitio");
    return false;
}
/* fin validacion formulario de logueo de usuario */