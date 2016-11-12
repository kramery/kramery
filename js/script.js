/*----------FUNCIÓN PARA API DE GOOGLE MAPS----------*/

$(document).ready(function(){
        //El .goMap lo ha sacado del jquery.gomap-1.3.3
        $("#mapa").goMap({ /*Le decimos que cargue el id "mapa" que pusimos en el HTML*/
        //Buscamos la dirección que queramos en Google Maps y cogemos la latitud y la longitud. Por ejemplo de la EOI de Sevilla.
            latitude: 37.4063307,
            longitude:-6.0097122,
        //Ponemos el zoom.
            zoom:16,
        //Podemos poner que se vea en modo terreno (TERRAIN) o satélite (SATELLITE)
            maptype: "TERRAIN",
        //Para que te ponga abajo las indicaciones de las distancias en metros
            scaleControl: true,
        //Para desactivar ña rueda del ratón cuando pase por encima del mapa.
            scrollwheel: false
        });

        //Esta función va a ser para poner el símbolo de ubicación.
        $.goMap.createMarker({
            latitude: 37.4063307,
            longitude:-6.0097122,
            title:"Curso Desarrollo web",
        //Para poner que en la ubicación aparezca una etiqueta con el nombre. Con false le decimos que no aparezca hasta que no se haga clic en el icono.
            html:{
              content: "<h3>Hi Here</h3><hr><h5>Calle Leonardo da Vinci, 41092 Isla de la Cartuja, Sevilla, Sevilla<br>954 46 33 77</h5>",
              popup: false
            }
        })
});