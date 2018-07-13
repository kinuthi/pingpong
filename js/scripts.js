$(document).ready(function(){
  $('form#god').submit(function(event){
    event.preventDefault();
    var input=parseInt($('input#sun').val());
    var output=pingpong(input)
  })
})
var pingpong=function(input){
  for(x=1;x<=input;x++){
    if(x%15===0){
      var li="<li>"+"pingpong"+"</li>"
    }else if (x%3===0) {
      var li="<li>"+"ping"+"</li>"
    }else if (x%5===0) {
      var li="<li>"+"pong"+"</li>"

    }else {
      var li="<li>"+x+"</li>"
    }
    $("#pop").append(li);
  }
}
