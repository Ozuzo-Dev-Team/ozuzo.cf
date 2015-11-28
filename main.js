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
$(document).ready(function(){
  var a=navigator.userAgent;
  if(-1!=a.search(/iPhone/)||-1!=a.search(/iPad/)||-1!=a.search(/Android/)){
  $("img").css("width","90%");
}
$("#w").fadeIn(2000);
setInterval("change()",200);
});


