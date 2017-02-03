

/* Hacemos desaparecer el contenido de cada uno de los menus*/
$(".contenido").hide();

/* Hacemos aparecer el contenido cuando pasamos el raton por el menu*/

    /* Añadimos una categoria Activa al menu sobre el que esta el ratón */

$(".menu").hover (function(e){
    e.preventDefault();
    $(this).addClass('active');
  /* El menú selecionado, con la clase de activa, se desplegara */
      if($(this).hasClass('active')){
       $(this).next().slideDown(function(){
        $(this).filter("middle");
       }
     )
        }

  } , function (e){
        $(this).removeClass('active');
        $('.contenido li').mouseenter(function(){
                e.preventDefault();
              }
            )
      $('navlateral').mouseleave(function(){
      $(".menu").next().slideUp('10000');
      }
    )
  }
  )
