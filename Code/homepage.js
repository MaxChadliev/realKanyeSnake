$(document).ready(function(){
  $(".btn1").click(function(){
    $('.btn1').removeClass('active');
    $(this).addClass("active");
    

  });

  $(".btn2").click(function(){

    $('.btn2').removeClass('active');
    $(this).addClass("active");
    
  });
});

var clickButton;
var blah = 1;
$('button').on('click', function(){
  clickButton = $(this).attr("name");
  console.log("clicked");
  if(clickButton === 'easy'){
    // console.log("one")
    blah = -4
  } if(clickButton === 'medium'){
    blah = 1;
    // console.log("blah")
  } if (clickButton === 'kanye'){
    blah =3;
  }})