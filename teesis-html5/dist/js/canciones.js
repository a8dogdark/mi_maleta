$(document).ready(function () {
    var busqueda = ""
    var total = ""
    var html = ""
    var comparo = ""
    var final = ""
    var b=0    
        //funcion que deshabilita el boton del mouse sobre el reproductor de audio
        $("body").on("contextmenu", function(e){
            return false
        });
        //creamos las variables
        $.ajax({
            //recojemos los datos del archivo anexo json
            url: "../dist/js/datos.json"
        }).done(function (resultado) {
            //obtenemos el total de las canciones leidas
            total = resultado.canciones.length;
            //pintamos las canciones en la pantalla
            for (var a = 0; a < total; a++) {
                html += `
            <div class="col-12 col-lg-4 pb-3 " id="${resultado.canciones[a].nombre}">
                <div class="card">
                    <div class="card-header text-center"><img src="../dist/imagenes/icon_${resultado.canciones[a].icono}.svg" alt="" width="50" height="50" /></div>
                    <div class="card-body">
                        <h5 class="card-title text-center">${resultado.canciones[a].nombre}</h5>
                        <p><audio 
                            src="../dist/canciones/${resultado.canciones[a].ruta}" 
                            controls 
                            preload="auto" 
                            controlslist="nodownload" 
                            ></audio></p>
                    </div>
                </div>
            </div>
            `;
                document.getElementById("temas").innerHTML = html;
               
            //validamos los datos que se ingresan por el buscador
            $('#search').keyup(function(){
                //variable codificada expresion regular
                comparo = new RegExp($(this).val(), 'i')
                //varaible que toma la canción segun indice
                busco = comparo.test(resultado.canciones[b].nombre);
                //validamos las cancion que buscamos
                if(busco !== true){
                    //si es diferente a lo que buscamos, descartamos
                    //buscamos la cancion que traemos por el buscador
                    busqueda = `${resultado.canciones[b].nombre}`
                    //variable que contiene el id del bloque a modificar
                    final = document.getElementById(`${busqueda}`)
                    //agregamos la clase para desparecer los bloques de la tabla
                    final.classList.add('bloqueof')
                }else{
                    //si es lo que buscamos lo pintamos en el dom
                    busqueda = `${resultado.canciones[b].nombre}`
                    final = document.getElementById(`${busqueda}`)
                    final.classList.remove('bloqueof')
                }
                b++
                //si la variable b llega al total de las canciones
                //encontradas la seteamos a 0
                if(b == total){
                    b=0
                }       
            })
            }
        });
    });