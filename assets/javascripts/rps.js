
function compChoice() {
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
	    return "rock";
	} else if(computerChoice <= 0.67) {
	    return "paper";
	} else {
	    return "scissors";
	}
}

var tieMsg = "<h2><i class='fab fa-black-tie'></i> It's a tie!</h2>";

$('#result_card').hide();

$('#rock').click(function(){
	var userChoice = "rock"
	var computerChoice = compChoice();
	$('#result_card').show();
	if(computerChoice === "rock"){
		$('#result_msg').html(tieMsg);
	} else if(computerChoice === "paper"){
		$('#result_msg').html("<h2><i class='far fa-sad-tear'></i> Huh?!</h2><h3>Paper covers rock: You lose</h3>");
	} else {
		$('#result_msg').html("<h2><i class='far fa-laugh-beam'></i> Boom!</h2><h3>Rock crushes scissors: You win!</h3>");
	}
});

$('#paper').click(function(){
	var userChoice = "paper"
	var computerChoice = compChoice();
	$('#result_card').show();

	if(computerChoice == "paper"){
		$('#result_msg').html(tieMsg);
	} else if(computerChoice == "rock"){
		// alert("Paper covers rock. You win!");
		$('#result_msg').html("<h2><i class='far fa-laugh-squint'></i> Yes!</h2><h3>Paper covers rock: You win!</h3>");
	} else {
		// alert("Scissors cut paper. You lose.");
		$('#result_msg').html("<h2><i class='fas fa-band-aid'></i> Ouch!</h2><h3>Scissors cut paper: You lose.</h3>");
	}
});

$('#scissors').click(function(){
	var userChoice = "scissors"
	var computerChoice = compChoice();
	$('#result_card').show();

	if(computerChoice == "scissors"){
		$('#result_msg').html(tieMsg);
	} else if(computerChoice == "paper"){
		$('#result_msg').html("<h2><i class='fas fa-cut'></i> Slash!</h2><h3>Scissors cut paper: You win!</h3>");
	} else {
		$('#result_msg').html("<h2><i class='far fa-sad-cry'></i> Oof!</h2><h3>Rock crushes scissors: You lose.</h3>");
	}
});