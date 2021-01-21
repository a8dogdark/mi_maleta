/* 
* procesamos los 3 primeras canciones del archivo html
*/
$(document).ready(function(){
    //creamos variables a usar en el documento
    var orden;
    var html;
    //carga los datos que estan en el json
    $.ajax({
        url: "dist/js/datos.json"
    }).done(function(resultado){
        //ordenamos las canciones
        orden = resultado.canciones.sort(function(x,y){
            //creamos una validacion 
            if (x.reproducciones < y.reproducciones){
              return 1;
            }
            return -1;
          });
        // ñimpiamos la variable html que usarmos para mandar los datos al dom
        html =""
        //pintamos los datos en el dom
        for(var b = 0; b < 3; b++)
        {
            html += `
            <div class="row mb-3">
                <div class="col-4 text-primary">${resultado.canciones[b].nombre}</div>
                <div class="col-8"><audio src="dist/canciones/${resultado.canciones[b].ruta}" controls preload="auto"></audio></div>
            </div>
            `;
            document.getElementById("cajatabla").innerHTML = html
        }
    });
});