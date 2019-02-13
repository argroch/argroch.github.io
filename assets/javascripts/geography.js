// var states = ["California","Oregon","Washington","Idaho","Montana","Utah","Arizona","Colorado","New Mexico","Alaska","Hawaii","Texas","Oklahoma","Kansas","Nebraska","South Dakota","North Dakota","Minnesota","Wisconsin","Iowa","Missouri","Arkansas","Louisiana","Georgia","Florida","Mississippi","Alabama","South Carolina","North Carolina","Kentucky","Tennessee","Illinois","Michigan","Indiana","Ohio","Virginia","West Virginia","New York","Pennsylvania","Maryland","Delaware","New Jersey","Massachusetts","Connecticut","Rhode Island","Maine","New Hampshire","Vermont","Wyoming","Nevada"]
//
// // var states = ["California","Oregon","Washington","Alaska","Nevada","Hawaii"]
//
// // Words in string are give uppercase first letters
// String.prototype.capitalize = function() {
//   return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
// };
//
// var score = 0;
// var guesses = 0;
// var correct_ans = [];

// $('#start_btn').click(function(){
// 	$(this).addClass('invisible');
// 	$('#quiz').removeClass('invisible');
//   $('#answer_list').html("");
//
//   var guessed = false;
//
//   $(document).keypress(function(e) {
//     if(e.which == 13) {
//       var ans = $('#answer_field').val();
//       ans = ans.toLowerCase().capitalize();
//       $('#answer_field').val("");
//       if ( states.includes( ans ) ) {
//         if ( correct_ans.includes( ans ) ) {
//         	guessed = true;
//         } else {
//           $('#answer_list').append('<li>' + ans + ' <span class="correct">&#x2714;</span></li>');
//           correct_ans.push(ans);
//           score++;
//         }
//       } else {
//       	$('#answer_list').append('<li>' + ans + ' <span class="wrong">&#x2717;</span></li>');
//       }
//       if (guessed == false) {
//         guesses++;
//       } else {
//         $('#answer_field').attr('placeholder',"Already guessed!");
//       }
//     }
//
//     if ( guesses == states.length ) {
// 			$('#answer_field').addClass('invisible');
//       $('#display_score').html('<p>Your score: ' + score + '/' + states.length + '</p>');
//       $('#display_answers').html('<div id="multi_col3"><ol id="correct_answers"></ol></div>');
//       for (var i = 0; i < correct_ans.length; i++) {
//           $('#correct_answers').append('<li>' + correct_ans[i] + '</li>');
//       }
//       $('#gameOver').modal('show');
//       $('#quiz_end').click(function() {
//         location.reload();
//       });
//       // $('#quiz').addClass('invisible');
//       // $('#quiz').html('<p>Type in a state and hit enter to submit.</p><input type="text" id="answer_field" autofocus><div id="multi_col5"><ol id="answer_list"></ol></div>');
//       // $('#start_btn').removeClass('invisible');
//       // correct_ans.length = 0;
//       // score = guesses = 0;
// 		}
//   });
// });

// var states = ["hawaii","alaska","california","oregon","washington"];
var states = ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachussets", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming"];
count = 0
dupes = []

var start = new Date;

function startTimer(duration, display) {
  var start = Date.now(),
    diff,
    minutes,
    seconds;

  function timer() {
    diff = duration - (((Date.now() - start) / 1000) | 0);

    minutes = (diff / 60) | 0;
    seconds = (diff % 60) | 0;

    // minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (diff <= 0) {
      start = Date.now() + 1000;
    }
  };
  timer();
  my_interval = setInterval(timer, 1000);
  start_timer_vals = [my_interval, start]
  return start_timer_vals;
};

function stopQuiz() {
  clearInterval(start_timer_vals[0]);
  $('#my_input,#stop_quiz').addClass('invisible');
  gameOver();
};

function statesQuiz() {
  var ans = $('#my_input').val().toLowerCase();
  if (states.includes(ans) && !dupes.includes(ans)){
    count++;
    // $('#demo').append("<span class='state-name'>" + count + ". "+ ans + "</span><br />");
    $('#answer_list').append('<li class="state-name">' + ans + ' <span class="correct">&#x2714;</span></li>');
    $('#my_input').val("");
    dupes.push(ans);
  }
  if (count == 50) {
    stopQuiz();
  }
};

function gameOver() {
  var seconds = (((Date.now() - start_timer_vals[1]) / 1000) | 0),
  minutes = 0;

  if (seconds > 59) {
    minutes = Math.floor(seconds/60);
    seconds = seconds%60;
  }
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (seconds >= 180) {
    $('#display_score').html('<p>You ran out of time!</p><p>Your score: ' + count + '/' + states.length + '</p>');
  } else {
    $('#display_score').html('<p>Your score: ' + count + '/' + states.length + '</p><p>Completed in ' + minutes + ":" + seconds);
  }
  $('#game_over').modal('show');
};

function startStatesQuiz() {
  var threeMinutes = 60 * 3,
    display = document.querySelector('#time');
  $('#quiz_start,#quiz_page_header').addClass('invisible');
  $('#quiz,#stop_quiz').removeClass('invisible');
  $('#my_input').focus();
  startTimer(threeMinutes, display);

  window.setInterval( function(){
    var seconds = (((Date.now() - start_timer_vals[1]) / 1000) | 0);
    if (seconds == 170) {
      $('#time').addClass('almost-up');
    }
    if (seconds == 180) {
      $('#time').removeClass('almost-up');
      stopQuiz();
    }
  },10);
}

window.onload = function() {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      startStatesQuiz();
  }
}

function reloadMe() {
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
}
