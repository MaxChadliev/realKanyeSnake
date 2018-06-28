$(document).ready(function(){
  $('.btn1')

  $(function(){
    resizeCanvas();
});

$(window).on('resize', function(){
    resizeCanvas();
});

function resizeCanvas()
{
    var canvas = $('#canvas');
    canvas.css("width", $(window).width());
    canvas.css("height", $(window).height());
}

  $('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})
var modal = document.getElementById("modal");

 
 var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var kanyeFace = new Image();
    kanyeFace.src = "../Images/kisspng-kanye-west-clip-art-west-5b132707caa3a7.44695694152798183183.png"
    var drakeFace = new Image();
    drakeFace.src = "../Images/kisspng-drake-rapper-desktop-wallpaper-young-money-head-5abcd570428bd6.2678425515223248482726.png"
    var jayFace = new Image();
    jayFace.src = "../Images/jayz.png"
    var swiftFace = new Image();
    swiftFace.src = "../Images/swift1.png" 
    var kimFace = new Image();
    kimFace.src = "../Images/crykim.png"
    var kanyeBoss = new Image();
    kanyeBoss.src = "../Images/kanyeBoss.png"
    var trumpFace = new Image();
    trumpFace.src = "../Images/trump.png"
    var grid = 80;
    var snake = {
      x: 320,
      y: 320,
      dx: grid,
      dy: 0,
      cells: [],
      maxCells: 4,

    };

    




    var count = 0;
    var apple = {
      x: 160,
      y: 160,

    };

    var boss = {
      x:320,
      y:320
    }



    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }



var clickButton;
var blah = 1;
$('button').on('click', function(){
  clickButton = $(this).attr("name");
  console.log("clicked");
  if(clickButton === 'easy'){
    $(this).addClass("active");
    blah = -4
  } if(clickButton === 'medium'){
    blah = 1;
    // console.log("blah")
  } if (clickButton === 'kanye'){
    blah =3;
  }
})

// game loop
function loop() {
      requestAnimationFrame(loop);
      // slow game loop to 15 fps instead of 60 - 60/15 = 4
      if (++count < 6) {
        return;
      } 
      count = blah; 
      context.clearRect(0,0,canvas.width,canvas.height);
      snake.x += snake.dx;
      snake.y += snake.dy;


      // wrap snake position on edge of screen
      if (snake.x < 0) {
        snake.x = canvas.width - grid;
      }
      else if (snake.x >= canvas.width) {
        snake.x = 0;
      }
      if (snake.y < 0) {
        snake.y = canvas.height - grid;
      }
      else if (snake.y >= canvas.height) {
        snake.y = 0;
      }
      // keep track of where snake has been. front of the array is always the head
      snake.cells.unshift({x: snake.x, y: snake.y});
      // remove cells as we move away from them
      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }
      // draw apple
        
        
      {context.clearRect(apple.x, apple.y, canvas.width, canvas.height),
        context.drawImage(kanyeBoss,apple.x, apple.y, grid,  grid)
      }
      
      // draw boss - add more if statements for bosses
      var drawBoss = function(){
        if(snake.cells.length === 10)
        {context.clearRect(apple.x, apple.y, canvas.width, canvas.height),
          context.drawImage(drakeFace,apple.x, apple.y, grid+13,  grid+20 );
        }
        if(snake.cells.length === 18)
        {context.clearRect(apple.x, apple.y, canvas.width, canvas.height),
          context.drawImage(jayFace,apple.x, apple.y, grid+10,  grid+5 );
        }
        if(snake.cells.length === 26)
        {context.clearRect(apple.x, apple.y, canvas.width, canvas.height),
          context.drawImage(swiftFace,apple.x, apple.y, grid,  grid);
        }
        if(snake.cells.length === 34)
        {context.clearRect(apple.x, apple.y, canvas.width, canvas.height),
          context.drawImage(kimFace,apple.x, apple.y, grid+5,  grid+5);
        }
        if(snake.cells.length === 43)
        {context.clearRect(apple.x, apple.y, canvas.width, canvas.height),
          context.drawImage(trumpFace, apple.x, apple.y, grid +10 ,  grid+10);
        }
      }
      drawBoss()

     
    


  

      // draw snake
      

      snake.cells.forEach(function(cell, index) {
        context.drawImage(kanyeFace,cell.x, cell.y, grid, grid)

       // snake ate apple
        var eatApple = function (){
          if((snake.cells.length === 10 && (cell.x === apple.x && cell.y === apple.y) || snake.cells.length === 18 && (cell.x === apple.x && cell.y === apple.y) || snake.cells.length === 26 && (cell.x === apple.x && cell.y === apple.y) || snake.cells.length === 34 && (cell.x === apple.x && cell.y === apple.y)|| snake.cells.length === 43 && (cell.x === apple.x && cell.y === apple.y))) {
            snake.maxCells+=2;};

            function calculateScore(){
              var score = document.getElementById("score_value").innerHTML;
              score =  (snake.cells.length * 10)-40;
              if (score >= 0){
              $("#score_value").text(score)
              }
              if (score === 420){
                $('#myModal0').modal('show');

              }

            }

              calculateScore()
              

          } 
          
        
            eatApple();

        
            



        if (cell.x === apple.x && cell.y === apple.y) {

          snake.maxCells++;

          apple.x = getRandomInt(0, 10) * grid;
          apple.y = getRandomInt(0, 10) * grid;
        // } if(snake.cells.length === 5 && cell.x === apple.x && cell.y === apple.y ) {
        //   snake.maxCells+=5;
      }


      
      // eatBoss()
        // check collision with all cells after this one (modified bubble sort)
        for (var i = index + 1; i < snake.cells.length; i++) {
          if(snake.x >= canvas.w || snake.x <= -1 || snake.y >= canvas.h || snake.y <= -1) {                  
            return;
        }
          // collision. reset game
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            apple.x = getRandomInt(0, 10) * grid;
            apple.y = getRandomInt(0, 10) * grid;
          }
        }
      });
    }

   
    

 
  

    document.addEventListener('keydown', function(e) {
      // prevent snake from backtracking on itself
      if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
      }
      else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
      }
      else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
      }
      else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }
    });

    
    requestAnimationFrame(loop());
  })

  $(document).ready(function(){
    $(".btn1").click(function(){
      $('.btn1').removeClass('active');
      $(this).addClass("active");
      
  
    });
  
  
  });

$(document).ready(function(){
  $(".btn1").click(function(){
  
    $('.btn1').removeClass('active');
    $('.btn1').removeClass('active');
    $(this).addClass("active");
    
  });
  $(".btn1").click(function(){

    $('.btn1').removeClass('active');
    $('.btn1').removeClass('active');
    $(this).addClass("active");
  });
  $(".btn1").click(function(){

    $('.btn1').removeClass('active');
    $('.btn1').removeClass('active');
    $(this).addClass("active");
  });
});
