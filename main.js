var i=0;

function change(){
  i++;
  /*
  r=Math.floor( Math.random() * 255 );
  g=Math.floor( Math.random() * 255 );
  b=Math.floor( Math.random() * 255 );

  $("strong").css("color","rgb("+r+","+g+","+b+")");
  */
  if(i%2==0){
  $("strong").fadeOut(2000);
}else{
  $("strong").fadeIn(2000);
}
}
var isshowmenu=0;
function reg(){
  $("#m > .fa-times").live("click",function(){
if(isshowmenu==1){
  isshowmenu=0;
  $({  borderSpacing: 10 }).animate({  borderSpacing: 0 }, {
      step: function(now,fx) {
        $('#w').css({
                  "-webkit-filter": "blur("+now+"px)",
                  "filter": "blur("+now+"px)",
                  "-ms-filter": "blur("+now+"px)"
              });
      },
      complete: function(){
        $("#m").fadeOut(500);
        $("#m > .fa-times").die("click");
      },

      duration:'slow'
  },'linear');
}
  });
}
$(function(){


  $(".fa-bars").click(function(){
    if(isshowmenu==0){

    $({  borderSpacing: 0 }).animate({  borderSpacing: 10 }, {
        step: function(now,fx) {
          $('#w').css({
                    "-webkit-filter": "blur("+now+"px)",
                    "filter": "blur("+now+"px)",
                    "-ms-filter": "blur("+now+"px)"
                });
        },
        complete: function(){
          $("#m").fadeIn(500);
          reg();
        },
        duration:'slow'
    },'linear');

    isshowmenu=1;
  }else{
    isshowmenu=0;
    $({  borderSpacing: 10 }).animate({  borderSpacing: 0 }, {
        step: function(now,fx) {
          $('#w').css({
                    "-webkit-filter": "blur("+now+"px)",
                    "filter": "blur("+now+"px)",
                    "-ms-filter": "blur("+now+"px)"
                });
        },
        complete: function(){
          $("#m").fadeOut(500);
        },

        duration:'slow'
    },'linear');


  }
});

});

$(document).ready(function(){
  var a=navigator.userAgent;
  if(-1!=a.search(/iPhone/)||-1!=a.search(/iPad/)||-1!=a.search(/Android/)){
  $("img").css("width","90%");
}
$("#w").fadeIn(2000);
setInterval("change()",1000);
});


