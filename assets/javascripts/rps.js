// var userChoice = prompt("Do you choose rock, paper or scissors?");

// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }
// var compare = function(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         alert("The result is a tie!");
//     }
//     if (userChoice === "rock") {
//         if (computerChoice === "scissors") {
//             alert("Rock smashes scissors. You win!");
//         } else {
//             alert("Paper covers rock. You lose.");
//         }
//     }
//     if (userChoice === "paper") {
//         if (computerChoice === "rock") {
//             alert("Paper covers rock. You win!");
//         } else {
//             alert("Scissors cut paper. You lose.");
//         }
//     }
//      if (userChoice=== "scissors") {
//         if (computerChoice === "rock") {
//             alert("Hulk smashes scissors! I mean...rock smashes scissors. You lose.");
//         } else {
//             alert("Scissor cut paper. You win!");
//         }
//     }
// };
// compare(userChoice, computerChoice);
// $('#rock').hover(function(){
// 	$('#rock-text').removeClass('invisible');
// }, function() {
// 	$('#rock-text').addClass('invisible');
// });
// $('#paper').hover(function(){
// 	$('#paper-text').removeClass('invisible');
// }, function() {
// 	$('#paper-text').addClass('invisible');
// });
// $('#scissors').hover(function(){
// 	$('#scissor-text').removeClass('invisible');
// }, function() {
// 	$('#scissor-text').addClass('invisible')
// });


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

$('#rock').click(function(){
	var userChoice = "rock"
	var computerChoice = compChoice();

	if(computerChoice === "rock"){
		alert("It's a tie.");
	} else if(computerChoice === "paper"){
		alert("Paper covers rock. You lose.");
	} else {
		alert("Rock crushes scissors. You win!");
	}
});

$('#paper').click(function(){
	var userChoice = "paper"
	var computerChoice = compChoice();

	$('#result-well').removeClass('invisible');

	if(computerChoice == "paper"){
		// alert("It's a tie.");
		$('#result').html("It's a tie.");
	} else if(computerChoice == "rock"){
		// alert("Paper covers rock. You win!");
		$('#result').html("Paper covers rock. You win!");
	} else {
		// alert("Scissors cut paper. You lose.");
		$('#result').html("Scissors cut paper. You lose.");
	}
});

$('#scissors').click(function(){
	var userChoice = "scissors"
	var computerChoice = compChoice();

	if(computerChoice == "scissors"){
		alert("It's a tie.");
	} else if(computerChoice == "paper"){
		alert("Scissors cut paper. You win!");
	} else {
		alert("Rock crushes scissors. You lose.");
	}
});