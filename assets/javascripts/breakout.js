var playArea = document.getElementById("play_area");
var ctx = playArea.getContext("2d");
var ballRadius = 10;
var x = playArea.width/2;
var y = playArea.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (playArea.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

var bricks = [];
for(var c=0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - playArea.offsetLeft;
  if(relativeX > 0 && relativeX < playArea.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
        	if(score == brickRowCount*brickColumnCount) {
            var msgArea = document.getElementById("msg_area");
            var reloadBtn = document.getElementById("reload_btn");
            msgArea.innerHTML += "<p><strong>You did it! Good job!</strong></p>";
            reloadBtn.classList.remove("invisible");
            var canvas = document.getElementById("play_area");
            canvas.classList.add("invisible");
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#E05A17";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, playArea.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#3D7A3B";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
    	if(bricks[c][r].status == 1) {
	      var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
	      var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
	      bricks[c][r].x = brickX;
	      bricks[c][r].y = brickY;
	      ctx.beginPath();
	      ctx.rect(brickX, brickY, brickWidth, brickHeight);
	      ctx.fillStyle = "#0095DD";
	      ctx.fill();
	      ctx.closePath();
	    }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#F5C628";
  ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#F52834";
  ctx.fillText("Lives: "+lives, playArea.width-65, 20);
}

function draw() {
  ctx.clearRect(0, 0, playArea.width, playArea.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if(x + dx > playArea.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  } else if(y + dy > playArea.height-ballRadius) {
  	if(x > paddleX && x < paddleX + paddleWidth) {
  		dy = -dy;
  	} else {
  		lives--;
			if(!lives) {
				var msgArea = document.getElementById("msg_area");
				var reloadBtn = document.getElementById("reload_btn");
        var pa = document.getElementById("play_area");
				msgArea.innerHTML += "<p><strong>GAME OVER!</strong></p><p>Nice try, though.</p>";
				reloadBtn.classList.remove("invisible");
        pa.classList.add("invisible");
				return;
			} else {
				sleep(2);
				x = playArea.width/2;
				y = playArea.height-30;
				dx = 2;
				dy = -2;
				paddleX = (playArea.width-paddleWidth)/2;
			}
  	}
  }

  if(rightPressed && paddleX < playArea.width-paddleWidth) {
    paddleX += 7;
  } else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
  
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

function startGame() {
  var gameArea = document.getElementById("play_area");
  gameArea.classList.remove("invisible");
	draw();
	var startBtn = document.getElementById("start_btn");
	startBtn.classList.add("invisible");
  var gameTitle = document.getElementById("breakout_title");
  gameTitle.classList.add("invisible");
}

function reloader() {
	document.location.reload();
}

function sleep(seconds) {
  var waitUntil = new Date().getTime() + seconds*1000;
  while(new Date().getTime() < waitUntil) true;
}