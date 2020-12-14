
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

$('#result_card').hide();

$('#rock').click(function(){
	var userChoice = "rock"
	var computerChoice = compChoice();
	$('#result_card').show();
	if(computerChoice === "rock"){
		$('#result_msg').html("It's a tie.");
	} else if(computerChoice === "paper"){
		$('#result_msg').html("Paper covers rock. You lose.");
	} else {
		$('#result_msg').html("Rock crushes scissors. You win!");
	}
});

$('#paper').click(function(){
	var userChoice = "paper"
	var computerChoice = compChoice();
	$('#result_card').show();

	if(computerChoice == "paper"){
		// alert("It's a tie.");
		$('#result_msg').html("It's a tie.");
	} else if(computerChoice == "rock"){
		// alert("Paper covers rock. You win!");
		$('#result_msg').html("Paper covers rock. You win!");
	} else {
		// alert("Scissors cut paper. You lose.");
		$('#result_msg').html("Scissors cut paper. You lose.");
	}
});

$('#scissors').click(function(){
	var userChoice = "scissors"
	var computerChoice = compChoice();
	$('#result_card').show();

	if(computerChoice == "scissors"){
		$('#result_msg').html("It's a tie.");
	} else if(computerChoice == "paper"){
		$('#result_msg').html("Scissors cut paper. You win!");
	} else {
		$('#result_msg').html("Rock crushes scissors. You lose.");
	}
});