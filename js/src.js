$(function () {
      $('.contenido5-index .content').scrollLeft($('.contenido5-index .content')[0].scrollWidth/2);
      $(window).scroll(function () {
        prueba = $(".prueba");
        animateScrollPoints(["left", "opacity"],[["0%","0"],["45%", "1"]],'.contenido3-index .imagen', 50);
        animateScrollPoints(["right", "opacity"],[["0%","0"],["45%","1"]],'.contenido4-index .imagen', 50);
        animateScrollPoints(["opacity", "boxShadow"],[["0.7","0 0 0 black"],["1","0 2px 5px black"]],'.header-index', $(window).height()/2, 1 );
        animateScrollPoints(["animation"],[[""],["inline_contenido 5s"]],'.inline_contenido1', 0, 3);
     });


     
        ciclo = 1;
        imagenes =  $('.content-imagenes ul li img');
        //setInterval(function(){ Slider('.content-imagenes ul li img') }, 3000);

        
});

window.onload = function(){
        
}

function animateScrollPoints(atributo, sentido, nombre, space, extra){
  extra = extra || 0;
  var top = ($(nombre).css("position") != "fixed")? $(nombre).offset().top : $(nombre)[0].offsetTop;
  var pos = [ top -  ((top < $(window).height())? 0  : $(window).height()) + space, $(nombre).offset().top + $(nombre).height() - space];
  if(extra == 1){
    pos = [pos[0], $(document).height() - $(window).height()];
  }else if( extra == 2){
    extra = [];
    extra.push(2);
  }else if( extra == 3 && $(nombre)[0].getAttribute("data-unique") == null){
    $(nombre)[0].setAttribute("data-unique",0);
  }
    if ($(window).scrollTop() <= pos[0]){
      setProperties(atributo, nombre, sentido[0], extra);
   }else if($(window).scrollTop() > pos[1]){
      setProperties(atributo, nombre, sentido[0], [extra[0], true]);
   }else if($(nombre)[0].getAttribute("data-unique") == 0 || $(nombre)[0].getAttribute("data-unique") == null){
      setProperties(atributo, nombre, sentido[1], extra);
      if($(nombre)[0].getAttribute("data-unique") == 0){
        $(nombre)[0].setAttribute("data-unique",1);  
      }
   }
}

function setProperties(properties, nombre, sentido, extra){
  for (var i = 0; i < properties.length; i++) {
    if(extra[0] == 2 && extra[1] == true){
      var unidad = [];
      if(sentido[i].search("%") > -1){
        unidad.push(sentido[i].replace('%',''));
        unidad.push("%");
      }else if(sentido[i].search("px") > -1){
        unidad.push(sentido[i].replace('px',''));
        unidad.push("px");
      }else if(sentido[i].search("em") > -1){
        unidad.push(sentido[i].replace('em',''));
        unidad.push("em");
      }else{
        unidad = sentido;
      }
    $(nombre)[0].style[properties[i]] = -parseFloat(unidad[0])+unidad[1];
    }else{ 
      $(nombre)[0].style[properties[i]] = sentido[i];
    }
  };
}

function move(obj){
  var signo = (obj.getAttribute("data-O") == "left")? 1: -1;
  var num  = $('.contenido5-index .content').scrollLeft()+(signo*($('.contenido5-index .subcontenido5').width()));
  $('.contenido5-index .content').animate({
    scrollLeft: num
  });
}

/*$(document).ready(function(){

  
  //Slider('.content-imagenes ul li img');
  //;
})*/
function Slider(imagen){
  //var Things = [];
  /*for (var i = 0; i < $(imagen).length; i++) {*/

    //alert(ciclo);
   $(imagenes[ciclo-1]).animate({ 
      left : (ciclo*-100)+ '%'
      //transform: "translateX()"
    }, 1000);

   ciclo = (ciclo == $(imagen).length)? 0 : ciclo+1;
   


   
  ///};
  /*for (var i = 0; i < $(imagen).length; i++){
      imagen[i].style.marginLeft = "0px";
  };*/
    /* $(imagen).animate({ 
        marginLeft : '0%'
    });*/
}