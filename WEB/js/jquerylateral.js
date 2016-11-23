$(document).ready(function() {});

/* Hacemos desaparecer el contenido de cada uno de los menus*/
$(".contenido").hide();

/* Hacemos aparecer el contenido cuando pasamos el raton por el menu*/

    /* Añadimos una categoria Activa al menu sobre el que esta el ratón */

$(".menu").hover (function(e){
$(this).addClass('active');
  /* El menú selecionado, con la clase de activa, se desplegara */
    if($(this).hasClass('active')){
       $(this).next().slideToggle('slow');
      e.preventDefault();
          }
  } , function (e){
      $('.contenido').slideUp();
      $(this).removeClass('active');
      e.preventDefault();
  }
);

    /* El menú selecionado, con la clase de activa, se desplegara */
